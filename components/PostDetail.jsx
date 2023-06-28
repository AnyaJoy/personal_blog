import moment from 'moment'
import React from 'react'

function PostDetail({ post }) {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-two':
        return <h3 key={index} className="mb-8 text-2xl font-semibold text-darkBrown -mt-3">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-12 -mt-3">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-5">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'block-quote':
        return <p key={index} className="text-md title text-center my-10">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <p key={index} className="dividing-subtitle mb-6 text-center">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-six':
        return <p key={index} className="mb-5 text-lg">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  console.log(post)
  
  return (
    <div className='bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md mb-6'>
        <img 
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top h-full w-full rounded-t-lg"
        />
      </div>
      <div className='px-4 lg:px-0'>
        <div className='flex items-center mb-8 w-full justify-between'>
          <div className='flex items-center'>
            <img 
              alt={post.author.name}
              height="30px"
              width="30px"
              className='align-middle rounded-lg'
              src={post.author.photo.url}
            />
            <p className="font-xs ml-3 font-semibold text-darkBrown">
            {post.author.name}
            </p>
          </div>
          <p className="text-grey-500 font-xs ">
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </p>
        </div>
        <h1 className='mb-8 text-3xl font-semibold text-darkBrown'>{post.title}</h1>
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item));
          return getContentFragment(index, children, typeObj, typeObj.type)
        })}
      </div>
    </div>
  )
}

export default PostDetail