<?php

namespace App\Http\Controllers;


use App\Models\signUp as signUpModel;

use App\Models\User;
use Illuminate\Http\Request;

use App\Http\Requests\signUp as HttpRequest;

class Auth extends Controller
{
    public $UserModel;
    function __construct()
    {
        $this->UserModel = new User();
    }
    function signUp(HttpRequest $request)
    {

        $userCredential = $this->UserModel->create(
            $request->all()
        );
        $token = $userCredential->createToken('main')->plainTextToken;
        return response()->json([
            "status" => 200,
            "token" => $token
        ]);

    }
}
