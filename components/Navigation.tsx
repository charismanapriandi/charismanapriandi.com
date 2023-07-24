/** @jsxImportSource @emotion/react */
import { Theme, css } from "@emotion/react";
import { useTheme } from "@emotion/react";
import Text from "components/Text";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';

const links = [
  {
    label: 'Home',
    href: '/',
    disabled: false,
  },
  {
    label: 'Projects',
    href: '/projects',
    disabled: true,
  },
  {
    label: 'About',
    href: '/about',
    disabled: false,
  }
]

export default function Navigation() {
  const theme = useTheme()
  const router = useRouter()
  const [isAbout, setIsAbout] = useState(false)
  
  return (
    <>
      <nav 
        css={{ 
          background: theme.palette.background.secondary,
          width: 'fit-content', 
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: '5px',
          borderRadius: theme.borderRadius,
          boxShadow: theme.boxShadow.sm
        }}
      >
        <div css={{ display: 'flex' }}>
          {links.map((i, x) => {
            const active = router.pathname === i.href

            if (i.disabled) {
              return (
                <Text  
                  size='small' 
                  color='disabled'
                  css={[itemCss, active && itemActiveCss]}
                >
                  {i.label}
                </Text>
              )
            }

            return (
              <Link key={x} href={i.href} passHref>
                <a>
                  <Text  
                    size='small' 
                    color={active ? 'primary' : 'secondary'} 
                    css={[itemCss, active && itemActiveCss, { cursor: 'pointer' }]}
                  >
                    {i.label}
                  </Text>
                </a>
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  )
}

const itemCss = (theme: Theme) => css({
  backgroundColor: theme.palette.background.secondary,
  padding: '5px 20px',
  borderRadius: theme.borderRadius,
})

const itemActiveCss = css({
  fontWeight: 600,
})