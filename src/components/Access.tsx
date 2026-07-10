import { t } from '../content'
import { SectionTitle } from './SectionTitle'

export function Access() {
  const venueName = t('access.venueName') // イオンモール木更津
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(venueName)}&output=embed`

  return (
    <section className="section section--tint" id="access">
      <SectionTitle title={t('access.title') /* アクセス */} />
      <div className="access">
        <iframe
          className="access__map"
          src={mapSrc}
          title={`${venueName}の地図`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <dl className="access__address">
          <dt>住所</dt>
          <dd>{t('access.address') /* 〒292-0835 千葉県木更津市築地1-4 */}</dd>
        </dl>
      </div>
    </section>
  )
}
