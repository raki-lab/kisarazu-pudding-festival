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
          <img
            className="vendor-dialog__image"
            src={vendor.imageUrl ?? vendorPlaceholderImage(index)}
            alt={`${vendor.name}のプリン`}
          />
          <div className="vendor-dialog__body">
            <h3 id="vendor-dialog-title" className="vendor-dialog__name">
              {vendor.name}
            </h3>
            <p className="vendor-dialog__tagline">{vendor.tagline}</p>
            <span className="vendor-dialog__area">{vendor.area}</span>
            <p className="vendor-dialog__desc">{vendor.description}</p>
            <dl className="vendor-dialog__info">
              <div>
                <dt>販売予定商品</dt>
                <dd>{vendor.products}</dd>
              </div>
              <div>
                <dt>価格</dt>
                <dd>{vendor.price}</dd>
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
