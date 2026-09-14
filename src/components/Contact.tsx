import { t } from '../content'
import { Lines } from '../content/Lines'
import { Confetti } from './Confetti'

export function Contact() {
  return (
    <section className="section section--contact" id="contact">
      <Confetti variant="contact" />
      <div className="contact">
        <h2 className="contact__title">{t('contact.title') /* SNS・お問い合わせ */}</h2>
        <p className="contact__text">
          <Lines
            text={
              t(
                'contact.text',
              ) /* 取材のお申し込みやその他ご質問など、\n公式Instagram（@kisarazupurin）のDMまでお気軽にご連絡ください。 */
            }
          />
        </p>
        <div className="contact__actions">
          <a className="btn btn--ghost" href="#top">
            {t('contact.backToTop') /* ページの先頭へ戻る */}
          </a>
        </div>
        <div className="contact__sns">
          <span className="contact__sns-title">{t('contact.snsTitle') /* 公式SNS */}</span>
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
      </div>
    </section>
  )
}
