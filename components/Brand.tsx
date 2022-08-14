import Link from "next/link";
import { memo } from "react"
import { Icon, Text } from "."

const Brand = () => {
  return (
    <Link href='/' passHref>
      <a css={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px'}}>
        <Icon.Logo size={34} />
        <Text color="primary">Charisman Apriandi</Text>
      </a>
    </Link>
  )
}

export default memo(Brand);