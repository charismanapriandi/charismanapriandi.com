import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { memo } from "react"
import { Container, Icon, Text } from ".";

const Footer = () => {
  return (
    <footer css={footerCss}>
      <Container.Default>
        <Icon.Logo size={50} />
        <Text as='div' css={copyrightCss} size='small'>
          &copy; 2022 Charisman Apriandi
          <div css={dotCss} />
          <Link href='https://github.com/charismanapriandi/charismanapriandi.com' passHref>
            <Anchor target='_blank' rel='noreferrer'>
              This site is available on
              <GithubIcon css={{marginLeft: '10px'}} size={20} />
            </Anchor>
          </Link>
        </Text>
      </Container.Default>
    </footer>
  )
}

const footerCss = css({
  padding: '20px'
})

const copyrightCss = css({
  marginTop: '20px',
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
})

const dotCss = (theme: Theme) => css({
  width: '5px',
  height: '5px',
  borderRadius: '5px',
  backgroundColor: theme.palette.text.secondary,
})

const GithubIcon = styled(Icon.Github)(({theme}) => ({
  color: theme.palette.text.secondary,
}))

const Anchor = styled.a(({theme}) => ({
  ':hover': {
    color: theme.palette.text.highlight,
    [`${GithubIcon}`]: {
      color: theme.palette.text.highlight
    }
  }
}))

export default memo(Footer);