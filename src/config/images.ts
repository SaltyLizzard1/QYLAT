/** Public image URLs from `.env` (`VITE_IMG_*`). */
export const images = {
  day0: import.meta.env.VITE_IMG_DAY0,
  sixtyDay: import.meta.env.VITE_IMG_60DAY,
  lettingGo: import.meta.env.VITE_IMG_LETTING_GO,
  sorting: import.meta.env.VITE_IMG_SORTING,
  baliAtm: import.meta.env.VITE_IMG_BALI_ATM,
  about: import.meta.env.VITE_IMG_ABOUT,
  aboutBeach: import.meta.env.VITE_IMG_ABOUT_BEACH,
  hero: import.meta.env.VITE_IMG_HERO,
  logo:
    import.meta.env.VITE_IMG_LOGO === '/logo-removebg.png' || !import.meta.env.VITE_IMG_LOGO
      ? '/qlt-logo.png'
      : import.meta.env.VITE_IMG_LOGO,
  bini: import.meta.env.VITE_IMG_BINI,
} as const;
