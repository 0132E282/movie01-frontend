import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['vi'],
  defaultLocale: 'vi',
  localePrefix: 'never',
  pathnames: {
    '/': '/',
    '/single-movies': {
      vi: '/phim-le',
    },
    '/series-movies': {
      vi: '/phim-bo',
    },
    '/catalog': {
      vi: '/danh-muc-phim',
    },
    '/genre': {
      vi: '/the-loai',
    },
    '/genre/[slug]': {
      vi: '/the-loai/[slug]',
    },
    '/country': {
      vi: '/quoc-gia',
    },
    '/country/[slug]': {
      vi: '/quoc-gia/[slug]',
    },
    '/year': {
      vi: '/nam-phat-hanh',
    },
    '/year/[slug]': {
      vi: '/nam-phat-hanh/[slug]',
    },
    '/movie/[slug]': {
      vi: '/phim/[slug]',
    },
    '/watch/[slug]': {
      vi: '/xem-phim/[slug]',
    },
    '/search': {
      vi: '/tim-kiem',
    },
    '/favorites': {
      vi: '/phim-yeu-thich',
    },
    '/history': {
      vi: '/lich-su-xem',
    }
  }
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
