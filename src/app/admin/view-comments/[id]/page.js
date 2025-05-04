'use client';

import {useEffect, useState} from 'react';
import {useParams} from 'next/navigation';

const ViewCommentsPage = () => {
    const {id} = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlog = async = () => {
            const res = await fetch(`/api/blogs/${id}`);
            const data = await res.json();
            setBlog(data);
        }; 
        fetchBlog();
    }, [id]);

    const handleDeleteComment = async (commentId) => {
        const res = await fetch('/api/blogs/deleteComment', {
            method: 'DELETE',
            body: JSON.stringify({blogId: id, commentId}),
        });

        if(res.ok) {
            alert('Comment deleted');
            setBlog((prev) => ({
                ...prev,
                comments: prev.comments.filter((c) => c._id !== commentId),
            }));
        } else {
            alert("Failed to delete comment");
        }
    };

    if(!blog)
        return <p>Loading...</p>

    return (
        <div>
            <h2 className='text-2xl font-bold mb-4'>
                {blog.title} - Comments
            </h2>
            {blog.comments.length === 0  && <p>No comments yet.</p>}
            {blog.comments.map((comment) => (
                <div key={comment._id} className='p-2 border mb-2 rounded'>
                    <p>
                        <strong>{comment.name}</strong> - {' '}
                        {new Date(comment.date).toLocaleDateString()}

                    </p>
                    <p>{comment.message}</p>
                    <button
                        onClick={() => handleDeleteComment(comment._id)}
                        className='text-red-600 hover:underline'
                    >
                        Delete
                    </button>
                </div>
            ))}

        </div>
    );

};

export default ViewCommentsPage;