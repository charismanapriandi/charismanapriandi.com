/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next'
import { Button, Icon, Layout, ProjectList, RecordCard, TechnologyList, Text } from '@/components'
import { css } from '@emotion/react'
import Head from 'next/head'

const text = {
  title: 'A fullstack javascript programmer focused on website development',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt tempor congue. Praesent velit nibh, rhoncus eget ante sit amet, tempor luctus diam. Quisque porta tempus arcu non porta.'
}


const Home: NextPage = () => {
  
  return (
    <>
      <Head>
        <title>Charisman Apriandi</title>
      </Head>
      <Layout.Primary isPaddingTop={false}>
        <div css={heroCss}>
          <Text css={{maxWidth: '800px'}} as='h1'>
            {text.title}
          </Text>
          <Text css={{maxWidth: '800px', marginTop: '30px', wordSpacing: '3px'}}>
            {text.description}
          </Text>
          <Button css={{marginTop: '50px'}}>
            <Icon.Download css={{marginRight: '20px', color: '#FFFFFF'}} size={24} /> Curriculum Vitae
          </Button>
        </div>
        <div css={sectionCss}>
          <RecordCard experienceCount={'2+'} projectCount={'5+'} />
        </div>
        {/* <div css={sectionCss} id='projects'>
          <Text css={{marginBottom: '20px'}} as='h2'>Projects</Text>
          <ProjectList />
        </div> */}
        <div css={sectionCss} id='thinks'>
          <Text as='h2'>Think</Text>
          <Text>Think I realy like</Text>
          <TechnologyList />
        </div>
      </Layout.Primary>
    </>
  )
}

const sectionCss = css({
  margin: '100px 0'
})

const heroCss = css({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
})

export default Home
