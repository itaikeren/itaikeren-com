import { useEffect, useState } from "react";

import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import Container from "@/components/container";
import Header from "@/components/header";
import Footer from "@/components/footer";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>Itai Keren - Software engineer, product designer, and entrepreneur</title>
        <meta
          property="og:title"
          key="title"
          content="Itai Keren - Software engineer, product designer, and entrepreneur"
        />
        <meta
          property="og:description"
          key="description"
          content="I'm Itai, a software engineer, product designer and entrepreneur based in Israel."
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Container>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
