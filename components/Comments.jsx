import moment from 'moment'
import { parse } from 'path'
import React, { useEffect, useState } from 'react'
import { getComments } from '../services'

function Comments({ slug }) {
  const [comments, setComments] = useState([])

  useEffect(() => {
    getComments(slug)
    .then((res) => setComments(res))
  }, [])
  
  return (
    <>{comments.length ? (
      <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
        <h3 className='text-xl mb-8 font-semibold border-b pb-4'>{comments.length}{' '}Comment{comments.length > 1 && 's'}</h3>
        {comments.map((comment) => (
          <div key={comment.createdAt} className="border-b border-grey mb-4 pb-4">
            <p className=''mb-4>
              <span className='font-semibold'>{comment.name}</span>
              {' '}
              on
              {' '}
              {moment(comment.createdAt).format('MMM DD, YYYY')}
            </p>
            <br/>
            <p className='whitespace-pre-line text-brown w-full'>{comment.comment}</p> 
          </div>
        ))}
      </div>
    ) : ""}</>
  )
}

export default Comments