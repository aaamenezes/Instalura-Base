import React from 'react'

import Text from '../src/components/foundation/Text'
import { Button } from '../src/components/commons/Button'
import { Grid } from '../src/components/foundation/layout/Grid'
import { WebsitePageContext } from '../src/components/wrappers/WebsitePage'
import { Box } from '../src/components/foundation/layout/Box'
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc'

function HomeScreen() {
  const websitePageContext = React.useContext(WebsitePageContext)

  return (
    <Box
      display='flex'
      flexDirection='column'
      flex='1'
    >
      <Grid.Container
        marginTop={{
          xs: '32px',
          md: '75px'
        }}
      >

        <Grid.Row>

          <Grid.Col
            value={{ xs: 12, md: 5 }}
            offset={{ xs: 0, md: 1 }}
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='flex-start'
          >
            <Text
              variant='title'
              tag='h1'
              color='secondary.main'
              textAlign={{
                xs: 'center',
                md: 'left'
              }}
            >
              Compartilhe momentos e conecte-se com amigos
            </Text>
            <Text
              variant='paragraph1'
              tag='p'
              color='secondary.light'
              textAlign={{
                xs: 'center',
                md: 'left'
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting.
              Lorem Ipsum has been the industrys standard dummy text ever since.
            </Text>

            <Button
              variant='secondary.medium'
              display='block'
              margin={{
                xs: 'auto',
                md: 'initial'
              }}
              onClick={() => websitePageContext.toggleModalCadastro()}
            >
              Cadastrar
            </Button>
          </Grid.Col>

          <Grid.Col
            value={{ xs: 12, md: 6 }}
          >
            <img
              style={{ display: 'block', margin: 'auto' }}
              // eslint-disable-next-line max-len
              src='https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png'
              // eslint-disable-next-line max-len
              alt='Imagem de celular com páginas internas do projeto exibindo o perfil do Nicolas Cage'
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Box>
  )
}

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home - Instalura'
    },
    pageBoxProps: {
      backgroundImage: 'url(images/bubbles.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right'
    }
  }
})
