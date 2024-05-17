<?php

namespace App\Http\Controllers;

use App\Classes\Status;
use App\Models\Image;
use App\Models\Responses;
use App\Models\Task;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use function MongoDB\BSON\fromJSON;

class MainController extends Controller
{

    function index()
    {
        return Inertia::render('Main');
    }
    function tasks(Request $request)
    {
        $tasks=Task::with('responses')->where('user_id','=',$request->wallet)->orderBy('created_at','desc')->get();
        $res=Responses::with('task')->where('user_id','=',$request->wallet)->get();
        return Inertia::render('Tasks',['CreatedTasks'=>$tasks,'TakenTasks'=>$res]);
    }
    function task(Request $request)
    {
        $task=Task::with('responses')->find($request->num);
        return Inertia::render("TaskPage",['task'=>$task]);
    }
    function create()
    {
        return Inertia::render('Create');
    }

    function newTask(Request $request)
    {
        $task=new Task();
        $user=User::find($request->wallet);
        if($user == null)
        {
           $user= $this->newUser($request);
        }
        $task->user_id=$user->wallet;
        $task->headline=$request->headline;
        $task->description=$request->desc;
        $task->price=$request->price;
        $task->status=Status::$status['created'];
        $task->save();
        $this->moveAndSave($request->images,$task);

        return redirect('/');
    }
    function newUser($req)
    {
        $user = new User();
        $user->wallet=$req->wallet;
        $user->save();
        return $user;
    }
    function newResponse($work,$user)
    {
        $response=new Responses();
        $response->task_id=$work->id;
        $response->user_id=$user->wallet;
        $response->save();
    }
    function moveAndSave(Array $images,$task)
    {
        foreach ($images as $img)
        {
            if(Storage::drive('local')->exists($img))
            {
                $path=explode('/',$img);
                $path[1]='pmt';
                $new=implode('/',$path);
                Storage::drive('local')->move($img,$new);
                $image=new Image();
                $image->link=$new;
                $image->task_id=$task->id;
                $image->save();
            }
        }
    }
    function exec(Request $request)
    {
        $tasks=null;
        if($request->wallet != null)
        {
            $tasks=Task::where('user_id','!=',$request->wallet)->get();
        }
        else
        {
            $tasks=Task::all();
        }
        return Inertia::render("Exec",['tasks'=>$tasks]);
    }
    function take(Request $request)
    {
        $task = json_decode($request->getContent());
        $work = Task::find($task->id);
        $user = User::find($task->wallet);
        if ($user == null) {
            $user = $this->newUser($request);
        }
        $res = Responses::where('task_id', '=', $work->id)->where('user_id', '=', $user->wallet)->first();
        if ($res == null)
        {
            $this->newResponse($work,$user);
        }
        else
        {
            throw new \Exception("task already taken");
        }
        return response("responses added",200);
    }
    function  updtask(Request $request)
    {

       $item = Task::find($request->id);
       $item->status=$request->status;
       $item->exec_id=$request->exec;
       $item->save();
    }
}
