import type { FaqItem as FaqItemData } from '../content'

export function FaqItem({ item }: { item: FaqItemData }) {
  return (
    <li className="faq__item">
      <details>
        <summary>
          <span className="faq__q" aria-hidden="true">
            Q
          </span>
          {item.q}
        </summary>
        <p className="faq__a">{item.a}</p>
      </details>
    </li>
  )
}
