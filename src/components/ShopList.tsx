import { useState } from 'react'
import { t, list } from '../content'
import type { VendorItem } from '../content'
import { SectionTitle } from './SectionTitle'
import { ShopCard } from './ShopCard'
import { ShopDialog } from './ShopDialog'
import { Confetti } from './Confetti'

export function ShopList() {
  const vendors = list<VendorItem>('vendors.items')
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const activeVendor = activeIndex !== null ? vendors[activeIndex] : null

  return (
    <section className="section" id="vendors">
      <Confetti variant="vendors" />
      <SectionTitle
        title={t('vendors.title') /* 出店店舗 */}
        note={t('vendors.note') /* ※ 出店者は随時追加・更新されます（現在は仮データです） */}
      />
      <ul className="vendors">
        {vendors.map((vendor, index) => (
          <ShopCard
            vendor={vendor}
            index={index}
            key={vendor.name}
            onSelect={() => setActiveIndex(index)}
          />
        ))}
      </ul>
      <ShopDialog vendor={activeVendor} index={activeIndex} onClose={() => setActiveIndex(null)} />
    </section>
  )
}
