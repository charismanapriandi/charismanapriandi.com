import { useTheme } from "@emotion/react";
import { FC } from "react"

const Theme: FC<Omit<Components.IconSvg, 'size'>> = ({ ...props }) => {
  const theme = useTheme()

  return (
    <svg {...props} width="100" height="60" viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_190_43)">
        <rect width="300" height="180" rx="20" fill={theme.palette.color.primary}/>
        <path d="M68 79C68 73.4771 72.4772 69 78 69H152V200C152 205.523 147.523 210 142 210H78C72.4772 210 68 205.523 68 200V79Z" fill={theme.palette.background.primary+'7F'} fillOpacity="0.5"/>
        <path d="M152 69H307C312.523 69 317 73.4772 317 79V200C317 205.523 312.523 210 307 210H162C156.477 210 152 205.523 152 200V69Z" fill="#A66F6F"/>
        <rect x="12" y="12" width="140" height="47" rx="10" fill="#A66F6F" fillOpacity="0.5"/>
        <rect x="20" y="20" width="124" height="16" rx="5" fill="#533030"/>
        <circle cx="89.5" cy="89.5" r="7.5" fill="#D9D9D9"/>
        <circle cx="110.5" cy="89.5" r="7.5" fill="#D9D9D9"/>
        <circle cx="131.5" cy="89.5" r="7.5" fill="#D9D9D9"/>
      </g>
      <defs>
        <clipPath id="clip0_190_43">
          <rect width="300" height="180" rx="20" fill="white"/>
        </clipPath>
      </defs>
    </svg>

  )
}

export default Theme;