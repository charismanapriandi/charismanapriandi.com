import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { memo } from "react"
import { Icon, Text, List, Row } from ".";

const links = [
  {
    label: 'Detail',
    href: '/admin/detail'
  },
  {
    label: 'Project',
    href: '/admin/project'
  },
  {
    label: 'Technology',
    href: '/admin/technology'
  },
  {
    label: 'Category',
    href: '/admin/category'
  }
]

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { pathname } = useRouter()
  
  return (
    <SidebarStyled isOpen={isOpen}>
      <Row justifyContent="center">
        <Icon.Logo size={60} />
      </Row>
      <List css={{marginTop: '30px'}}>
        {links.map((item, index) => (
          <List.Item key={index}>
            <Link href={item.href} passHref>
              <a>
                  <Text 
                    size='small' 
                    color={
                      item.href === pathname 
                        ? 'highlight' 
                        : 'secondary'}>
                    {item.label}
                  </Text>
              </a>
            </Link>
          </List.Item>
        ))}
      </List>
    </SidebarStyled>
  )
}

export default memo(Sidebar);

interface SidebarStyled {
  isOpen: boolean;
}

const SidebarStyled = styled.aside<SidebarStyled>(({isOpen, theme}) => ({
  backgroundColor: theme.palette.background.secondary,
  padding: '15px',
  height: '100vh',
  width: '200px',
}))

const CustomListItem = styled((props: any) => <List.Item {...props} />)(() => ({
  display: 'flex',
  alignItems: 'center',
  '.label': {
    display: 'none'
  },
  ':hover': {
    '.label': {
      display: 'block',
    }
  }
}))