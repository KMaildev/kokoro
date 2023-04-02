@extends('layouts.main')
@section('content')
    <style>
        div.gallery {
            margin: 5px;
            border: 1px solid #ccc;
            float: left;
            width: 180px;
            height: 180px;
        }

        div.gallery:hover {
            border: 1px solid #777;
        }

        div.gallery img {
            width: 180px;
            height: 180px;
            background-size: center;
            object-fit: cover;
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
                    私たちの活動
                @else
                    Our Activities
                @endif
            </em>
        </section>

        <section class="content_page">

            <section class="left">
                @include('layouts.quick_link')
            </section>

            <section class="right">
                <section class="business page_pb">
                    <h3>
                        @if (session('key') == 'jp')
                            私たちの活動
                        @else
                            Our Activities
                        @endif
                    </h3>

                    @foreach ($activities as $activitie)
                        <section class="box">
                            <p>
                                @if (session('key') == 'jp')
                                    {!! $activitie->description_jp !!}
                                @else
                                    {!! $activitie->description_eng !!}
                                @endif
                            </p>
                            @php
                                $values = explode(',', $activitie->gallery);
                            @endphp
                            @foreach ($values as $gallery)
                                <div class="gallery">
                                    <img src="{{ $gallery }}" alt="Ko Ko Ro" data-enlargeable="">
                                </div>
                            @endforeach
                        </section>
                        <hr>
                    @endforeach

                </section>
            </section>
        </section>
    </section>
    </section>
@endsection
