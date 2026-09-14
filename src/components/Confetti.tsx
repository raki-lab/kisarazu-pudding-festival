import type { CSSProperties } from 'react'
import { NEW_DESIGN_ENABLED } from '../theme'

type Piece = { src: string; style: CSSProperties }

const star = '/theme/decor_star.png'
const ribbonBrown = '/theme/decor_ribbon_brown.png'
const ribbonPink = '/theme/decor_ribbon_pink.png'
const confettiOrange = '/theme/decor_confetti_orange.png'
const confettiBlue = '/theme/decor_confetti_blue.png'

const SETS = {
  hero: [
    { src: ribbonBrown, style: { left: '-20px', top: '10px', width: 90, opacity: 0.9, transform: 'rotate(-12deg)' } },
    { src: confettiBlue, style: { right: '8%', top: '14px', width: 20, transform: 'rotate(15deg)' } },
    { src: star, style: { left: '6%', bottom: '12px', width: 30, transform: 'rotate(10deg)' } },
    { src: ribbonPink, style: { right: '-16px', bottom: '30px', width: 100, opacity: 0.85, transform: 'rotate(-4deg) scaleX(-1)' } },
    { src: confettiOrange, style: { left: '3%', top: '40%', width: 20, transform: 'rotate(-20deg)' } },
    { src: star, style: { right: '4%', top: '45%', width: 22, transform: 'rotate(20deg)' } },
    { src: confettiBlue, style: { left: '14%', top: '4%', width: 16, transform: 'rotate(30deg)' } },
  ],
  vendors: [
    { src: confettiOrange, style: { right: '4%', top: '24px', width: 22, transform: 'rotate(-8deg)' } },
    { src: star, style: { left: '2%', bottom: '20px', width: 26, transform: 'rotate(-18deg)' } },
    { src: confettiBlue, style: { left: '1%', top: '30%', width: 18, transform: 'rotate(12deg)' } },
    { src: ribbonBrown, style: { right: '-22px', top: '40%', width: 80, opacity: 0.85, transform: 'rotate(70deg)' } },
    { src: star, style: { right: '3%', bottom: '16px', width: 20, transform: 'rotate(8deg)' } },
  ],
  venueMap: [
    { src: confettiBlue, style: { left: '3%', top: '22px', width: 20, transform: 'rotate(20deg)' } },
    { src: ribbonPink, style: { right: '-10px', bottom: '10px', width: 100, opacity: 0.85, transform: 'rotate(10deg) scaleX(-1)' } },
    { src: confettiOrange, style: { right: '5%', top: '26px', width: 18, transform: 'rotate(-10deg)' } },
    { src: star, style: { left: '4%', bottom: '24px', width: 24, transform: 'rotate(-6deg)' } },
  ],
  notice: [
    { src: star, style: { left: '4%', top: '20px', width: 24, transform: 'rotate(6deg)' } },
    { src: confettiOrange, style: { right: '5%', bottom: '24px', width: 20, transform: 'rotate(12deg)' } },
    { src: confettiBlue, style: { right: '3%', top: '30%', width: 18, transform: 'rotate(18deg)' } },
    { src: ribbonBrown, style: { left: '-20px', bottom: '-10px', width: 76, opacity: 0.85, transform: 'rotate(160deg)' } },
  ],
  access: [
    { src: confettiOrange, style: { right: '3%', top: '22px', width: 20, transform: 'rotate(-14deg)' } },
    { src: ribbonBrown, style: { left: '-18px', bottom: '-6px', width: 84, opacity: 0.85, transform: 'rotate(150deg)' } },
    { src: star, style: { right: '4%', bottom: '20px', width: 22, transform: 'rotate(14deg)' } },
    { src: confettiBlue, style: { left: '4%', top: '32%', width: 18, transform: 'rotate(-22deg)' } },
  ],
  schedule: [
    { src: confettiBlue, style: { right: '4%', top: '24px', width: 20, transform: 'rotate(-10deg)' } },
    { src: star, style: { left: '3%', bottom: '20px', width: 26, transform: 'rotate(-6deg)' } },
    { src: confettiOrange, style: { left: '2%', top: '35%', width: 18, transform: 'rotate(24deg)' } },
    { src: ribbonPink, style: { right: '-18px', bottom: '40px', width: 90, opacity: 0.85, transform: 'rotate(-14deg) scaleX(-1)' } },
  ],
  faq: [
    { src: confettiOrange, style: { left: '4%', top: '22px', width: 20, transform: 'rotate(16deg)' } },
    { src: ribbonPink, style: { right: '-14px', bottom: '6px', width: 90, opacity: 0.85, transform: 'rotate(-8deg)' } },
    { src: star, style: { right: '4%', top: '26px', width: 22, transform: 'rotate(-12deg)' } },
    { src: confettiBlue, style: { left: '3%', bottom: '24px', width: 18, transform: 'rotate(20deg)' } },
  ],
  contact: [
    { src: star, style: { left: '4%', top: '28px', width: 26, transform: 'rotate(-8deg)' } },
    { src: confettiOrange, style: { right: '6%', top: '40px', width: 20, transform: 'rotate(10deg)' } },
    { src: confettiBlue, style: { left: '8%', bottom: '30px', width: 20, transform: 'rotate(-16deg)' } },
    { src: ribbonPink, style: { right: '-12px', bottom: '-4px', width: 110, opacity: 0.85, transform: 'rotate(6deg)' } },
  ],
} satisfies Record<string, Piece[]>

/** ポスターデザイン有効時のみ、セクションの四隅に紙吹雪・紙テープ・星を散りばめる装飾。 */
export function Confetti({ variant }: { variant: keyof typeof SETS }) {
  if (!NEW_DESIGN_ENABLED) return null

  return (
    <>
      {SETS[variant].map((piece, i) => (
        <img
          key={i}
          src={piece.src}
          alt=""
          aria-hidden="true"
          className="confetti-piece"
          style={piece.style}
        />
      ))}
    </>
  )
}
