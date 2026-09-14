import { useEffect, useRef } from 'react'
import type { VendorItem } from '../content'
import { vendorPlaceholderImage } from '../lib/placeholder'

export function ShopDialog({
  vendor,
  index,
  onClose,
}: {
  vendor: VendorItem | null
  index: number | null
  onClose: () => void
}) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (vendor) {
      if (!dialog.open) dialog.showModal()
    } else if (dialog.open) {
      dialog.close()
    }
  }, [vendor])

  return (
    <dialog
      className="vendor-dialog"
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) ref.current?.close()
      }}
      aria-labelledby="vendor-dialog-title"
    >
      {vendor && index !== null && (
        <>
          <button
            type="button"
            className="vendor-dialog__close"
            onClick={() => ref.current?.close()}
            aria-label="閉じる"
          >
            ×
          </button>
          <div className="vendor-dialog__image-wrap">
            <img
              className={`vendor-dialog__image${vendor.published === true ? '' : ' vendor-dialog__image--blurred'}`}
              src={vendor.imageUrl ?? vendorPlaceholderImage(index)}
              alt={`${vendor.name}のプリン`}
              style={{ objectPosition: vendor.imagePosition ?? 'center' }}
            />
            {vendor.published !== true && (
              <span className="vendor-dialog__image-overlay">comming soon</span>
            )}
          </div>
          <div className="vendor-dialog__body">
            <h3 id="vendor-dialog-title" className="vendor-dialog__name">
              {vendor.name}
            </h3>
            <p className="vendor-dialog__tagline">
              {vendor.published === true ? vendor.tagline : 'comming soon'}
            </p>
            <span className="vendor-dialog__area">
              <svg
                className="vendor-dialog__area-icon"
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
              {vendor.area}
            </span>
            <p className="vendor-dialog__desc">{vendor.description}</p>
            <dl className="vendor-dialog__info">
              <div>
                <dt>販売予定商品</dt>
                <dd>{vendor.published === true ? vendor.products : 'comming soon'}</dd>
              </div>
              <div>
                <dt>価格</dt>
                <dd>{vendor.published === true ? vendor.price : 'comming soon'}</dd>
              </div>
            </dl>
            <a
              className="vendor__link"
              href={vendor.snsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {vendor.snsLabel}
            </a>
          </div>
        </>
      )}
    </dialog>
  )
}
