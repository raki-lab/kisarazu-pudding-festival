import { t, list } from '../content'
import type { ScheduleItem } from '../content'
import { SectionTitle } from './SectionTitle'

export function Schedule() {
  const items = list<ScheduleItem>('schedule.items')

  return (
    <section className="section" id="schedule">
      <SectionTitle
        title={t('schedule.title') /* ステージスケジュール */}
        note={t('schedule.note') /* 出演者・内容は決定次第更新します（下記は仮スケジュールです） */}
      />
      <ol className="schedule">
        {items.map((item) => (
          <li className="schedule__item" key={item.time}>
            <p className="schedule__time">{item.time}</p>
            <div>
              <h3 className="schedule__title">{item.title}</h3>
              <p className="schedule__text">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
