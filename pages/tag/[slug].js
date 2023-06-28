import React, { Suspense, useEffect, useState } from 'react';
import { getSimilarPosts, getTags } from '../../services';
import { PostCard, PostWidget, Tags } from "../../components"
import Loading from '../../components/loading';

function Tag({ tag }) {
    const [relatedPosts, setRelatedPosts] = useState([])

    useEffect(() => {
      getSimilarPosts([tag], "")
      .then(posts => setRelatedPosts(posts))
    }, [tag])
    
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-10">
      <Suspense fallback={Loading} >

        <div className="lg:col-span-8 col-span-2 bg-gray-400">
          {relatedPosts.length ? (
            relatedPosts.map((post, index) => (
              <PostCard post={post} key={post.title} />
            ))
          ) : (
            <p className="title text-brown">Posts with tag "{tag}" are coming soon ...</p>
          )}
        </div>
      </Suspense>
        <div className="lg:col-span-4 col-span-1 bg-red-400">
          <div className="lg:sticky relative top-8">
            <PostWidget/>
            <Tags />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tag

export async function getStaticProps({ params }) {
  return {
    props: { tag: params.slug }
  }
}

export async function getStaticPaths() {
  const tags = await getTags();
  return { 
    paths: tags.map((tag) => ({ params: { slug: tag.slug } })),
    fallback: true
   }
}