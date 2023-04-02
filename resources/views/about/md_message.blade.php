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
                    MDのメッセージ
                @else
                    MD's Message
                @endif
            </em>
        </section>

        <section class="content_page">

            <section class="left">
                @include('layouts.quick_link')
            </section>

            <section class="right">

                <section class="message page_pb">

                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzOkxkw4_Jroi5sHXGeyoLXKvEQdHcwNd6kuIGA-fkwbdUfh76NOlI9V_9Bi5Y0RrnMkQ&usqp=CAU"
                        align="right" style="width: 190px; height: 220px; background-size: center; object-fit: cover;">

                    <div>
                        <p style="font-size: 20px; font-weight: bold">
                            @if (session('key') == 'jp')
                                MDのメッセージ
                            @else
                                MD's Message
                            @endif
                        </p>
                        <p>
                            U Mg Mg
                        </p>
                    </div>

                    <p style="text-align: justify;">
                        @if (session('key') == 'jp')
                            あなたが適切な役割を探している求職者であろうと、スキルと態度を備えた適切な人材を見つけようとしている企業であろうと、私たちはあなたを助けるためにここにいます.

                            <br><br>
                            同社の使命は、海外、特に日本の他の国に住むミャンマー人に質の高い安定した雇用を提供することです。

                            <br><br>

                            私たちは、信頼と総合的な職場が健全な環境を構築するための基盤であると信じています。
                            このまとまりのあるシステムは、私たちのチームワークを強化し、敬意を持ったやり取りを維持してきました。
                            逆境に直面する一方で、長期的な利益のためのより良い意思決定を促進します。
                            我々の顧客
                        @else
                            <span style="font-size: 15px; font-weight: bold;">
                                Whether you are a job seeker looking for a suitable role or a business trying to find the
                                right
                                hires with skills and attitude – we are here to help.
                            </span>

                            <br><br>

                            The company's mission has always been to provide good quality and stable employment for our
                            Myanmar citizens overseas especially Japan other countries.

                            <br><br>

                            We believe trust and a holistic workplace is the foundation to building a healthy environment.
                            This cohesive system has enhanced our teamwork and upheld respectful interactions – even in the
                            face of adversity, while also encouraging better decision making for the long-term interest of
                            our clients.
                        @endif
                    </p>
                </section>

                @include('layouts.quick_contact')
            </section>

        </section>
    </section>
    </section>
@endsection
