<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;
    protected $guarded=[];
    protected $with=['images'];
    function images()
    {
        return $this->hasMany(Image::class,'task_id','id');
    }
    function responses()
    {
        return $this->hasMany(Responses::class,'task_id','id');
    }
    function user()
    {
        return $this->hasOne(User::class,'id','user_id');
    }
    protected function casts(): array
    {
        return [
            'created_at' => 'datetime:d-m-Y',
        ];
    }
}
