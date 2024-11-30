<?php
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\admin\DashboardController;
use Illuminate\Support\Facades\Route;

Route::post('authenticate', [AuthenticationController::class, 'authenticate']);

Route::group(['middleware' => ['auth:sanctum']], function(){
    Route::get('dashboard', [DashboardController::class, 'index']);
    Route::post('logout', [AuthenticationController::class, 'logout']);
});

?>    