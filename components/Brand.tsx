import Link from "next/link";
import { FC, memo } from "react"
import { Icon, Text } from "."

const Brand: FC<Components.Brand> = ({ displayText = false }) => {
  return (
    <Link href='/' passHref>
      <a css={{display: 'flex', alignItems: 'center', gap: '20px'}}>
        <Icon.Logo size={34} />
        {displayText && <Text color="primary">Charisman Apriandi</Text>}
      </a>
    </Link>
  )
}

export default memo(Brand);