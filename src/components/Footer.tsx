import { t } from '../content'

export function Footer() {
  return (
    <footer className="footer">
      <p className="footer__logo">{t('nav.brand') /* 🍮 木更津プリンフェスティバル */}</p>
      <p className="footer__organizer">
        {t('contact.organizer') /* 木更津プリンフェスティバル実行委員会 */}
      </p>
      <div className="footer__links">
        <a
          href={t('contact.instagramUrl') /* https://www.instagram.com/ */}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('contact.instagramLabel') /* Instagram */}
        </a>
        <a
          href={t('contact.xUrl') /* https://x.com/ */}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('contact.xLabel') /* X (Twitter) */}
        </a>
      </div>
      <p className="footer__copy">
        {t('footer.copy') /* © 2026 Kisarazu Pudding Festival Committee */}
      </p>
    </footer>
  )
}
