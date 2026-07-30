import { t } from '../content'
import { Lines } from '../content/Lines'

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <p className="hero__dates">
          <span className="hero__dates-num">{t('event.dateShort') /* 2026.10.24 */}</span>
          <span className="hero__dates-day">{t('event.dateDay') /* SAT */}</span>
        </p>
        <p className="hero__raindate">
          {t('event.rainNote') /* 荒天の場合は10月25日(日)に順延（予備日） */}
        </p>
        <h1 className="hero__title">
          <Lines text={t('hero.title') /* 木更津\nプリンフェスティバル */} />
        </h1>
        <p className="hero__lead">
          <Lines
            text={
              t(
                'hero.lead',
              ) /* とろける、まざる、つながる。\n木更津の名店が集う、あまくてやさしい一日。 */
            }
          />
        </p>
        <dl className="hero__meta">
          <div>
            <dt>{t('hero.metaLabels.date') /* 開催日 */}</dt>
            <dd>{t('event.dateShort') /* 2026.10.24 */}</dd>
          </div>
          <div>
            <dt>{t('hero.metaLabels.time') /* 時間 */}</dt>
            <dd>{t('event.time') /* 10:00 - 17:00 */}</dd>
          </div>
          <div>
            <dt>{t('hero.metaLabels.venue') /* 会場 */}</dt>
            <dd>{t('venue.name') /* イオンモール木更津 */}</dd>
          </div>
        </dl>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#vendors">
            {t('hero.ctaVendors') /* 出店店舗を見る */}
          </a>
          <a className="btn btn--ghost" href="#access">
            {t('hero.ctaAccess') /* アクセスを見る */}
          </a>
        </div>
      </div>
      <img className="hero__mascot" src="/mascot-1.png" alt="" aria-hidden="true" />
      <div className="hero__wave" aria-hidden="true"></div>
    </section>
  )
}
