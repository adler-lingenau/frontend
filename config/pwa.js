import { themeColor, baseUrl, title } from '../data/siteDetails'

const lang = 'de'

export default {
  manifest: {
    name: 'Adler',
    short_name: title,
    description: 'Familienhotel & Gasthof Adler, in Lingenau im Bregenzerwald',
    lang,
    start_url: `${baseUrl}${lang}/`,
    theme_color: themeColor,
    background_color: '#f9f9f9',
  },
}
