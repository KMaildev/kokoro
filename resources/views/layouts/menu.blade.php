<header class="page">
    <div>
        <section>
            <h1>
                Kokoro Japanese Language School
            </h1>
        </section>
    </div>
</header>

<nav class="p_nav">
    <ul>
        <li class="li07"><a href="../index.html">トップページ</a></li>
        <li class="li08"><a href="../about/index.html">会社案内</a></li>

        <li class="li09">
            <a href="{{ route('job.index') }}">
                @if (session('key') == 'jp')
                    求人情報
                @else
                    Job Listings
                @endif
            </a>
        </li>

        <li class="li10">
            <a href="javascript:void(0)">
                @if (session('key') == 'jp')
                    採用情報
                @else
                    Recruitment information
                @endif
            </a>
        </li>

        <li class="li11">
            <a href="{{ route('activities.index') }}">
                @if (session('key') == 'jp')
                    私たちの活動
                @else
                    Our Activities
                @endif
            </a>
        </li>

        <li class="li12">
            <a href="{{ route('contact.index') }}">
                @if (session('key') == 'jp')
                    お問い合わせ
                @else
                    Contact Us
                @endif
            </a>
        </li>

        <figure></figure>
    </ul>
</nav>
<section class="sub_nav">
    <section class="nav01 empty"></section>
    <section class="nav02">
        <h3>会社案内</h3>
        <ul>
            <li><a href="../about/message.html">ご挨拶</a></li>
            <li><a href="../about/corporate.html">会社情報</a></li>
            <li><a href="../about/idea/index.html">信頼される強い会社づくり</a></li>
            <li><a href="../about/works/index.html">実績紹介</a></li>
        </ul>
    </section>

    <section class="nav03" style="display: none"></section>

    <section class="nav06">
        <h3>
            @if (session('key') == 'jp')
                採用情報
            @else
                Recruitment information
            @endif
        </h3>
        <center>
            <ul>
                <li>
                    <a href="{{ route('recruitment_information.index') }}" style="width: 300px">
                        @if (session('key') == 'jp')
                            海外人材紹介サービス
                        @else
                            Overseas Recruitment Services
                        @endif
                    </a>
                </li>
                <li>
                    <a href="{{ route('recruitment_process') }}" style="width: 300px">
                        @if (session('key') == 'jp')
                            海外採用の流れ
                        @else
                            Overseas Recruitment Process
                        @endif
                    </a>
                </li>
            </ul>
        </center>
    </section>

</section>
