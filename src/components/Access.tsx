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
          <div>
            <dt>{t('access.addressLabel') /* 住所 */}</dt>
            <dd>{t('access.address') /* 〒292-0835 千葉県木更津市築地1-4 */}</dd>
          </div>
          <div>
            <dt>{t('access.trainLabel') /* 電車 */}</dt>
            <dd>{t('access.train') /* JR内房線「木更津駅」西口から徒歩約15分 */}</dd>
          </div>
          <div>
            <dt>{t('access.carLabel') /* お車 */}</dt>
            <dd>
              {
                t(
                  'access.car',
                ) /* 館山自動車道「木更津南IC」から約10分（イオンモール木更津駐車場をご利用ください） */
              }
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
