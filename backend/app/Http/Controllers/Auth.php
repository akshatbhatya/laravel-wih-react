<?php

namespace App\Http\Controllers;

use App\Models\signUp as signUpModel;

use Illuminate\Http\Request;

use App\Http\Requests\signUp as HttpRequest;

class Auth extends Controller
{
    function signUp(HttpRequest $request){
        signUpModel::create(
            $request->all()
        );

        return response()->json([
            "status" => 200,
            "data" => $request->all(), 
        ]);

    }
}
