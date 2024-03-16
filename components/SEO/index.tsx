import React from "react";
import Head from "next/head";

export default function SEO() {
  const description =
    "A website that keeps track of your financial expenses in a convenient and organized way";

  const title = "Budget";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Personal finance" />
      <meta name="author" content="jyhaoo" />
      <meta property="og:description" content="/op.png" />
    </Head>
  );
}
