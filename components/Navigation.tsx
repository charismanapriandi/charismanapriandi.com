/** @jsxImportSource @emotion/react */
import { Theme, css } from "@emotion/react";
import { useTheme } from "@emotion/react";
import Text from "components/Text";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  {
    label: "Home",
    href: "/",
    disabled: false,
  },
  {
    label: "Projects",
    href: "/projects",
    disabled: true,
  },
  {
    label: "About",
    href: "/about",
    disabled: false,
  },
];

export default function Navigation() {
  const theme = useTheme();
  const router = useRouter();
  const [isAbout, setIsAbout] = useState(false);

  return (
    <>
      <nav
        css={{
          background: theme.palette.background.secondary,
          width: "fit-content",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "5px",
          borderRadius: theme.borderRadius,
          boxShadow: `0px 0.1px 1.5px rgba(0, 0, 0, 0.009), 0px 0.4px 3.6px rgba(0, 0, 0, 0.017), 0px 1.1px 6.8px rgba(0, 0, 0, 0.025), 0px 2.4px 12.1px rgba(0, 0, 0, 0.035), 0px 5px 22.6px rgba(0, 0, 0, 0.047), 0px 12px 54px rgba(0, 0, 0, 0.07)`,
        }}
      >
        <div css={{ display: "flex" }}>
          {links.map((i, x) => {
            const active = router.pathname === i.href;

            if (i.disabled) {
              return (
                <Text
                  size="small"
                  color="disabled"
                  css={[itemCss, active && itemActiveCss]}
                >
                  {i.label}
                </Text>
              );
            }

            return (
              <Link key={x} href={i.href} passHref>
                <a>
                  <Text
                    size="small"
                    color={active ? "primary" : "secondary"}
                    css={[
                      itemCss,
                      active && itemActiveCss,
                      { cursor: "pointer" },
                    ]}
                  >
                    {i.label}
                  </Text>
                </a>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}

const itemCss = (theme: Theme) =>
  css({
    backgroundColor: theme.palette.background.secondary,
    padding: "5px 20px",
    borderRadius: theme.borderRadius,
  });

const itemActiveCss = css({
  fontWeight: 600,
});
