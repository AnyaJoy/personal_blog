import Head from 'next/head'
import Image from 'next/image'
import { PostCard, Tags, PostWidget } from "../components";
import serendipity from '../public/serendipity-no-bg.png';
import { getPosts } from '../services'

export default function Home({ posts }) {
  const shufflePosts = (posts) => {
    for (var i = posts.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = posts[i];
        posts[i] = posts[j];
        posts[j] = temp;
    }
    return posts
}

  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Travel blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b w-full  border-lightBrown py-6'>
        <div className='lg:col-span-5 col-span-1 w-fit mx-auto'>
          <Image
            src={serendipity}
            alt="Midjourney representation of my soul"
            width={500}
            height={500}
          />
        </div>
        <div className='lg:col-span-7 col-span-1 my-auto '>
          <p className='font-fairy-tale italic text-4xl font-light text-darkBrown' >
            "A woman is only allowed to become a pirate if she doesn't give in to a man in the following qualities: determination, courage, and will."
          </p>
          <p className='mt-3 text-sm text-gray-700'>- from Pirate Code of the 17th century.</p>
          <p className='mt-10'>Growing up in a military settlement in the heartland of Russia the only grasp of air I had were stories. Street artists, digital nomads, ultra-runners, animal rights fighters, travelers. These people had what most didn't - the courage to live free. The seed they left in me only starts to arise a decade later. But maybe my story will one day have a similar impact on a wandering soul.</p>
          <p  className='mt-3'> Happiness is not a choice, it's a battle. And I bet on you.</p>
        </div>
          
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 my-10'>
        <div className='lg:col-span-8 bg-gray-400'>
          {shufflePosts(posts).map((post, index) => (<PostCard post={post.node} key={post.title}/> ))}
        </div>
        <div className='lg:col-span-4 border-black'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Tags />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts }
  }
}
