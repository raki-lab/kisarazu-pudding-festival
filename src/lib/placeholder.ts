const PALETTE = ['#f6c453', '#e8d3ae', '#c17a5c', '#a97a3f']

/** 正式な商品写真が未確定の店舗向けに、仮のプリン画像(SVG)を生成する */
export function vendorPlaceholderImage(index: number): string {
  const bg = PALETTE[index % PALETTE.length]
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 240'><rect width='320' height='240' fill='${bg}'/><text x='50%' y='56%' font-size='84' text-anchor='middle' dominant-baseline='middle'>🍮</text></svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}
