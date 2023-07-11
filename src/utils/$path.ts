export const pagesPath = {
  "nested": {
    $url: (url?: { hash?: string }) => ({ pathname: '/nested' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  favicon_ico: '/favicon.ico',
  next_svg: '/next.svg',
  vercel_svg: '/vercel.svg'
} as const

export type StaticPath = typeof staticPath