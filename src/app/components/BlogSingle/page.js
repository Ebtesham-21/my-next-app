'use client';

import React , {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {Dialog, Grid} from '@mui/material';

const BlogSingle = ({
    open,
    onClose,
    maxWidth = 'md',
    blogId,
    title,
    bImg,
    description,
    create_at,
    author,
    authorImg,
    authorBio,
    gallery = [],
    tags = [],
    socials = [],
    comment= 0,
    comments= [],
}) => {
    const SubmitHandler = async (e) => {
        e.preventDefault();
      
        if (!commentName || !commentEmail || !commentMessage) {
          alert("Please fill in all fields.");
          return;
        }
      
        try {
            const response = await fetch('/api/blogs/addComment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                blogId,
                name: commentName,
                email: commentEmail,
                message: commentMessage,
              }),
            });
        
            const data = await response.json();
        
            if (response.ok) {
              alert("Comment posted!");
              setCommentName('');
              setCommentEmail('');
              setCommentMessage('');
            } else {
              alert("Error: " + data.error);
            }
          } catch (err) {
            console.error(err);
            alert("Something went wrong.");
          }
        };
      
      


    const [commentName, setCommentName] = useState('');
    const [commentEmail, setCommentEmail] = useState('');
    const [commentMessage, setCommentMessage] = useState('');

    return (
        <>
           <Dialog 
            open={open}
            onClose={onClose}
            className='modalWrapper quickview-dialog'
            maxWidth={maxWidth}
           >
                <Grid className='modalBody modal-body relative  p-6 rounded-lg'>
                    <button className='modal-close absolute right-3 top-3 text-gray-500 hover:text-red-600'
                    onClick={onClose}
                    >
                        <i className='fa fa-close'></i>
                    </button>

                    <section className='tp-blog-single-section'>
                        <div className='container'>
                            <div className='tp-blog-content space-y-6'>
                                {/* header image */}
                                {bImg && (
                                    <div className='entry-media'>
                                        <Image
                                            src={bImg}
                                            alt={title}
                                            width={800}
                                            height={400}
                                            className='w-full h-auto rounded-md object-cover'
                                        />
                                    </div>
                                )}


                                {/* {metadata} */}
                                <div className='entry-meta flex flex-wrap text-sm gap-6 text-gray-600 mt-2'>
                                    <span><i className="fi flaticon-user"></i> By <strong>{author}</strong></span>
                                    <span><i className="fi flaticon-comment-white-oval-bubble"></i> {comment} Comments</span>
                                    <span><i className="fi flaticon-calendar"></i> {create_at}</span>

                                </div>

                                {/* title */}
                                <h2 className='text-2xl font-bold'>
                                    {title}
                                </h2>

                                {/* description */}
                                <p className='text-gray-700 leading-relaxed'>{description}</p>

                                {/* optional gallery   */}
                                {
                                    gallery.length > 0 && (
                                        <div className='gallery grid gird-cols-2 gap-4'>
                                            {
                                                gallery.map((img, i) => (
                                                    <Image
                                                        key={i}
                                                        src={img}
                                                        alt={`gallery-${i}`}
                                                        width={400}
                                                        height={300}
                                                        className='rounded-md object-cover w-full h-auto'
                                                    />
                                                ))
                                            }
                                        </div>
                                    )
                                }


                                {/* tags and share */}
                                <div className='tag-share mt-4 border-t pt-4'>
                                    {tags.length > 0 && (
                                        <div className='tag mb-2'>
                                            <span className='font-semibold'>
                                                Tags:

                                            </span>
                                            <ul className='inline-flex gap-3 text-blue-600'>
                                                {
                                                    tags.map((tag, i) => (
                                                        <li key={i}>
                                                            <Link href="/">
                                                                {tag}
                                                            </Link>

                                                        </li>
                                                    ))
                                                }

                                            </ul>

                                        </div>
                                    )}
                                    {socials.length > 0 && (
                                        <div className='tag-share-s2'>
                                            <span className='font-semibold'>
                                                Share:

                                            </span>
                                            <ul className='inline-flex gap-3 text-gray-700'>
                                                {socials.map((platform, i) => (
                                                    <li key={i}>
                                                        <Link href={platform.href}>
                                                            <i className={platform.icon} >

                                                            </i>
                                                        </Link>

                                                    </li>
                                                ))}

                                            </ul>
                                        </div>
                                    )}
                                </div>

                                {/* Author Box */}
                                <div className='author-box flex items-center space-x-4 border-t pt-4'>
                                    { authorImg && (
                                        <div className='w-16 h-16'>
                                            <Image 
                                                src={authorImg}
                                                alt="author"
                                                width={64}
                                                height={64}
                                                className='rounded-full object-cover'
                                            />

                                        </div>
                                    ) }

                                    <div>
                                        <p className='font-semibold'>

                                            Author: {author}

                                        </p>

                                        <p className='text-sm text-gray-600'>
                                            {authorBio}
                                        </p>
                                    </div>

                                </div>

                                {/* comments */}
                                <div className='comments-area mt-6 border-t pt-4'>
                                    <h3 className='text-lg font-semibold mb-3'>
                                        Comments ({comments.length})
                                    </h3>
                                    {
                                        comments.map((cmt, i) => (
                                            <div key={i} className='mb-4'>
                                                <p className='font-semibold'>{cmt.name} 
                                                    <span className='text-gray-500 text-sm'>
                                                    - {cmt.date}
                                                    </span>
                                                </p>
                                                <p className='text-sm'>
                                                    {cmt.message}
                                                </p>
                                            </div>
                                        ))
                                    }


                                    {/* Comment form */}
                                    <form onSubmit={SubmitHandler} className='space-y-3 mt-4'>
                                        <textarea placeholder='Write your comment...' 
                                        
                                        className='w-full border rounded p-2'
                                        value={commentMessage}
                                        onChange = {(e) => setCommentMessage(e.target.value)}
                                        />

                                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                                          
                                            <input type="text" placeholder="Name" className="border rounded p-2" 
                                            value={commentName}
                                            onChange={(e) => setCommentName(e.target.value)}
                                            />
                                            <input type="email" placeholder="Email" className="border rounded p-2" 
                                            value={commentEmail}
                                            onChange={(e) => setCommentEmail(e.target.value)}
                                            />


                                        </div>

                                        <button type="submit" className='bg-blue-600 text-white px-4 py-2 rounded'>
                                            Post Comment
                                        </button>


                                    </form>


                                </div>

                            </div>

                        </div>

                    </section>
                </Grid>
            </Dialog> 
        </>
    );
};

export default BlogSingle;