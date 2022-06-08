import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Hello, I'm <b>Frank</b>. I'm a software engineer in Pennsylvania.</p>
          <p>
            {':)'}          </p>
        </section>
      </Layout>
  );
}