import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

function Meta(props) {
  const { children, ...customPageMeta } = props;
  const router = useRouter();


  const globalMeta = {
    siteName: "Nikol Prokopova's portfolio",
    domain: "",

  };


  const defaultPageMeta = {

    title: "Nikol Prokopova's portfolio",

    description: "Nikol Prokopova's portfolio",

    type: "website",
  };


  const meta = { ...globalMeta, ...defaultPageMeta, ...customPageMeta };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" key="description" />
      {meta.domain && <link rel="canonical" href={`${meta.domain}${router.asPath}`} key="canonical" />}
    </Head>
  );
}

export default Meta;
