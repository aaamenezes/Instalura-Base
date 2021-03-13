import React from 'react'
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc'

function LoginScreen() {
  return (
    <div>
      Página login
    </div>
  )
}

export default websitePageHOC(LoginScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Login - Instalura'
    }
  }
})
