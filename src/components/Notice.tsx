import { t, list } from '../content'
import { SectionTitle } from './SectionTitle'

export function Notice() {
  const items = list<string>('notice.items')

  return (
    <section className="section" id="notice">
      <SectionTitle title={t('notice.title') /* ご来場にあたっての注意事項 */} />
      <div className="notes">
        <ul className="notes__list">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
