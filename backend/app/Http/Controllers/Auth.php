<?php

namespace App\Http\Controllers;

use App\Models\signUp as signUpModel;

use App\Models\User;
use Illuminate\Http\Request;

use App\Http\Requests\signUp as HttpRequest;

class Auth extends Controller
{
    public $UserModel;
      function __construct() {
        $this->UserModel = new User();
    }
    function signUp(HttpRequest $request){
        
        $this->UserModel->create(
            $request->all()
        );

        return response()->json([
            "status" => 200,
            "data" => $request->all(), 
        ]);

    }
}
