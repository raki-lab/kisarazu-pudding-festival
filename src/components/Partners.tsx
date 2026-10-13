import { useState } from 'react'
import { t, list } from '../content'
import type { PartnerItem, PartnerCategory } from '../content'
import { SectionTitle } from './SectionTitle'
import { Confetti } from './Confetti'

/** 表示順: メイン協賛 → 協賛 → 後援 → 協力 (→ 主催) */
const CATEGORIES: PartnerCategory[] = ['mainSponsor', 'sponsor', 'supporter', 'cooperator']

/** ロゴがあればロゴ、なければ(または読み込み失敗時は)正式名称のテキストを表示する */
function PartnerName({ partner }: { partner: PartnerItem }) {
  const [logoFailed, setLogoFailed] = useState(false)

  if (partner.logoSrc && !logoFailed) {
    return (
      <img
        className="partner__logo"
        src={partner.logoSrc}
        alt={partner.name}
        loading="lazy"
        onError={() => setLogoFailed(true)}
      />
    )
  }
  return <span className="partner__name">{partner.name}</span>
}

function Partner({ partner }: { partner: PartnerItem }) {
  return (
    <li className="partner">
      {partner.websiteUrl ? (
        <a
          className="partner__inner"
          href={partner.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <PartnerName partner={partner} />
          <span className="sr-only">（新しいタブで開きます）</span>
        </a>
      ) : (
        <div className="partner__inner">
          <PartnerName partner={partner} />
        </div>
      )}
    </li>
  )
}

export function Partners() {
  const partners = list<PartnerItem>('partners.items')
    .filter((partner) => partner.publish === true)
    .sort((a, b) => a.order - b.order)
  const groups = CATEGORIES.map((category) => ({
    category,
    items: partners.filter((partner) => partner.category === category),
  })).filter((group) => group.items.length > 0)

  return (
    <section className="section" id="partners">
      <Confetti variant="contact" />
      <SectionTitle title={t('partners.title') /* 協賛・後援・協力 */} />
      <div className="partners">
        {groups.map((group) => (
          <div className={`partners__group partners__group--${group.category}`} key={group.category}>
            <h3 className="partners__heading">{t(`partners.categoryLabels.${group.category}`)}</h3>
            <ul className="partners__list">
              {group.items.map((partner) => (
                <Partner partner={partner} key={partner.id} />
              ))}
            </ul>
          </div>
        ))}
        {/* 主催は常に表示 */}
        <div className="partners__group partners__group--organizer">
          <h3 className="partners__heading">{t('partners.categoryLabels.organizer') /* 主催 */}</h3>
          <ul className="partners__list">
            <li className="partner">
              <div className="partner__inner">
                <span className="partner__name">{t('partners.organizer') /* 木更津プリンフェスティバル実行委員会 */}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
