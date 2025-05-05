'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog, Grid } from '@mui/material';

const BlogSingle = ({
  open,
  onClose,
  maxWidth = 'md',
  blogId,
  title,
  
  description,
  create_at,
  author,
  authorImg,
  authorBio,
  gallery = [],
  tags = [],
  socials = [],
  comment = 0,
  comments = [],
}) => {
  const [commentName, setCommentName] = useState('');
  const [commentEmail, setCommentEmail] = useState('');
  const [commentMessage, setCommentMessage] = useState('');

  const SubmitHandler = async (e) => {
    e.preventDefault();

    console.log('blogId:', blogId); // Log blogId for verification

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
          comment: commentMessage,
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
    console.log({
        blogId,
        name: commentName,
        email: commentEmail,
        comment: commentMessage,
      });
      
  };

  return (
    <Dialog open={open} onClose={onClose} className="modalWrapper quickview-dialog" maxWidth={maxWidth}>
      <Grid className="modalBody modal-body">
        <button className="modal-close" onClick={onClose}>
          <i className="fa fa-close"></i>
        </button>

        <section className="tp-blog-single-section">
          <div className="container">
            <div className="tp-blog-content">
              <div className="post format-standard-image">
              {gallery.length > 0 && (
              <div className='entry-media'>
                <Image
                  src={gallery[0]}
                  alt={title}
                  width={800}
                  height={400}
                  className='w-full h-auto rounded-md object-cover'
                />
              </div>
          )}


                <div className="entry-meta">
                  <ul>
                    <li><i className="fi flaticon-user"></i> By <Link href="/">{author}</Link></li>
                    <li><i className="fi flaticon-comment-white-oval-bubble"></i> Comments {comment}</li>
                    <li><i className="fi flaticon-calendar"></i> {create_at}</li>
                  </ul>
                </div>

                <h2>{title}</h2>
                <p>{description}</p>

                {gallery.length > 0 && (
                  <div className="gallery">
                    {gallery.map((img, i) => (
                      <div key={i}>
                        <Image
                          src={img}
                          alt={`gallery-${i}`}
                          width={400}
                          height={300}
                          className="rounded-md object-cover w-full h-auto"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <div className="author-box">
                  <div className="author-avatar">
                    {authorImg && (
                      <Link href="/" target="_blank">
                        <Image
                          src={authorImg}
                          alt="author"
                          width={64}
                          height={64}
                          className="rounded-full object-cover"
                        />
                      </Link>
                    )}
                  </div>

                  <div className="author-content">
                    <Link href="/" className="author-name">Author: {author}</Link>
                    <p>{authorBio}</p>
                  </div>
                </div>

                <div className="comments-area mt-6 border-t pt-4">
                  <h3 className="text-lg font-semibold mb-3">Comments ({comments.length})</h3>
                  {comments.map((cmt, i) => (
                    <div key={i} className="mb-4">
                      <p className="font-semibold">{cmt.name}<span className="text-gray-500 text-sm"> - {cmt.date}</span></p>
                      <p className="text-sm">{cmt.message}</p>
                    </div>
                  ))}

                  <form onSubmit={SubmitHandler} className="space-y-3 mt-4">
                    <textarea
                      placeholder="Write your comment..."
                      className="w-full border rounded p-2"
                      value={commentMessage}
                      onChange={(e) => setCommentMessage(e.target.value)}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Name"
                        className="border rounded p-2"
                        value={commentName}
                        onChange={(e) => setCommentName(e.target.value)}
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="border rounded p-2"
                        value={commentEmail}
                        onChange={(e) => setCommentEmail(e.target.value)}
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-4 py-2 rounded"
                    >
                      Post Comment
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Grid>
    </Dialog>
  );
};

export default BlogSingle;
