<?php

namespace App\Http\Controllers;

use App\Models\Team;
use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function index(Request $request)
    {
        return view('about.index');
    }

    public function mdMessage(Request $request)
    {
        return view('about.md_message');
    }

    public function organization(Request $request)
    {
        return view('about.organization');
    }

    public function team(Request $request)
    {
        $teams = Team::all();
        return view('about.team', compact('teams'));
    }
}
