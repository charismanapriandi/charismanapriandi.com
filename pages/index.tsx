/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next'
import { Button, Icon, Layout, ProjectList, RecordCard, TechnologyList, Text } from '@/components'
import Link from 'next/link';
import { css } from '@emotion/react'
import Head from 'next/head'

const Home: NextPage = () => (
  <>
    <Head>
      <title>Charisman Apriandi</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Layout.Primary isPaddingTop={false}>
      <div css={heroCss}>
        <Text css={{maxWidth: '800px'}} as='h1'>
          Work For Passion. <br />
          Code For Users. <br />
          Live For Family. <br />
        </Text>
        <Text css={{
          maxWidth: '800px', 
          marginTop: '30px', 
          marginBottom: '50px', 
          wordSpacing: '3px'}}>
          I am a fullstack javascript developer (frontend-heavy) with 2 years of experience in web development
        </Text>
        <Link css={{width: 'fit-content'}} href='https://drive.google.com/file/d/1qnyWVCA7qJN9MdJuCjwvGznlNcXutwLZ/view?usp=sharing' passHref>
          <a css={{width: 'fit-content'}} target='_blank' rel='noreferrer'>
            <Button>
              <Icon.Download css={{marginRight: '20px', color: '#FFFFFF'}} size={24} /> Curriculum Vitae
            </Button>
          </a>
        </Link>
      </div>
      <div css={sectionCss}>
        <RecordCard experienceCount={'2+'} projectCount={'9+'} />
      </div>
      <div css={sectionCss} id='projects'>
        <Text css={{marginBottom: '40px'}} as='h2'>Projects</Text>
        <ProjectList />
      </div>
      <div css={sectionCss} id='thinks'>
        <Text as='h2'>Think</Text>
        <Text>Think I realy like</Text>
        <TechnologyList />
      </div>
    </Layout.Primary>
  </>
)

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
