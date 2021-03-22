const getMetaTitle = (seo, key) => {
  if (seo[key]) {
    return seo[key]
  } else if (seo.title) {
    return seo.title
  }

  return null
}

const getMetaDescripion = (seo, key) => {
  if (seo[key]) {
    return seo[key]
  } else if (seo.metaDesc) {
    return seo.metaDesc
  }
  return null
}

const getMetaImage = (page, key) => {
  if (page.seo[key]) {
    return page.seo[key].archive
  } else if (page.featuredImage) {
    if (page.featuredImage.node.heroSmall) {
      return page.featuredImage.node.heroSmall
    } else if (page.featuredImage.node.archive2x) {
      return page.featuredImage.node.archive2x
    }
  }
  return null
}

export default (seo) => {
  return {
    title: seo.title,
    meta: [
      {
        name: 'description',
        hid: 'description',
        content: seo.metaDesc,
      },
      // Open Graph
      {
        hid: 'og:title',
        name: 'og:title',
        content: seo.opengraphTitle,
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: getMetaDescripion(seo, 'opengraphDescription'),
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: seo.opengraphUrl,
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'article',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: getMetaImage(seo, 'opengraphImage'),
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: getMetaTitle(seo, 'twitterTitle'),
      },
      {
        hide: 'twitter:description',
        name: 'twitter:description',
        content: getMetaDescripion(seo, seo.metaDesc),
      },
      {
        hide: 'twitter:image',
        name: 'twitter:image',
        content: getMetaImage(seo, 'twitterImage'),
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: seo.title,
      },
    ],
  }
}
