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
                    組織図
                @else
                    Organization Chart
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
                                組織図
                            @else
                                Organization Chart
                            @endif
                        </h3>
                    </center>
                    <img src="https://shwelannhpwint.com/assets/images/c1.png"
                        style="background-color:white; width: 100%; height: 590px; background-size: center; object-fit: contain;">
                </section>

                @include('layouts.quick_contact')
            </section>

        </section>
    </section>
    </section>
@endsection
