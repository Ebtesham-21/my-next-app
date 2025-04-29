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
                                

                            </div>

                        </div>

                    </section>
                </Grid>
            </Dialog> 
        </>
    )
}