<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/',[\App\Http\Controllers\MainController::class,'index']);
Route::get('/task/{num}',[\App\Http\Controllers\MainController::class,'task']);
Route::get('/tasks/{wallet?}', [\App\Http\Controllers\MainController::class,'tasks']);
Route::get('/create', [\App\Http\Controllers\MainController::class,'create'])->name('create');
Route::post('/save_img',[\App\Http\Controllers\ImageController::class,'save']);
Route::delete('/save_img',[\App\Http\Controllers\ImageController::class,'delete']);
Route::post('/newtask',[\App\Http\Controllers\MainController::class,'newTask']);
Route::get('/exec/{wallet?}',[\App\Http\Controllers\MainController::class,'exec']);
Route::post('/taketask',[\App\Http\Controllers\MainController::class,'take']);
Route::post('/updtask',[\App\Http\Controllers\MainController::class,'updtask']);
Route::post('/markasdone',[\App\Http\Controllers\MainController::class,'markasdone']);
Route::get('/mywallet',[\App\Http\Controllers\MainController::class,'mywallet']);
Route::get('/taken/{wallet?}',[\App\Http\Controllers\MainController::class,'takentasks']);
Route::get('/video',function (){
    return view('video');
});
