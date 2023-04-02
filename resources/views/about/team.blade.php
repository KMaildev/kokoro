@extends('layouts.main')
@section('content')
    <style>
        div.gallery {
            margin: 5px;
            border: 1px solid #ccc;
            float: left;
            width: 180px;
        }

        div.gallery:hover {
            border: 1px solid #777;
        }

        div.gallery img {
            width: 100%;
            height: auto;
        }

        div.desc {
            padding: 15px;
            text-align: center;
        }
    </style>
    <section id="page">

        <section class="pan_list">
            <a href="{{ route('home') }}">
                @if (session('key') == 'jp')
                    トップページ
                @else
                    Main Page
                @endif
            </a>
            &gt;
            <em>
                @if (session('key') == 'jp')
                    私たちのチーム
                @else
                    Our Teams
                @endif
            </em>
        </section>

        <section class="content_page">

            <section class="left">
                @include('layouts.quick_link')
            </section>

            <section class="right">
                <section class="business page_pb">
                    <center>
                        <h3>
                            @if (session('key') == 'jp')
                                私たちのチーム
                            @else
                                Our Teams
                            @endif
                        </h3>
                    </center>
                    <section class="box">
                        @foreach ($teams as $team)
                            <div class="gallery">
                                <img src="{{ $team->photo }}" alt="Ko Ko Ro" data-enlargeable="">
                                <div class="desc">
                                    {{ $team->name ?? '' }}
                                    <br>
                                    <span>
                                        {{ $team->position ?? '' }}
                                    </span>
                                </div>
                            </div>
                        @endforeach
                    </section>
                </section>
                @include('layouts.quick_contact')
            </section>

        </section>
    </section>
    </section>
@endsection
