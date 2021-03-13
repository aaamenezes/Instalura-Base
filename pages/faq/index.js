import React from 'react'
import PropTypes from 'prop-types'
import FAQScreen from '../../src/components/screens/FAQScreen'
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc'

function FAQPage({ faqCategories }) {
  return <FAQScreen faqCategories={faqCategories} />
}

export default websitePageHOC(FAQPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Perguntas frequentes - Instalura'
    }
  }
})

export async function getStaticProps() {
  const faqCategories = await (
    fetch('https://instalura-api.vercel.app/api/content/faq')
  )
    .then(serverResponse => serverResponse.json())
    .then(convertedResponse => convertedResponse.data)

  return {
    props: {
      faqCategories
    }
  }
}

FAQPage.propTypes = {
  faqCategories: PropTypes.arrayOf(PropTypes.object).isRequired
}
