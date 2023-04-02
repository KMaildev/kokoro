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
                    海外採用の流れ
                @else
                    Overseas Recruitment Process
                @endif
            </em>
        </section>

        <section class="content_page">

            <section class="left">
                @include('layouts.quick_link')
            </section>

            <section class="right">
                <section class="business page_pb">
                    <div>

                        <h3>
                            @if (session('key') == 'jp')
                                海外採用の流れ
                            @else
                                Overseas Recruitment Process
                            @endif
                        </h3>

                        <p style="text-align: justify">
                            @if (session('key') == 'jp')
                                採用手続きは、競争力のある労働力を生み出すための主要な機能的プロセスです。従業員を募集する手順は、会社または雇用主の会社に代わって働く代理店から始まります。
                                <br>
                                外国、特に日本の他の国で働くことを希望しているスキルと希望の専門家のために、Ko Ko Roはあなたに最も適した仕事を見つけるお手伝いをします.
                            @else
                                The recruitment procedure is the major functional process for the creation of competitive
                                working strength. The procedure of recruiting the employees starts with the company or by
                                the agency that works on behalf of employer company.
                                <br>
                                For a professional of any skill and desire to work in foreign countries, particularly in
                                Japan other countries, Ko Ko Ro can help in finding the most suitable job for you.
                            @endif
                        </p>

                        <img src="{{ asset('data/process.png') }}"
                            style="background-color:#2e2e2e; width: 100%; height: auto; background-size: center; object-fit: cover;">


                        <p style="text-align: justify">
                            @if (session('key') == 'jp')
                                雇用主/主たる会社は、人材紹介会社に有利な要求状を正式に発行します。要求状には、従業員に必要なすべての情報が含まれます。
                                <br><br>
                                また、候補者の関係部門からの承認も処理します。
                            @else
                                Employer/Principal Company will formally issue a demand letter in favor of the recruiting
                                agency. The demand letter will contain all the information that is essentially required for
                                an employee.
                                <br><br>
                                We also process clearance from concerned departments for candidates.
                            @endif
                        </p>

                    </div>
                </section>

                @include('layouts.quick_contact')
            </section>

        </section>
    </section>
    </section>
@endsection
