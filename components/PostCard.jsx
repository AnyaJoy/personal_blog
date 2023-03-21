import React from 'react';
import moment from 'moment';
import Link from 'next/link';

export default function PostCard({ post }) {
  return (
    <div className="relative bg-white shadow-lg rounded-lg lg:p-5 pb-12 mb-8">
      <Link href={`/post/${post.slug}`}>
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="lg:col-span-2 col-span-1">
            <div className="flex items-center justify-center h-40 relative">
              <img
                src={post.featuredImage.url}
                alt={post.title}
                className="absolute h-40 shadow-lg rounded-t-lg lg:rounded-lg opacity-20 hover:opacity-100 transition duration-700 overflow:hidden"
              />
              <p className="title text-brown">{post.title}</p>
            </div>
          </div>
          <div className="lg:col-span-4 col-span-1 bg-brown-300 ">
            <p className="text-m leading-6 text-brown h-40 text-ellipsis overflow-hidden">
              {post.excert}
            </p>
          </div>
        </div>
        <p className="absolute right-5 bottom-3 text-sm text-lightBrown cursor-pointer hover:text-brown transition duration-700">
          Continue...
        </p>
      </Link>
    </div>
  );
}
