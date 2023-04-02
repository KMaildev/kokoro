@extends('layouts.main')
@section('content')
    <section id="page">

        <section class="pan_list">
            <a href="../index.html">
                @if (session('key') == 'jp')
                    トップページ
                @else
                    Main Page
                @endif
            </a>
            &gt;
            <em>
                @if (session('key') == 'jp')
                    お問い合わせ
                @else
                    Contact Us
                @endif
            </em>
        </section>

        <section class="sub_title">
            <img src="{{ asset('common/img/top-menu-icon-06.png') }}" width="61" height="61" alt="">
            <h2>
                @if (session('key') == 'jp')
                    お問い合わせ
                @else
                    Contact Us
                @endif
            </h2>
        </section>

        <section class="content_page">
            <section class="left">
                <section class="nav">
                    <style>
                        .contact-address {
                            width: 230px;
                            height: 150px;
                            padding: 15px;
                            background-color: #5AB152;
                            box-shadow: 10px 10px lightblue;
                            color: white;
                        }

                        .contact-phone {
                            width: 230px;
                            height: auto;
                            padding: 15px;
                            background-color: #CC592B;
                            box-shadow: 10px 10px lightblue;
                            color: white;
                        }

                        .contact-email {
                            width: 230px;
                            height: auto;
                            padding: 15px;
                            background-color: #120601;
                            box-shadow: 10px 10px lightblue;
                            color: white;
                        }
                    </style>

                    <div class="contact-phone">
                        09 761 003252
                    </div>

                    <br>
                    <div class="contact-email">
                        info@kokoro.com
                    </div>

                    <br>
                    <div class="contact-address">
                        YS-3 Unity Tower Kandawgyi Wing, Dhobi Street, Kandawgyi Yeik Mon, No. 137, Mingalar
                        Taungnyunt Township, Yangon, Myanmar., Yangon, Myanmar
                    </div>

                </section>
            </section>
            <section class="right">
                <section class="contact page_pb">
                    <p class="blank_10">
                        @if (session('key') == 'jp')
                            お問い合わせいただく際は、お手数ですが以下のフォームに必要事項をご入力の上、<br>「入力内容を確認する」ボタンを押してください。
                        @else
                            If you would like to contact us, please fill in the necessary information in the form below.
                            Please press the "Confirm the input contents" button.
                        @endif
                    </p>


                    <p class="blank_10">
                        @if (session('key') == 'jp')
                            または、お問い合わせフォームに記入してご連絡いただくこともできます。私たちのチームがすぐに返信します。
                        @else
                            Alternatively, you may contact us by filling up the contact form. Our team will response you
                            shortly.
                        @endif

                    </p>

                    <form id="form1" action="{{ route('contact.index') }}" method="post">
                        @csrf
                        <table>
                            <tr>
                                <td colspan="2">
                                    @if (session('key') == 'jp')
                                        お問い合わせの内容
                                    @else
                                        Content of inquiry
                                    @endif
                                    <span class="no_float red">&#10058;</span>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">

                                    <div class="text">
                                        @if (session('key') == 'jp')
                                            名前
                                        @else
                                            Name
                                        @endif
                                    </div>
                                    <input type="text" class="validate[required,maxSize[200]]" name="name"
                                        data-prompt-position="topLeft:70">

                                    <div class="text" style="padding-top: 10px;">
                                        @if (session('key') == 'jp')
                                            Eメール
                                        @else
                                            Email
                                        @endif
                                    </div>
                                    <input type="text" class="validate[required,maxSize[200]]" name="email"
                                        data-prompt-position="topLeft:70">


                                    <div class="text" style="padding-top: 10px;">
                                        @if (session('key') == 'jp')
                                            件名
                                        @else
                                            Subject
                                        @endif
                                    </div>
                                    <input type="text" class="validate[required,maxSize[200]]" name="subject"
                                        data-prompt-position="topLeft:70">


                                    <p>
                                        @if (session('key') == 'jp')
                                            具体的な内容
                                        @else
                                            Message
                                        @endif
                                    </p>
                                    <textarea class="validate[required,maxSize[300]]" name="message" data-prompt-position="topLeft:400"></textarea>
                                </td>
                            </tr>
                        </table>

                        <p class="submit">
                            <button class="submit button" type="submit" style="padding: 20px;">
                                @if (session('key') == 'jp')
                                    今提出
                                @else
                                    Submit Now
                                @endif
                            </button>
                        </p>

                    </form>
                </section>
            </section>
        </section>
    </section>
@endsection
