<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Kokoro Japanese Language School</title>
    <meta name="Keywords" content="Kokoro Japanese Language School">
    <meta name="Description" content="Kokoro Japanese Language School">
    <meta name="author" content="Kokoro Japanese Language School">
    <meta property="og:image" content="{{ asset('data/logo.jpeg') }}" />

    <link href="{{ asset('common/css/style.css') }}" rel="stylesheet">
    <link href="{{ asset('common/css/print.css') }}" rel="stylesheet" media="print">
    <link href="{{ asset('common/css/normalize.css') }}" rel="stylesheet">
</head>

<body id="wrap" onLoad="initRollovers(); cms('news/log.txt');">
    <header style="background-image: url({{ asset('data/topbanner.jpeg') }})">
        <div>
            <p>
                <img src="{{ asset('common/img/subtitle2.png') }}" width="409" height="70"
                    alt="Ko Ko Ro">
            </p>
        </div>
    </header>

    <nav class="top_0">
        <ul>
            <li class="li01" style="background-image: url({{ asset('data/company.svg') }})">
                <a href="{{ route('about.index') }}">
                    <img src="{{ asset('data/company.png') }}" width="61" height="61" alt="事業内容">
                    @if (session('key') == 'jp')
                        会社案内
                    @else
                        Company Profile
                    @endif
                </a>
            </li>

            <li class="li02">
                <a href="{{ route('recruitment_information.index') }}">
                    <img src="{{ asset('common/img/top-menu-icon-03.png') }}" width="61" height="61"
                        alt="実績紹介">
                    @if (session('key') == 'jp')
                        海外人材紹介サービス
                    @else
                        Overseas Recruitment Services
                    @endif
                </a>
            </li>

            <li class="li03">
                <a href="{{ route('activities.index') }}">
                    <img src="{{ asset('data/photo-gallery.png') }}" width="61" height="61" alt="私たちの活動">
                    @if (session('key') == 'jp')
                        私たちの活動
                    @else
                        Our Activities
                    @endif
                </a>
            </li>

            <li class="li04">
                <a href="{{ route('job.index') }}">
                    <img src="{{ asset('common/img/top-menu-icon-02.png') }}" width="61" height="61"
                        alt="会社案内">
                    @if (session('key') == 'jp')
                        求人情報
                    @else
                        Job Listings
                    @endif
                </a>
            </li>

            <li class="li05">
                <a href="{{ route('recruitment_process') }}">
                    <img src="{{ asset('common/img/top-menu-icon-04.png') }}" width="61" height="61"
                        alt="全国営業網">
                    @if (session('key') == 'jp')
                        海外採用の流れ
                    @else
                        Overseas Recruitment Process
                    @endif
                </a>
            </li>

            <li class="li06">
                <a href="{{ route('contact.index') }}">
                    <img src="{{ asset('data/communicate.png') }}" width="61" height="61" alt="お問い合わせ">
                    @if (session('key') == 'jp')
                        お問い合わせ
                    @else
                        Contact Us
                    @endif
                </a>
            </li>
        </ul>
    </nav>
    <hr>

    <script src="{{ asset('common/js/jquery-min.js') }}"></script>
    <script src="{{ asset('common/js/jquery.dropdownPlain.js') }}"></script>
    <script src="{{ asset('common/js/cms.js') }}"></script>
    <script src="{{ asset('common/js/analytics.js') }}"></script>
    <script>
        $(function() {
            var topBtn = $('.page-top');
            topBtn.hide();
            $(window).scroll(function() {
                if ($(this).scrollTop() > 100) {
                    topBtn.fadeIn();
                } else {
                    topBtn.fadeOut();
                }
            });
            topBtn.click(function() {
                $('body,html').animate({
                    scrollTop: 0
                }, 500);
                return false;
            });
        });
    </script>
</body>

</html>
