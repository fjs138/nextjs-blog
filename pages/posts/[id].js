import Layout from '../../components/layout';

export default function Post(){
  return <Layout>

  </Layout>
}

export async function getStaticPaths(){
  // returns a list of possible values for id
}

export async function getStaticProps({params}){
  // fetches necessary data for the blog post using params.id
}

