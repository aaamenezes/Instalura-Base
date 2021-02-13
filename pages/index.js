import React from 'react'

import Menu from '../src/components/commons/Menu'
import Footer from '../src/components/commons/Footer'
import Text from '../src/components/foundation/Text'
import { Button } from '../src/components/commons/Button'

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
      <div>
        <Text
          variant="title"
          tag="h1"
          color="secondary.main"
          // textAlign="right"
          textAlign={{
            xs: 'center',
            md: 'left'
          }}
        >
          Compartilhe momentos e conecte-se com amigos
        </Text>
        <Text
          variant="paragraph1"
          tag="p"
          color="secondary.light"
          // textAlign="center"
          textAlign={{
            xs: 'center',
            md: 'left'
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
        </Text>

        <Button
          variant="secondary.medium"
          display="block"
          margin={{
            xs: 'auto',
            md: 'initial',
          }}
        >
          Cadastrar
        </Button>
      </div>

      <Footer />
    </div>
  )
}
