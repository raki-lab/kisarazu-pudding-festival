export interface HighlightItem {
  emoji: string
  title: string
  text: string
}

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
}

export interface LegendItem {
  icon: string
  label: string
}

export interface FaqItem {
  q: string
  a: string
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
    cta: string
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
    badge: string
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
  about: {
    title: string
    text: string
    highlights: HighlightItem[]
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
  }
  faq: {
    title: string
    items: FaqItem[]
  }
  contact: {
    title: string
    text: string
    email: string
    emailCta: string
    backToTop: string
    organizerLabel: string
    organizer: string
    hoursLabel: string
    hours: string
    snsTitle: string
    instagramLabel: string
    instagramUrl: string
    xLabel: string
    xUrl: string
    sponsorRecruitTitle: string
    sponsorRecruitText: string
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
