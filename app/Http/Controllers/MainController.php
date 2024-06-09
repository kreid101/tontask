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
        return Inertia::render('Tasks',['CreatedTasks'=>$tasks]);
    }
    function task(Request $request)
    {
        $task=Task::with('responses','user')->find($request->num);
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
        $task->tags=$request->tags;
        $task->price=$request->price;
        $task->status=Status::$status['created'];
        $task->save();
        $this->moveAndSave($request->images,$task);
        $this->sendToBot($user);
        return Inertia::render('Create')->with('flash.message','success');
    }
    function sendToBot($user)
    {
        $botToken = "6822998882:AAHvtHF3yeWZg5kKsKIbrOd3Et9OhOHmMM8";
        $chatId = $user->tid;
        $message = "You created new Task!\n It`s available on link: \n https://t.me/taskton_bot/tontask?startapp";

        $url = "https://api.telegram.org/bot$botToken/sendMessage";

        $postFields = [
            'chat_id' => $chatId,
            'text' => $message,
        ];

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $postFields);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $response = curl_exec($ch);
        curl_close($ch);
    }
    function newUser($req)
    {
        $queryString = $req->initdata;
        parse_str($queryString, $initData);  // Split into key-value pairs
        try {
            $initData['user'] = json_decode(urldecode($initData['user']), true);
        } catch (Exception $e) {
            echo "Error parsing user data: " . $e->getMessage();
        }
        $user = new User();
        $user->fname=$initData['user']['first_name'];
        $user->lname=$initData['user']['last_name'];
        $user->username=$initData['user']['username'];
        $user->tid=$initData['user']['id'];
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
            $tasks=Task::where('user_id','!=',$request->wallet)->orderBy('created_at','desc')->get();
        }
        else
        {
            $tasks=Task::orderBy('created_at','desc')->all();
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
    function markasdone(Request $req)
    {
        $item = Task::find($req->id);
        $item->status=2;
        $item->save();
        return Inertia::render("TaskPage",['task'=>$item]);
    }
    function mywallet()
    {
        return Inertia::render('MyWallet');
    }
    function takentasks(Request $req)
    {
        $taken=Task::where('exec_id','=',$req->wallet)->get();
        return Inertia::render('TakenTasks',['taken'=>$taken]);
    }
}
