<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get("/get",function(){
return [
    'success'=>true,
    'status'=>200
];
});
