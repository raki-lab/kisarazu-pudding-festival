export function SectionTitle({ title, note }: { title: string; note?: string }) {
  return (
    <div className="section__head">
      <h2 className="section__title">{title}</h2>
      {note && <p className="section__note">{note}</p>}
    </div>
  )
}
