<?php
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\admin\DashboardController;
use App\Http\Controllers\admin\ServiceController;
use App\Http\Controllers\admin\TempImageController;
use App\Http\Controllers\admin\ProjectController as AdminProjectController;
use App\Http\Controllers\front\ProjectController as FrontProjectController;
use App\Http\Controllers\front\ServiceController as FrontServiceController;
use Illuminate\Support\Facades\Route;

// Authentication Routes
Route::post('authenticate', [AuthenticationController::class, 'authenticate']);

// Public Routes for services
Route::get('get-services', [FrontServiceController::class, 'index']);
Route::get('get-latest-services', [FrontServiceController::class, 'latestServices']);
Route::get('get-service/{id}', [FrontServiceController::class, 'service']);

// Public Routes for Projects
Route::get('get-projects', [FrontProjectController::class, 'index']);
Route::get('get-latest-projects', [FrontProjectController::class, 'latestProjects']);
Route::get('get-project/{id}', [FrontProjectController::class, 'project']);

// Protected Routes
Route::group(['middleware' => ['auth:sanctum']], function () {
    // Dashboard Routes
    Route::get('dashboard', [DashboardController::class, 'index']);
    Route::post('logout', [AuthenticationController::class, 'logout']);

    // Service Routes
    Route::post('services', [ServiceController::class, 'store']);
    Route::get('services', [ServiceController::class, 'index']);
    Route::put('services/{id}', [ServiceController::class, 'update']);
    Route::get('services/{id}', [ServiceController::class, 'show']);
    Route::delete('services/{id}', [ServiceController::class, 'destroy']);

    // Project Routes
    Route::post('projects', [AdminProjectController::class, 'store']);
    Route::get('projects', [AdminProjectController::class, 'index']);
    Route::put('projects/{id}', [AdminProjectController::class, 'update']);
    Route::get('projects/{id}', [AdminProjectController::class, 'show']);
    Route::delete('projects/{id}', [AdminProjectController::class, 'destroy']);

    // Temporary Image Routes
    Route::post('temp-images', [TempImageController::class, 'store']);
});
