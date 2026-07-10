import type { VendorItem } from '../content'
import { vendorPlaceholderImage } from '../lib/placeholder'

export function ShopCard({
  vendor,
  index,
  onSelect,
}: {
  vendor: VendorItem
  index: number
  onSelect: () => void
}) {
  const image = vendor.imageUrl ?? vendorPlaceholderImage(index)

  return (
    <li className="vendor">
      <button
        type="button"
        className="vendor__trigger"
        onClick={onSelect}
        aria-haspopup="dialog"
      >
        <img className="vendor__image" src={image} alt={`${vendor.name}のプリン`} loading="lazy" />
        <span className="vendor__name">{vendor.name}</span>
        <span className="vendor__area">{vendor.area}</span>
        <span className="vendor__price">{vendor.price}</span>
      </button>
    </li>
  )
}
