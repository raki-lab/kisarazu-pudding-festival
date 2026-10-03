import { t } from '../content'
import { SectionTitle } from './SectionTitle'
import { Confetti } from './Confetti'

export function VenueMap() {
  return (
    <section className="section section--tint" id="venue-map">
      <Confetti variant="venueMap" />
      <SectionTitle title={t('venueMap.title') /* 会場マップ */} />
      <div className="venuemap">
        <div className="venuemap__diagram-wrap">
          <img
            className="venuemap__image"
            src="/theme/areamap.png"
            alt="会場マップ：出店ブース番号、本部、ライブステージ、観覧エリア、飲食エリア、キッチンカーの配置図"
          />
        </div>
      </div>
    </section>
  )
}
