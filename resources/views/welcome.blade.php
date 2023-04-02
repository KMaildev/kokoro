<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Kokoro Japanese Language School</title>
    <meta name="Keywords" content="Kokoro Japanese Language School">
    <meta name="Description" content="Kokoro Japanese Language School">
    <meta name="author" content="Kokoro Japanese Language School">
    <link href="{{ asset('common/css/style.css') }}" rel="stylesheet">
    <link href="{{ asset('common/css/print.css') }}" rel="stylesheet" media="print">
    <link href="{{ asset('common/css/normalize.css') }}" rel="stylesheet">
</head>

<body id="wrap" onLoad="initRollovers(); cms('news/log.txt');">
    <header>
        <div>
            <p>
                <img src="{{ asset('common/img/subtitle2.png') }}" width="409" height="70"
                    alt="ビルに輝きを与え続ける太平ビルサービス">
            </p>
        </div>
    </header>

    <nav class="top_0">
        <ul>
            <li class="li01">
                <a href="business/index.html">
                    <img src="{{ asset('common/img/top-menu-icon-01.png') }}" width="61" height="61"
                        alt="事業内容">
                    事業内容
                </a>
            </li>
            <li class="li02">
                <a href="about/works/index.html">
                    <img src="{{ asset('common/img/top-menu-icon-03.png') }}" width="61" height="61"
                        alt="実績紹介">
                    実績紹介
                </a>
            </li>
            <li class="li03">
                <a href="recruit/index.html">
                    <img src="{{ asset('common/img/top-menu-icon-05.png') }}" width="61" height="61"
                        alt="採用情報">
                    採用情報
                </a>
            </li>
            <li class="li04">
                <a href="about/index.html">
                    <img src="{{ asset('common/img/top-menu-icon-02.png') }}" width="61" height="61"
                        alt="会社案内">
                    会社案内
                </a>
            </li>
            <li class="li05">
                <a href="office/index.html">
                    <img src="{{ asset('common/img/top-menu-icon-04.png') }}" width="61" height="61"
                        alt="全国営業網">
                    全国営業網
                </a>
            </li>
            <li class="li06">
                <a href="{{ route('contact.index') }}">
                    <img src="{{ asset('common/img/top-menu-icon-06.png') }}" width="61" height="61"
                        alt="お問い合わせ">
                    お問い合わせ
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
