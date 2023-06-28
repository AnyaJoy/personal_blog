import moment from "moment";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { getRecentPosts, getSimilarPosts } from "../services";

export default function PostWidget({ tags, slug }) {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(tags, slug).then((res) => setRelatedPosts(res));
    } else {
      getRecentPosts().then((res) => setRelatedPosts(res));
    }
  }, [slug]);

  return (
    <>
      {relatedPosts.length ? (
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4 border-lightBrown">
            {slug ? "Related posts" : "Recent posts"}
          </h3>
          {relatedPosts.map((post) => (
            <Link
              className="font-lg text-lg"
              href={`/post/${post.slug}`}
              key={post.title}
            >
              <div
                key={post.title}
                className="flex items-center w-full mb-4 cursor-pointer"
              >
                <div className="flex-none mr-3">
                  <img
                    alt="post.title"
                    className="align-middle rounded-full w-16 h-16 object-cover"
                    src={post.featuredImage.url}
                  />
                </div>
                <div>
                  <p className="text-grey-500 text-sm text-darkBrown">
                    {moment(post.createdAt).format("MMM DD, YYYY")}
                  </p>
                  <p>{post.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
