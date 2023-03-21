import React, { useEffect, useRef, useState } from 'react'
import { submitComment } from '../services'

function CommentsForm({ slug }) {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const commentElem = useRef()
  const nameElem = useRef()
  const emailElem = useRef()
  const storeDataElem = useRef()

  useEffect(() => {
    nameElem.current.value = window.localStorage.getItem('nameElem')
    emailElem.current.value = window.localStorage.getItem('emailElem')
  }, [])

  const submit = () => {
    setError(false);
    const { value: comment } = commentElem.current;
    const { value: name } = nameElem.current;
    const { value: email } = emailElem.current;
    const { checked: storeData } = storeDataElem.current;

    if (!comment || !name || !email) {
      setError(true);
      return;
    };

    const commentObj = { name, email, comment, slug };

    if (storeData) {
      window.localStorage.setItem('name', nameElem);
      window.localStorage.setItem('email', emailElem);
    } else {
      window.localStorage.removeItem('name', nameElem);
      window.localStorage.removeItem('email', emailElem);
    }

    submitComment(commentObj)
    .then((res) => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false)
      }, 3000)
    })
  }

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>Thoughts?</h3>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
        <input 
          type="text" 
          ref={nameElem} 
          className="px-4 p-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-grey"
          placeholder='Name'
          name="nameElem"
        />
        <input 
          type="text" 
          ref={emailElem} 
          className="px-4 p-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-grey"
          placeholder='Email'
          name="emailElem"
        />
      </div>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <textarea 
          ref={commentElem} 
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-grey"
          placeholder='Comment'
          name="commentElem"
        />
      </div>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <div>
          <input ref={storeDataElem} type="checkbox" name="storeDataElem" value="true" id='storeDataElem'/>
          <label className='text-brown ml-2' htmlFor='storeDataElem'>Save my email and name for the next time I comment</label>
        </div>
      </div>
      {error && <p className='text-xs text-red'>All fields are required</p>}
      <div className='mt-8'>
        <button 
          type="button" 
          onClick={submit}
          className="transition duration-500 ease hover:bg-lightBrown rounded-full hover:text-darkBrown inline-block text-brown px-5 p-3 cursor-pointer"
        >
          Post comment
        </button>
        {showSuccessMessage && <span className='text-xl float-right font-semibold mt-3'>Comment in moderation</span>}
      </div>
    </div>
  )
}

export default CommentsForm