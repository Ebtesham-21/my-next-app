'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {Dialog, Grid} from '@mui/material';

const BlogSingle = ({
    open,
    onClose,
    maxWidth : 'md',
    title,
    bImg,
    description,
    create_at,
    author,
    authorImg,
    authorBio,
    gallery : [],
    tags : [],
    socials : [],
    comment: 0,
    comments: [],
}) => {
    const SubmitHandler = (e) => {
        e.preventDefault()
    };

    return (
        <>
           <Dialog 
            open={open}
            onClose={onClose}
            className='modalWrapper quickview-dialog'
            maxWidth={maxWidth}
           >
                <Grid className='modalBody modal-body relative bg-white p-6 rounded-lg'>
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
                                                        
                                                    </li>
                                                ))}

                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>

                    </section>
                </Grid>
            </Dialog> 
        </>
    )
}