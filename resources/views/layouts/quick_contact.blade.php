<section class="contact_bar_l">
    <div>
        <p class="text">
            <span>
                @if (session('key') == 'jp')
                    お問い合わせ
                @else
                    Contact Us
                @endif
            </span>
            @if (session('key') == 'jp')
                業務のご相談や資料請求など、お気軽にお問い合わせください。
            @else
                Please feel free to contact us <br> for business consultation and document requests.
            @endif
        </p>
        <p>
            <a href="{{ route('contact.index') }}">
                <i class="icon-mail"></i>
                @if (session('key') == 'jp')
                    お問い合わせ
                @else
                    Inquiry
                @endif
                <i class="icon-chevron"></i>
            </a>
        </p>
    </div>
</section>
