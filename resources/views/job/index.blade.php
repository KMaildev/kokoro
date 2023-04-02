@extends('layouts.main')
@section('content')
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
                    求人情報
                @else
                    Job Listings
                @endif
            </em>
        </section>

        <section class="content_page">

            <section class="left">
                @include('layouts.quick_link')
            </section>

            <section class="right">
                <section class="business page_pb">
                    @foreach ($jobs as $job)
                        <h3>
                            @if (session('key') == 'jp')
                                {{ $job->job_title_jp ?? '' }}
                            @else
                                {{ $job->job_title_eng ?? '' }}
                            @endif
                        </h3>
                        <section class="text_h4">
                            <img src="{{ $job->photo ?? '' }}"  alt="Ko Ko Ro" align="left"
                                style="width: 37%; height: 400; background-size: center; object-fit: cover;">
                            <p style="text-align: justify">
                                @if (session('key') == 'jp')
                                    {!! $job->description_jp ?? '' !!}
                                @else
                                    {!! $job->description_eng ?? '' !!}
                                @endif
                            </p>
                        </section>
                    @endforeach
                </section>

                @include('layouts.quick_contact')
            </section>

        </section>
    </section>
    </section>
@endsection
