import { t, list } from '../content'
import type { FaqItem as FaqItemData } from '../content'
import { SectionTitle } from './SectionTitle'
import { FaqItem } from './FaqItem'
import { Confetti } from './Confetti'

export function Faq() {
  const faqs = list<FaqItemData>('faq.items')

  return (
    <section className="section" id="faq">
      <Confetti variant="faq" />
      <SectionTitle title={t('faq.title') /* よくある質問 */} />
      <ul className="faq">
        {faqs.map((item) => (
          <FaqItem item={item} key={item.q} />
        ))}
      </ul>
    </section>
  )
}
