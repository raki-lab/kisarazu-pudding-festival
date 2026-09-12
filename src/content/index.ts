import { load } from 'js-yaml'
import raw from './ja.yaml?raw'
import type { Content, ContentKey, ContentListKey } from './types'

const content = load(raw) as Content

function getByPath(key: string): unknown {
  return key
    .split('.')
    .reduce<unknown>(
      (node, segment) =>
        node && typeof node === 'object'
          ? (node as Record<string, unknown>)[segment]
          : undefined,
      content,
    )
}

/** 文言をキー指定で取得する ( t('hero.title') など ) */
export function t(key: ContentKey): string {
  const value = getByPath(key)
  if (typeof value !== 'string') {
    throw new Error(`[content] "${key}" は文字列の文言キーではありません`)
  }
  return value
}

/** 配列コンテンツ(出店者一覧など)をキー指定で取得する */
export function list<T>(key: ContentListKey): T[] {
  const value = getByPath(key)
  if (!Array.isArray(value)) {
    throw new Error(`[content] "${key}" は配列の文言キーではありません`)
  }
  return value as T[]
}

export type { VendorItem, LegendItem, FaqItem, ScheduleItem } from './types'
