<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\ActivitiesController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\LangController;
use App\Http\Controllers\RecruitmentInformationController;
use Illuminate\Support\Facades\Route;


Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::resource('contact', ContactController::class);
Route::resource('activities', ActivitiesController::class);
Route::resource('recruitment_information', RecruitmentInformationController::class);
Route::get('recruitment_process', [RecruitmentInformationController::class, 'recruitmentProcess'])->name('recruitment_process');
Route::resource('job', JobController::class);

Route::resource('about', AboutController::class);
Route::get('md', [AboutController::class, 'mdMessage'])->name('md');
Route::get('organization_chart', [AboutController::class, 'organization'])->name('organization_chart');
Route::get('team', [AboutController::class, 'team'])->name('team');



Route::get('en', [LangController::class, 'lang_eng'])->name('en');
Route::get('jp', [LangController::class, 'lang_jp'])->name('jp');
