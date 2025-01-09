<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post("/logout", [Auth::class, "logOutUser"])->middleware('auth:sanctum');


Route::post("/signup",[Auth::class,"signUp"]);

Route::post("/login",[Auth::class,"Login"]);
