/** @jsxImportSource @emotion/react */
import type { NextPage } from "next";
import {
  Container,
  Layout,
  ProjectList,
  TechnologyList,
  Text,
} from "@/components";
import { Theme, css, useTheme } from "@emotion/react";
import Head from "next/head";
import Typed from "react-typed";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CollaborateList from "components/CollaborateList";
import breakpoint from "styles/breakpoint";
import Navigation from "components/Navigation";

const Home: NextPage = () => {
  const theme = useTheme();
  const thinkSectionRef = useRef<HTMLDivElement>(null);
  const [thinkSectionShadow, setThinkSectionShadow] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const screenHeight = this.window.screen.height;
      const thinkSectionTopPosition =
        thinkSectionRef.current?.getBoundingClientRect().top;

      if (!thinkSectionTopPosition) return;

      if (thinkSectionTopPosition - screenHeight < 0) {
        setThinkSectionShadow(
          Math.abs(thinkSectionTopPosition - screenHeight) / 8
        );
      }
    });
  }, []);

  return (
    <>
      <Head>
        <title>Charisman Apriandi - Fullstack Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Primary isPaddingTop={false}>
        <Container.Default css={heroCss}>
          <motion.div
            initial={{ opacity: 0, y: "6rem" }}
            animate={{ opacity: 1, y: "0rem" }}
          >
            <Text textAlign="center" css={{ marginBottom: 15 }}>
              Hi, i&lsquo;m Risman
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "6rem" }}
            animate={{ opacity: 1, y: "0rem" }}
            transition={{ delay: 0.1 }}
          >
            <Text
              textAlign="center"
              as="h1"
              css={{
                marginBottom: 20,
                fontWeight: 900,
              }}
            >
              <span
                css={({ palette: { text, background } }) => ({
                  background: `-webkit-linear-gradient(${text.primary} 45%, ${background.primary})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                })}
              >
                Building
              </span>
              {" "}
              <motion.div
                css={{
                  display: "inline-block",
                  background: `linear-gradient(135deg, #063893, ${theme.palette.color.primary})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 900,
                  position: "relative",
                  ":hover": {
                    ".frame": {
                      opacity: 0.7,
                    },
                  },
                }}
                drag
                whileHover={{
                  rotate: "-5deg",
                  cursor: "pointer",
                }}
                whileTap={{
                  cursor: "grab",
                }}
                dragConstraints={{
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
                dragElastic={{
                  bottom: 1,
                  left: 1,
                  top: 1,
                  right: 1,
                }}
              >
                <div
                  className="frame"
                  css={{
                    width: "105%",
                    height: "105%",
                    transform: "translate(-50%, -50%)",
                    left: "50%",
                    top: "50%",
                    position: "absolute",
                    border: `1px solid ${theme.palette.text.secondary}`,
                    opacity: 0,
                  }}
                >
                  <div
                    css={{
                      width: "7px",
                      height: "7px",
                      background: theme.palette.text.highlight,
                      position: "absolute",
                      top: "-3px",
                      left: "-3px",
                      borderRadius: "7px",
                    }}
                  />
                  <div
                    css={{
                      width: "7px",
                      height: "7px",
                      background: theme.palette.text.highlight,
                      position: "absolute",
                      top: "-3px",
                      right: "-3px",
                      borderRadius: "7px",
                    }}
                  />
                  <div
                    css={{
                      width: "7px",
                      height: "7px",
                      background: theme.palette.text.highlight,
                      position: "absolute",
                      bottom: "-3px",
                      right: "-3px",
                      borderRadius: "7px",
                    }}
                  />
                  <div
                    css={{
                      width: "7px",
                      height: "7px",
                      background: theme.palette.text.highlight,
                      position: "absolute",
                      bottom: "-3px",
                      left: "-3px",
                      borderRadius: "7px",
                    }}
                  />
                </div>
                digital products
              </motion.div>
              <span
                css={({ palette: { text, background } }) => ({
                  background: `-webkit-linear-gradient(${text.primary} 45%, ${background.primary})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                })}
              >
                , bring your ideas to life
              </span>
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "6rem" }}
            animate={{ opacity: 1, y: "0rem" }}
            transition={{ delay: 0.2 }}
          >
            <Text color="highlight" textAlign="center">
              <Typed
                backDelay={2000}
                strings={[
                  "Frontend Developer",
                  "Backend Developer",
                  "User Interface (UI)",
                  "User Experience (UX)",
                ]}
                loop
                typeSpeed={50}
                backSpeed={20}
              />
            </Text>
          </motion.div>
          {/* <Link css={{width: 'fit-content'}} href='https://drive.google.com/file/d/1qnyWVCA7qJN9MdJuCjwvGznlNcXutwLZ/view?usp=sharing' passHref>
            <a css={{width: 'fit-content'}} target='_blank' rel='noreferrer'>
              <Button>
                <Icon.Download css={{marginRight: '20px', color: '#FFFFFF'}} size={24} /> Curriculum Vitae
              </Button>
            </a>
          </Link> */}
        </Container.Default>
        <div css={{ height: 20 }} />
        <motion.div
          css={{ position: "sticky", top: 15, zIndex: 1 }}
          initial={{ opacity: 0, y: "6rem" }}
          animate={{ opacity: 1, y: "0rem" }}
          transition={{ delay: 0.3 }}
        >
          <Navigation />
        </motion.div>
        <div css={{ height: 200 }} />
        <Container.Default id="projects" css={collaborateSectionCss}>
          <div css={{ marginBottom: "40px" }}>
            <Text as="h2" css={{ lineHeight: "28px" }}>
              Collaborate{" "}
              <Text css={{ display: "inline" }}>
                to create impactfull results
              </Text>
            </Text>
          </div>
          <CollaborateList />
        </Container.Default>
        <div
          css={[
            {
              [`${breakpoint("md")}`]: {
                boxShadow: `0 0 ${thinkSectionShadow}px ${thinkSectionShadow}px ${theme.palette.background.primary}`,
              },
            },
            thinkSectionCss,
          ]}
          id="thinks"
          ref={thinkSectionRef}
        >
          <Container.Default>
            <div css={sectionSeparatorCss} />
            <div css={{ padding: "100px 0" }}>
              <Text as="h2" css={{ lineHeight: "28px" }}>
                Think <Text css={{ display: "inline" }}>i really like</Text>
              </Text>
              <TechnologyList />
            </div>
          </Container.Default>
        </div>
      </Layout.Primary>
    </>
  );
};

const collaborateSectionCss = (theme: Theme) =>
  css({
    padding: "100px 20px",
    top: 0,
    zIndex: 0,
    [`${breakpoint("md")}`]: {
      position: "sticky",
      height: "100vh",
    },
  });

const thinkSectionCss = (theme: Theme) =>
  css({
    position: "relative",
    zIndex: 0,
    background: `linear-gradient(90deg, ${theme.palette.background.primary}, ${theme.palette.background.secondary})`,
  });

const sectionSeparatorCss = (theme: Theme) =>
  css({
    height: "1px",
    width: "100%",
    background:
      "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255,255,255,.2) 65%, rgba(0,0,0,0) 100%)",
  });

const heroCss = css({
  marginTop: 150,
  marginBottom: 20,
  [`${breakpoint("sm")}`]: {
    marginTop: 200,
  },
  [`${breakpoint("md")}`]: {
    marginTop: 250,
  },
  [`${breakpoint("2xl")}`]: {
    marginTop: 300,
  },
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export default Home;
