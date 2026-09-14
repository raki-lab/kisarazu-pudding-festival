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
  const isPublished = vendor.published === true

  return (
    <li className="vendor">
      <button
        type="button"
        className="vendor__trigger"
        onClick={onSelect}
        aria-haspopup="dialog"
      >
        <div className="vendor__image-wrap">
          <img
            className={`vendor__image${isPublished ? '' : ' vendor__image--blurred'}`}
            src={image}
            alt={`${vendor.name}のプリン`}
            loading="lazy"
            style={{ objectPosition: vendor.imagePosition ?? 'center' }}
          />
          {!isPublished && <span className="vendor__image-overlay">comming soon</span>}
        </div>
        <span className="vendor__name">{vendor.name}</span>
        <span className="vendor__tagline">{isPublished ? vendor.tagline : 'comming soon'}</span>
        <span className="vendor__area">
          <svg
            className="vendor__area-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="vendor__area-text">{vendor.area}</span>
        </span>
        <span className="vendor__price">{isPublished ? vendor.price : 'comming soon'}</span>
      </button>
    </li>
  )
}
