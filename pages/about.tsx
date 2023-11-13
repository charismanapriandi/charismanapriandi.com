import { Button, Container, Icon, Layout, Text } from "@/components";
import Navigation from "components/Navigation";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Charisman Apriandi - Fullstack Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        css={{
          position: "fixed",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          top: 15,
          zIndex: 9999,
        }}
        initial={{ opacity: 0, y: "6rem" }}
        animate={{ opacity: 1, y: "0rem" }}
        transition={{ delay: 0.3 }}
      >
        <Navigation />
      </motion.div>
      <Layout.Primary isPaddingTop>
        <Container.Default css={{ paddingTop: 100 }}>
          <Text
            as="h1"
            css={{
              fontSize: "clamp(24px, 8vw, 36px)",
              fontWeight: 900,
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            <span
              css={({ palette: { text, background } }) => ({
                background: `-webkit-linear-gradient(${text.primary} 45%, ${background.primary})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              })}
            >
              Front-End Developer
            </span>{" "}
            <br />
            <span
              css={({ palette: { text, background } }) => ({
                background: `-webkit-linear-gradient(${text.primary} 45%, ${background.primary})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              })}
            >
              Building Beautiful and User-Friendly Web Applications
            </span>
          </Text>
          <Text css={{ lineHeight: "36px", textAlign: "center" }}>
            I&apos;m a full-stack developer with a focus on front-end
            development. I have a passion for building beautiful and
            user-friendly web applications and mobile application that meet the
            needs of my clients and their users.
          </Text>
          <section
            css={{
              marginTop: "100px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <Text
              as="h2"
              css={({ palette: { text, background } }) => ({
                background: `-webkit-linear-gradient(${text.primary} 45%, ${background.primary})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "24px",
              })}
            >
              About Me
            </Text>
            <Text css={{ lineHeight: "28px" }}>
              Hi, I&apos;m Charisman Apriandi. I&apos;m a full-stack developer
              with a focus on front-end development and mobile development. I
              have over 3 years of experience in the industry, and I&apos;ve
              worked on a variety of projects, from small websites to
              large-scale web applications.
            </Text>
            <Text css={{ lineHeight: "28px" }}>
              I&apos;m passionate about building beautiful and user-friendly web
              that meet the needs of my clients and their users. I have a strong
              understanding of front-end technologies such as HTML, CSS, and
              JavaScript. I&apos;m also proficient in a variety of front-end
              frameworks and libraries, such as React, and Vue.js.
            </Text>
            <Text css={{ lineHeight: "28px" }}>
              In addition to my front-end skills, I also have experience with
              back-end development. I&apos;m familiar with programming languages
              such as Javascript and Python, and I&apos;ve worked with a variety
              of databases and APIs.
            </Text>
            <Text css={{ lineHeight: "28px" }}>
              I&apos;m a highly motivated and results-oriented individual.
              I&apos;m always eager to learn new things and take on new
              challenges. I&apos;m also a team player and I&apos;m always
              willing to go the extra mile to help my team succeed.
            </Text>
          </section>
          <section css={{ marginTop: "80px", marginBottom: "80px" }}>
            <div
              css={({ palette, borderRadius }) => ({
                background: palette.background.secondary,
                padding: 20,
                borderRadius: borderRadius,
                border: `1px solid ${palette.text.disabled}`,
              })}
            >
              <Text css={{ lineHeight: "28px" }}>
                If you&apos;re looking for a full-stack developer with a focus
                on front-end development, I&apos;d love to hear from you. Please
                contact me at{" "}
                <span
                  css={({ palette }) => ({ color: palette.text.highlight })}
                >
                  <Link href="mailto:charismanapriandi@gmail.com">
                    charismanapriandi@gmail.com
                  </Link>{" "}
                </span>
                or{" "}
                <span
                  css={({ palette }) => ({ color: palette.text.highlight })}
                >
                  <Link href="tel:+6287886775740">+62 878 86775740</Link>{" "}
                </span>{" "}
                to discuss your project needs.
              </Text>
              <div css={{ marginTop: "20px" }}>
                {/* <Link css={{width: 'fit-content'}} href='https://drive.google.com/file/d/1qnyWVCA7qJN9MdJuCjwvGznlNcXutwLZ/view?usp=sharing' passHref> */}
                <a
                  href="/cv-13nov2023.pdf"
                  css={{ width: "fit-content" }}
                  target="_blank"
                  rel="noreferrer"
                  download="cv-charismanarpaindi-13_november_2023"
                >
                  <Button>
                    <Icon.Download
                      css={{ marginRight: "20px", color: "#FFFFFF" }}
                      size={24}
                    />{" "}
                    Curriculum Vitae
                  </Button>
                </a>
                {/* </Link> */}
              </div>
            </div>
          </section>
        </Container.Default>
      </Layout.Primary>
    </>
  );
}
