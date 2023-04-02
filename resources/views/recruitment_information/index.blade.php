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
                    海外人材紹介サービス
                @else
                    Overseas Recruitment Services
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
                        <img src="https://res.cloudinary.com/enchanting/q_70,f_auto,c_fill,g_face/hj-web/2020/12/kawaguchiko-lake-near-mt-fuji-in-japan-min-e1661391955973.jpg"
                            style="background-color:#2e2e2e; width: 100%; height: 270px; background-size: center; object-fit: cover;">
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


                        <img src="{{ asset('data/dagon.jpeg') }}" alt="Ko Ko Ro"
                            style="background-color:#2e2e2e; width: 48%; height: 270px; background-size: center; object-fit: cover;">

                        <img src="{{ asset('data/jp.jpeg') }}" alt="Ko Ko Ro"
                            style="background-color:#2e2e2e; width: 48%; height: 270px; background-size: center; object-fit: cover;">
                    </div>
                </section>

                @include('layouts.quick_contact')
            </section>

        </section>
    </section>
    </section>
@endsection
