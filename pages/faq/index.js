import React from 'react'
import PropTypes from 'prop-types'
import FAQScreen from '../../src/components/screens/FAQScreen'

export default function FAQPage({ faqCategories }) {
  return <FAQScreen faqCategories={faqCategories} />
}

export async function getStaticProps() {
  const faqCategories = await (
    fetch('https://instalura-api.vercel.app/api/content/faq')
  )
    .then(serverResponse => serverResponse.json())
    .then(convertResponse => convertResponse.data)

  return {
    props: {
      faqCategories
    }
  }
}

FAQPage.propTypes = {
  faqCategories: PropTypes.arrayOf(PropTypes.object).isRequired
}
