<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Kokoro Japanese Language School | @yield('title')</title>

    <meta name="Keywords" content="Kokoro Japanese Language School">
    <meta name="Description" content="Kokoro Japanese Language School">
    <meta name="author" content="Kokoro Japanese Language School">
    <link href="{{ asset('common/css/style.css') }}" rel="stylesheet">
    <link href="{{ asset('common/css/page.css') }}" rel="stylesheet">
    <link href="{{ asset('common/css/print.css') }}" rel="stylesheet" media="print">
    <link href="{{ asset('common/css/normalize.css') }}" rel="stylesheet">
</head>

<body id="wrap">
    @include('layouts.menu')
    @yield('content')
    <hr>
    @include('layouts.footer')
    <script src="{{ asset('common/js/jquery-min.js') }}"></script>
    <script src="{{ asset('common/js/script.js') }}"></script>
    <script src="{{ asset('common/js/analytics.js') }}"></script>
    <script>
        ;
        (function(window, $) {
            $p_nav = $(".p_nav");
            $s_nav = $(".sub_nav");
            $("header,.sub_title,.content_page,.p_nav li").hover(function() {
                $s_nav.find("section").removeClass("on");
                $p_nav.find("figure").removeClass('on01 on02 on03 on04 on05 on06 on07 on08');
                $p_nav.find("figure").removeClass("figureVisible");
            });
            for (n = 0; n < 8; n++) {
                $p_nav.find("li").eq(n).hover(function() {
                    var m = $p_nav.find("li").index(this);
                    $p_nav.find("figure").removeClass('on01 on02 on03 on04 on05 on06 on07 on08').addClass(
                        "figureVisible");
                    $p_nav.find("figure").addClass('on0' + String(m + 1));
                    $s_nav.find("section").removeClass("on");
                    $s_nav.find("section").eq(m).addClass("on");
                });
            }
        }(this, jQuery));
    </script>
</body>

</html>
