import { t } from '../content'

export function Footer() {
  return (
    <footer className="footer">
      <p className="footer__logo">{t('nav.brand') /* 🍮 木更津プリンフェスティバル */}</p>
      <p className="footer__copy">
        {t('footer.copy') /* © 2026 Kisarazu Pudding Festival Committee */}
      </p>
    </footer>
  )
}
