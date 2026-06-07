export const pageFadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 12 },
  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
}

export const staggerContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
}

export const fadeUpItem = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
  },
}

export const sidebarSlide = {
  hidden: { x: '-100%', opacity: 0.4 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.26, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    x: '-100%',
    opacity: 0.4,
    transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
  },
}
