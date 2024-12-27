<?php

namespace App\Http\Controllers;

use App\Http\Requests\HandleLoginRequest;
use Illuminate\Support\Facades\Auth as Authenticate;
use App\Http\utils\HandleResponseAndError;

use App\Models\signUp as signUpModel;
use App\Models\User;
use App\Http\Requests\signUp as HttpRequest;


class Auth extends Controller
{
    public $UserModel;
    public $responses;
    public  function __construct()
    {
        $this->UserModel = new User();
        $this->responses = new HandleResponseAndError();
    }
   public function signUp(HttpRequest $request)
    {
        try {
            $userCredential = $this->UserModel->create(
                $request->validated()
            );
            $token = $userCredential->createToken('main')->plainTextToken;
            return  $this->responses->HandleResponseWithToken(201, "User Created Successfully", $token);
        } catch (\Throwable $th) {
            return $this->responses->handleErrorResponse(400, "Error : ".$th->getMessage());
        }
    }

    public function Login(HandleLoginRequest $request)
    {
        $data = $request->validated();

        if (Authenticate::attempt($data)) {
            $user = Authenticate::user();
            $token =$user->createToken('main')->plainTextToken;

            try {
                return  $this->responses->HandleResponseWithToken(200, "User Logged In Successfully", $token);
            } catch (\Throwable $th) {
                return $this->responses->handleErrorResponse(400, "Error : ".$th->getMessage());
            }
        } else {
          return $this->responses->handleErrorResponse(400, "Invalid Credentials");
        }
    }
}
