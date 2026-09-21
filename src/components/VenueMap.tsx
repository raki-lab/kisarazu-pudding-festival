import { t, list } from '../content'
import type { LegendItem } from '../content'
import { SectionTitle } from './SectionTitle'
import { Confetti } from './Confetti'

/** venueMap.legend の並び順(出店ブース,本部,飲食スペース,トイレ,ゴミ箱,休憩所)に対応する仮の配置クラス */
const ZONE_CLASSES = ['booth', 'hq', 'food', 'toilet', 'trash', 'rest']

export function VenueMap() {
  const legend = list<LegendItem>('venueMap.legend')

  return (
    <section className="section section--tint" id="venue-map">
      <Confetti variant="venueMap" />
      <SectionTitle title={t('venueMap.title') /* 会場マップ */} />
      <div className="venuemap">
        <div className="venuemap__diagram-wrap">
          <div
            className="venuemap__diagram venuemap__diagram--blurred"
            aria-hidden="true"
          >
            {legend.map((item, i) => (
              <div
                className={`venuemap__zone venuemap__zone--${ZONE_CLASSES[i] ?? 'other'}`}
                key={item.label}
              >
                <span aria-hidden="true">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
          <span className="venuemap__diagram-overlay">comming soon</span>
        </div>
        <p className="venuemap__note">
          {t('venueMap.note') /* 正式な会場マップは後日公開予定です。下記は配置イメージです。 */}
        </p>
      </div>
    </section>
  )
}
