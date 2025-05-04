import React, {useState, useEffect} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BlogSingle from '../BlogSingle/page';
import Link from 'next/link';
import Image from 'next/image';



const BlogSection = () => {
   const [blogs, setBlogs] = useState([]);
   const [open, setOpen] = useState(false);
   const [state, setState] = useState({});
   const [number, setCount] = useState(3);
   const [buttonActive, setButtonState] = useState(false);

   const handleClose = () => {
    setOpen(false);
   };

   const handleClickOpen = (item) => {
    setOpen(true);
    setState(item);
   };

   useEffect(() => {
    async function fetchBlogs() {
        try {
            const res = await fetch ('/api/blogs');
            const data = await res.json();
            setBlogs(data);
        } catch (error) {
            console.error('Failed to fetch blogs', error);
        }
    }
    fetchBlogs();
   }, []);

    return (
    <section className='container mx-auto'>
        <div className='tp-blog-section section-padding' id="blog">
            <div className='container'>
                <div className='tp-section-title'>
                    <span>Latest Blog</span>
                    <h2>My blogs</h2>

                </div>
                <div className='tp-blog-items'>
                    <div className='flex flex-wrap'>
                        {blogs.slice(0, number).map((blog, index) => (
                            <div className="w-full md:w-1/2 lg:w-1/3" key={index}>
                                <div className='tp-blog-item'>
                                    <div className='tp-blog-item'>
                                        <div className='tp-blog-img'>
                                            {blog.screens && (
                                                <Image 
                                                    src={blog.screens}
                                                    alt={blog.title}
                                                    width={400}
                                                    height={300}
                                                    className='w-full h-auto object-cover'
                                                />

                                            )}
                                            
                                            <div className='thumb'>{blog.thumb}</div>
                                        </div>
                                        <div className='tp-blog-content'>
                                            <ul>
                                                <li>{blog.create_at}</li>
                                                <li>
                                                    By {" "}
                                                    <button onClick={() => handleClickOpen(blog)} className='text-red-500 underline'>
                                                        {blog.author}
                                                    </button>
                                                </li>     
                                            </ul>
                                            <h2 onClick={() => handleClickOpen(blog)}>{blog.title}</h2>
                                            <p>{blog.description}</p>
                                        </div>
                                    </div>
                                </div>

                    </div>
                        ))}

                    

                    </div>
                    {blogs.length > number && (<div className={`sec-title-btn text-center mt-3 ${buttonActive ? "hidden": ""}`}>
                        <span onClick={() => setButtonState(!buttonActive)}>
                            <button className='theme-btn'  onClick={() => {
                                setCount(number + number);
                                setButtonState(true); // hide the button
                            }}
                            >
                                View All Blog
                            </button>
                        </span>
                    </div>)}
                    

                </div>

            </div>
            <div className='visible-rotate-text'>
                <h1>Latest Blog</h1>

            </div>
            <BlogSingle 
  open={open} 
  onClose={handleClose} 
  blogId={state._id} 
  title={state.title}
  bImg={state.bImg}
  description={state.description}
  create_at={state.create_at}
  author={state.author}
  authorImg={state.authorImg}
  authorBio={state.authorBio}
  gallery={state.gallery}
  tags={state.tags}
  socials={state.socials}
  comment={state.comment}
  comments={state.comments}
/>


        </div>
    </section>
    );
    
}

export default BlogSection;