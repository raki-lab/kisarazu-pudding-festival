import { t } from '../content'
import { Lines } from '../content/Lines'

export function Contact() {
  return (
    <section className="section section--contact" id="contact">
      <img className="contact__mascot" src="/mascot-2.png" alt="" aria-hidden="true" />
      <div className="contact">
        <h2 className="contact__title">{t('contact.title') /* SNS・お問い合わせ */}</h2>
        <p className="contact__text">
          <Lines
            text={
              t('contact.text') /* 取材のお申し込みやその他ご質問など、\nお気軽にお問い合わせください。 */
            }
          />
        </p>
        <div className="contact__actions">
          <a
            className="btn btn--primary"
            href={`mailto:${t('contact.email') /* info@kisarazu-pudding.example */}`}
          >
            {t('contact.emailCta') /* メールで問い合わせる */}
          </a>
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
        <dl className="contact__info">
          <div>
            <dt>{t('contact.organizerLabel') /* 主催 */}</dt>
            <dd>{t('contact.organizer') /* 木更津プリンフェスティバル実行委員会 */}</dd>
          </div>
          <div>
            <dt>{t('contact.hoursLabel') /* 受付時間 */}</dt>
            <dd>{t('contact.hours') /* 平日 10:00 - 17:00 */}</dd>
          </div>
        </dl>
        <div className="contact__recruit">
          <div>
            <h3>{t('contact.sponsorRecruitTitle') /* 協賛をご希望の方へ */}</h3>
            <p>
              {
                t(
                  'contact.sponsorRecruitText',
                ) /* 協賛にご興味をお持ちの企業様は、上記メールアドレスまでお気軽にご連絡ください。 */
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
