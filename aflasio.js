menuItemsStart = [
  { name: 'Gallery', href: '/gallery' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Friends', href: '/friend' }
]

menuItemsEnd = [
  {
    name: 'Gitlab',
    href: 'https://gitlab.com/sira313',
    icon: 'gitlab'
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/sira313/',
    icon: 'instagram'
  },
  {
    name: 'Rss',
    href: 'https://blog.aflasio.com/atom.xml',
    icon: 'rss'
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: 'mail'
  }
]

exports.siteMetadata = {
  title: `Aflasio`,
  description: `Portfolio of a FLOSS user artist`,
  author: `@sira313`,
  primaryColor: `#363636`,
  menuItemsStart,
  menuItemsEnd
}
