<section class="nav">
    <ul class="sub">

        <li>
            <a href="{{ route('about.index') }}">
                @if (session('key') == 'jp')
                    私たちに関しては
                @else
                    About Us
                @endif
            </a>
        </li>

        <li>
            <a href="{{ route('md') }}">
                @if (session('key') == 'jp')
                    MDのメッセージ
                @else
                    MD's Message
                @endif
            </a>
        </li>

        <li>
            <a href="{{ route('organization_chart') }}">
                @if (session('key') == 'jp')
                    組織図
                @else
                    Organization Chart
                @endif
            </a>
        </li>

        <li>
            <a href="{{ route('team') }}">
                @if (session('key') == 'jp')
                    私たちのチーム
                @else
                    Our Teams
                @endif
            </a>
        </li>

        <li class="li09">
            <a href="{{ route('job.index') }}">
                @if (session('key') == 'jp')
                    求人情報
                @else
                    Job Listings
                @endif
            </a>
        </li>

        <li>
            <a href="{{ route('recruitment_information.index') }}" style="width: 300px">
                @if (session('key') == 'jp')
                    海外人材紹介サービス
                @else
                    Recruitment Services
                @endif
            </a>
        </li>
        <li>
            <a href="{{ route('recruitment_process') }}" style="width: 300px">
                @if (session('key') == 'jp')
                    海外採用の流れ
                @else
                    Recruitment Process
                @endif
            </a>
        </li>

        <li>
            <a href="{{ route('activities.index') }}">
                @if (session('key') == 'jp')
                    私たちの活動
                @else
                    Our Activities
                @endif
            </a>
        </li>

        <li>
            <a href="{{ route('contact.index') }}">
                @if (session('key') == 'jp')
                    お問い合わせ
                @else
                    Contact Us
                @endif
            </a>
        </li>
    </ul>
</section>
