import { useState } from 'react'
import { t } from '../content'

const LINKS = [
  { href: '#vendors', key: 'vendors' as const }, // 出店店舗
  { href: '#venue-map', key: 'venueMap' as const }, // 会場マップ
  { href: '#access', key: 'access' as const }, // アクセス
  { href: '#faq', key: 'faq' as const }, // FAQ
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="nav__inner">
        <a className="nav__brand" href="#top" onClick={() => setOpen(false)}>
          {t('nav.brand') /* 🍮 木更津プリンフェスティバル */}
        </a>
        <nav className="nav__links" aria-label="ページ内リンク">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {t(`nav.links.${link.key}`)}
            </a>
          ))}
        </nav>
        <a className="nav__cta btn btn--primary" href="#contact">
          {t('nav.cta') /* お問い合わせ */}
        </a>
        <button
          type="button"
          className={`nav__toggle${open ? ' is-open' : ''}`}
          aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="モバイル用ページ内リンク">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {t(`nav.links.${link.key}`)}
            </a>
          ))}
          <a
            className="mobile-nav__cta btn btn--primary"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            {t('nav.cta') /* お問い合わせ */}
          </a>
        </nav>
      )}
    </header>
  )
}
