<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RecruitmentInformationController extends Controller
{
    public function index()
    {
        return view('recruitment_information.index');
    }

    public function recruitmentProcess()
    {
        return view('recruitment_information.recruitment_process');
    }
}
