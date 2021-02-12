import React from 'react'

import Menu from '../src/components/commons/Menu'
import Footer from '../src/components/commons/Footer'

export default function Home() {
  return (
    <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    }}>
      <Menu />
      <Footer />
    </div>
  )
}
