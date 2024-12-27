<?php

namespace App\Http\utils;


class HandleResponseAndError
{
  public  function handleErrorResponse($status,$message){
    return response()->json([
        "status"    =>  $status,
        "message"   =>  $message
    ],$status);
    }

    public  function HandleResponse($status,$message){
     return response()->json([
         "status"    =>  $status,
         "message"   =>  $message
     ],$status);
    }
    
    public  function HandleResponseWithData($status,$message,$data){
    return response()->json([
        "status"    =>  $status,
        "message"   =>  $message,
        "data"      =>  $data
    ],$status);
    
    }

    public  function HandleResponseWithToken($status,$message,$token){
        return response()->json([
            "status"    =>  $status,
            "message"   =>  $message,
            "token"      =>  $token
        ],$status);
    }

}