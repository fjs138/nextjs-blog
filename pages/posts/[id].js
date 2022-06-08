import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export async function getStaticProps({ params }) {
  // fetches necessary data for the blog post using params.id

  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

/*
The post page is now using the getPostData function in getStaticProps to get the
 post data and return it as props.
 */



export default function Post({ postData }) {
  return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        {postData.title}
        <br />
        {postData.id}
        <br />
        <Date dateString={postData.date} />
      </Layout>
  );
}



// returns a list of possible values for id
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

