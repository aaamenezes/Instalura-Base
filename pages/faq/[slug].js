import React from 'react'
import FAQQuestionScreen from '../../src/components/screens/FAQQuestionsScreen'
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc'

function FAQInternaScreen({ category, question }) {
  return (
    <FAQQuestionScreen
      question={question}
      category={category}
    />
  )
}

FAQInternaScreen.propTypes = FAQQuestionScreen.propTypes

export default websitePageHOC(FAQInternaScreen)

export async function getStaticProps({ params }) {
  const faqCategories = await (
    fetch('https://instalura-api.vercel.app/api/content/faq')
  )
    .then(async serverResponse => {
      const response = await serverResponse.json()
      return response.data
    })

  const pageData = faqCategories.reduce((acumulate, faqCategory) => {
    const foundQuestion = faqCategory.questions.find(question => {
      if (question.slug === params.slug) return true
      return false
    })

    if (foundQuestion) {
      return {
        ...acumulate,
        category: faqCategory,
        question: foundQuestion
      }
    }

    return acumulate
  }, {})

  return {
    props: {
      category: pageData.category,
      question: pageData.question,
      pageWrapperProps: {
        seoProps: {
          headTitle: pageData.question.title
        }
      }
    }
  }
}

export async function getStaticPaths() {
  const faqCategories = await (
    fetch('https://instalura-api.vercel.app/api/content/faq')
  )
    .then(async serverResponse => {
      const response = await serverResponse.json()
      return response.data
    })

  const paths = faqCategories.reduce((acumulate, faqCategory) => {
    const questionsPaths = faqCategory.questions.map(question => {
      const questionsSlug = question.slug
      return { params: { slug: questionsSlug } }
    })

    return [ ...acumulate, ...questionsPaths ]
  }, [])

  return {
    paths,
    fallback: false
  }
}
