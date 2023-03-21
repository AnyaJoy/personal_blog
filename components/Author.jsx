import React from 'react'

function Author({ author }) {
  return (
    <div className='text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20'>
      <img
        alt={author.name}
        height="100px"
        width="100px"
        className='align-middle rounded-full'
        src={author.photo.url}
      />
    </div>
  )
}

export default Author