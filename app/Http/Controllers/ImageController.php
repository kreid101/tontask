<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
    function save(Request $request)
    {
        $image=Storage::drive('local')->putFile("/public/tmp",$request->file('files'));
        return $image;
    }
    function delete(Request $request)
    {
        Storage::drive('local')->delete($request->getContent());
        return response("",200);

    }

}
