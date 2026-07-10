import { t, list } from '../content'
import type { HighlightItem } from '../content'
import { SectionTitle } from './SectionTitle'

export function About() {
  const highlights = list<HighlightItem>('about.highlights')

  return (
    <section className="section section--tint" id="about">
      <SectionTitle title={t('about.title') /* プリンフェスについて */} />
      <p className="section__text">
        {t('about.text') /* かため、なめらか、濃厚、個性派。さまざまなプリンが木更津に集まる、プリン好きのためのイベントです。お気に入りの一品を見つけながら、木更津の街とイベントをお楽しみください。 */}
      </p>
      <ul className="highlights">
        {highlights.map((item) => (
          <li className="highlight" key={item.title}>
            <span className="highlight__emoji" aria-hidden="true">
              {item.emoji}
            </span>
            <h3 className="highlight__title">{item.title}</h3>
            <p className="highlight__text">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
