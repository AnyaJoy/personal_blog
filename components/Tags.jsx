import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { getTags } from '../services';

export default function Tags() {
  const [tags, setTags] = useState([])

  useEffect(() => {
    getTags()
    .then(newTags => setTags(newTags))
  
  }, [])
  
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8 pb-12 w-full">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4 border-lightBrown">
        All tags
      </h3>
      <div className="flex flex-wrap gap-x-3 gap-y-5">
        {tags.map((tag) => (
          <Link key={tag.slug} href={`/tag/${tag.slug}`}>
            <span className="cursor-pointer tag">{tag.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
