import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Lucky 🌟'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
