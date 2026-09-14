export interface VendorItem {
  name: string
  area: string
  tagline: string
  description: string
  products: string
  price: string
  snsLabel: string
  snsUrl: string
  imageUrl?: string
  /** 写真ごとに主役(プリン)が写っている位置に合わせて調整するCSSのobject-position値 (未指定時は"center") */
  imagePosition?: string
  /** true: 実データ(tagline/products/price/画像)をそのまま表示。false/未指定: tagline/products/priceを"comming soon"表示にし、画像はぼかし+「comming soon」表記にする */
  published?: boolean
}

export interface LegendItem {
  icon: string
  label: string
}

export interface FaqItem {
  q: string
  a: string
}

export interface ScheduleItem {
  time: string
  title: string
  description: string
}

export interface Content {
  nav: {
    brand: string
    links: {
      vendors: string
      venueMap: string
      access: string
      faq: string
    }
  }
  venue: {
    name: string
    address: string
  }
  event: {
    dateShort: string
    dateDay: string
    time: string
    rainNote: string
  }
  hero: {
    title: string
    lead: string
    metaLabels: {
      date: string
      time: string
      venue: string
    }
    ctaVendors: string
    ctaAccess: string
  }
  vendors: {
    title: string
    note: string
    items: VendorItem[]
  }
  venueMap: {
    title: string
    note: string
    legend: LegendItem[]
  }
  notice: {
    title: string
    items: string[]
  }
  access: {
    title: string
    venueName: string
    address: string
    addressLabel: string
    trainLabel: string
    train: string
    carLabel: string
    car: string
  }
  schedule: {
    title: string
    note: string
    items: ScheduleItem[]
  }
  faq: {
    title: string
    items: FaqItem[]
  }
  contact: {
    title: string
    text: string
    backToTop: string
    snsTitle: string
    instagramLabel: string
    instagramUrl: string
    xLabel: string
    xUrl: string
  }
  footer: {
    copy: string
  }
}

/** Content 内の string を返すキーのドットパス一覧 ("hero.title" など) */
export type StringPath<T, Prefix extends string = ''> = T extends string
  ? Prefix
  : T extends readonly unknown[]
    ? never
    : T extends object
      ? {
          [K in keyof T & string]: StringPath<
            T[K],
            Prefix extends '' ? K : `${Prefix}.${K}`
          >
        }[keyof T & string]
      : never

/** Content 内の配列を返すキーのドットパス一覧 ("vendors.items" など) */
export type ListPath<T, Prefix extends string = ''> = T extends string
  ? never
  : T extends readonly unknown[]
    ? Prefix
    : T extends object
      ? {
          [K in keyof T & string]: ListPath<
            T[K],
            Prefix extends '' ? K : `${Prefix}.${K}`
          >
        }[keyof T & string]
      : never

export type ContentKey = StringPath<Content>
export type ContentListKey = ListPath<Content>
