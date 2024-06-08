<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Responses extends Model
{
    use HasFactory;
    protected $with=['user'];
    function task()
    {
        return $this->hasOne(Task::class,'id','task_id');
    }
    function user()
    {
        return $this->hasOne(User::class,'id','user_id');
    }
}
