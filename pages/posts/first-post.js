import Link from "next/link";
import Head from "next/head";

export default function FirstPost() {
  let pageTitle = "First Post";
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <h1>{pageTitle}</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
