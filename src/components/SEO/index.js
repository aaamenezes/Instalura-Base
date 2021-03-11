import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

export default function SEO({ headTitle }) {
  const baseTitle = 'Instalura Base - JamStack'
  const title = headTitle
    ? `${ headTitle } | ${ baseTitle }`
    : baseTitle
  const description = 'Projeto de Instagram'
  const image = 'https://www.alura.com.br/assets/img/alura-share.1571848411.png'
  const url = 'https://instalura-base.aaamenezes.vercel.app/'

  return (
    <Head>
      <title>{title}</title>
      <meta name='title' content={title} />
      <meta name='description' content={description} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={url} />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:image' content={image} />
    </Head>
  )
}

SEO.propTypes = {
  headTitle: PropTypes.string
}

SEO.defaultProps = {
  headTitle: ''
}
