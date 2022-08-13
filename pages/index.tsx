/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next'
import { GetInTouchForm, Layout, ProjectList, RecordCard, TechnologyList, Text } from '@/components'
import { css } from '@emotion/react'

const text = {
  title: 'A fullstack javascript programmer focused on website development',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt tempor congue. Praesent velit nibh, rhoncus eget ante sit amet, tempor luctus diam. Quisque porta tempus arcu non porta.'
}

const Home: NextPage = () => {
  return (
    <Layout.Primary>
      <div css={heroCss}>
        <Text css={{maxWidth: '800px'}} as='h1'>
          {text.title}
        </Text>
        <Text css={{maxWidth: '800px', marginTop: '30px', wordSpacing: '3px'}}>
          {text.description}
        </Text>
      </div>
      <div css={sectionCss}>
        <RecordCard experienceCount={10} projectCount={100} />
      </div>
      <div css={sectionCss}>
        <Text css={{marginBottom: '20px'}} as='h2'>Latest Works</Text>
        <ProjectList />
      </div>
      <div css={sectionCss}>
        <Text css={{marginBottom: '20px'}} as='h2'>Technology that i use</Text>
        <TechnologyList />
      </div>
      <div css={sectionCss}>
        <Text css={{marginBottom: '20px'}} as='h2'>Get in touch</Text>
        <GetInTouchForm />
      </div>
    </Layout.Primary>
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
