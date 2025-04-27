'use client';
import React from "react";
import { Dialog, Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const BlogSingle = ({ maxWidth = "md", open, onClose, title, bImg, create_at, author, comment, description }) => {
    return (
        <>
            <Dialog
                open={open}
                onClose={onClose}
                className="modalWrapper quickview-dialog"
                maxWidth={maxWidth}
            >
                <Grid className="modalBody modal-body relative bg-white p-4 rounded-lg">
                    <button className="modal-close absolute right-2 top-2 text-gray-700" onClick={onClose}>
                        <i className="fa fa-close"></i>
                    </button>

                    <section className="tp-blog-single-section">
                        <div className="container">
                            <div className="flex flex-wrap">
                                <div className="w-full">
                                    <div className="tp-blog-content space-y-4">
                                        <div className="post format-standard-image">
                                            {bImg && (
                                                <div className="entry-media">
                                                    <Image
                                                        src={bImg}
                                                        alt={title}
                                                        width={800}
                                                        height={500}
                                                        className="rounded-md w-full object-cover"
                                                    />
                                                </div>
                                            )}

                                            <div className="entry-meta flex space-x-4 text-sm text-gray-500 mt-2">
                                                <div>By <span className="font-semibold">{author}</span></div>
                                                <div>Comments {comment}</div>
                                                <div>{create_at}</div>
                                            </div>

                                            <h2 className="text-2xl font-bold mt-4">{title}</h2>

                                            {description && (
                                                <p className="mt-2 text-gray-700 leading-relaxed">{description}</p>
                                            )}
                                        </div>
                                    </div>
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
