'use client'
import "../styles/globals.scss";
import React, { Suspense } from "react";
import { Layout } from "../components";
import dynamic from "next/dynamic";
import { lazy } from "react";
import { Analytics } from '@vercel/analytics/react';

const SuspenseComponent = lazy(() => import("../components/Layout"));


const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

function App({ Component, pageProps }) {
  return (
    <>
      <AnimatedCursor
        innerSize={13}
        outerSize={20}
        color="226, 192, 160"
        outerAlpha={0.2}
        innerScale={0.000001}
        outerScale={4}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Suspense fallback={<p>hey</p>}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Suspense>
      <Analytics />
    </>
  );
}

export default App;
