@extends('layouts.main')
@section('content')
    <style>
        div.gallery {
            margin: 5px;
            border: 1px solid #ccc;
            float: left;
            width: 23%;
        }

        div.gallery:hover {
            border: 1px solid #777;
        }

        div.gallery img {
            width: 100%;
            height: 180px;
        }

        div.desc {
            padding: 10px;
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
                    私たちに関しては
                @else
                    About Us
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
                                会社概要
                            @else
                                Company Profile
                            @endif
                        </h3>
                    </center>
                    <div>
                        <img src="{{ asset('data/about.png') }}"
                            style="background-color:#2e2e2e; width: 100%; height: auto; background-size: center; object-fit: cover;">
                        <p style="text-align: justify">
                            @if (session('key') == 'jp')
                                私たちは採用ソリューションとよく組織されたチームを提供します。
                                <br>
                                ココロ日本語学校は、ミャンマーの主要なローカルおよび海外人材派遣会社の 1 つであり、さまざまな分野のクライアントに信頼できるローカルおよび外国人人材紹介サービスを提供しています。
                                業界や雇用要件におけるさまざまな顧客のニーズに合わせて候補者を提供することにより、国。
                                <br>
                                様々な業種の人材の採用・紹介を得意としています。日本で働きたい方のために、以下のパスや日本語学校の申請サービスを行っています。
                            @else
                                We offer recruitment solutions and well ­organized teams.
                                <br>
                                Kokoro Japanese Language School is one of leading local & oversea employment agency in
                                Myanmar
                                providing reliable local and foreign recruitment services to our clients from different
                                countries through delivering candidates to suit different customers’ needs in their industry
                                and
                                employment requirement.
                                <br>
                                We specialise in the application and placement of workers for various industries. We provide
                                application services for the following passes and Japanese language training school for
                                those
                                who want to work in Japan.
                            @endif
                        </p>

                    </div>

                    <section class="box">

                        <div class="gallery">
                            <img src="{{ asset('data/1.jpeg') }}" alt="Cinque Terre"
                                style="background-color:#2e2e2e; background-size: center; object-fit: cover;">
                            <div class="desc">
                                Study Japanese Language
                            </div>
                        </div>

                        <div class="gallery">
                            <img src="{{ asset('data/2.jpeg') }}" alt="Cinque Terre"
                                style="background-color:#2e2e2e; background-size: center; object-fit: cover;">
                            <div class="desc">
                                Certificate <br><br>
                            </div>
                        </div>

                        <div class="gallery">
                            <img src="{{ asset('data/3.jpeg') }}" alt="Cinque Terre"
                                style="background-color:#2e2e2e; background-size: center; object-fit: cover;">
                            <div class="desc">
                                Interview <br><br>
                            </div>
                        </div>

                        <div class="gallery">
                            <img src="{{ asset('data/4.jpeg') }}" alt="Cinque Terre"
                                style="background-color:#2e2e2e; background-size: center; object-fit: cover;">
                            <div class="desc">
                                Work in Japan <br><br>
                            </div>
                        </div>
                    </section>
                </section>

                <section class="recruit page_pb">
                    <h2>
                        @if (session('key') == 'jp')
                            私たちのビジョン
                        @else
                            Our Vision
                        @endif
                    </h2>
                    <ul class="list">
                        <li>
                            <span>
                                @if (session('key') == 'jp')
                                    を維持することにより、雇用および人材サービスの優先ソースになること。
                                    信頼できるパートナーおよび専門機関としての評判
                                @else
                                    To become the preferred source for employment and human resource services by maintaining
                                    our
                                    reputation as a trusted partner and a professional agency
                                @endif
                            </span>
                        </li>

                        <li>
                            <span>
                                @if (session('key') == 'jp')
                                    優秀な社員に海外での就業機会を提供し、生活の質を向上させる
                                @else
                                    To improve the quality of skillful employees lives by giving them overseas job
                                    opportunities
                                @endif
                            </span>
                        </li>
                    </ul>


                    <h2>
                        @if (session('key') == 'jp')
                            我々の使命
                        @else
                            Our Mission
                        @endif
                    </h2>
                    <ul class="list">
                        <li>
                            <span>
                                @if (session('key') == 'jp')
                                    適切な仕事を適切な人に届けるために
                                @else
                                    To deliver the right jobs to the right people
                                @endif
                            </span>
                        </li>

                        <li>
                            <span>
                                @if (session('key') == 'jp')
                                    クライアントと提携することで、優れた企業と優れた従業員を結び付け、両方の機会を開拓する
                                @else
                                    To connect great companies with great employees and opening up opportunities for both by
                                    partnering up with our clients.
                                @endif
                            </span>
                        </li>

                        <li>
                            <span>
                                @if (session('key') == 'jp')
                                    当社の優れた知識を使用して、労働力を採用、管理、維持するため。
                                @else
                                    To recruit, manage and retain the workforce using our outstanding knowledge.
                                @endif
                            </span>
                        </li>


                        <h2>
                            @if (session('key') == 'jp')
                                私たちの価値
                            @else
                                Our Value
                            @endif
                        </h2>
                        <ul class="list">
                            <li>
                                <span>
                                    @if (session('key') == 'jp')
                                        信頼 - 私たちは、顧客とコミュニティにとって信頼できるパートナーおよびリソースであることにより、雇用および人材サービスに専念する高性能組織です。
                                    @else
                                        Trust - We are a high performing organization dedicated to employment and human
                                        resource services by being a trusted partner and resource for our customers and our
                                        community.
                                    @endif
                                </span>
                            </li>

                            <li>
                                <span>
                                    @if (session('key') == 'jp')
                                        誠実さ - 私たちは提供できるものだけを約束し、すべての約束を果たします。私たちのビジネスは、正直さと誠実さを基盤に構築されています。
                                    @else
                                        Integrity - We promise only what we can deliver, and we deliver on every promise.
                                        Our business is built on a foundation of honesty and integrity.
                                    @endif
                                </span>
                            </li>

                            <li>
                                <span>
                                    @if (session('key') == 'jp')
                                        尊重 - 私たちは、あらゆる交流において、すべての個人に敬意を持って接します。
                                    @else
                                        Respect - We treat every individual with respect, in every interaction.
                                    @endif
                                </span>
                            </li>
                        </ul>
                </section>


                @include('layouts.quick_contact')
            </section>

        </section>
    </section>
    </section>
@endsection
