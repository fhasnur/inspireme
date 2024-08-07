'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/app/ui/navbar';
import Footer from '@/app/ui/footer';
import PostDetail from '@/app/ui/post/post-detail';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: {
    likes: number;
  };
  views: number;
}

interface Comments {
  id: number;
  body: string;
  user: {
    fullName: string;
  }
}

const PostPage: React.FC = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comments[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        try {
          const response = await fetch(`https://dummyjson.com/posts/${id}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setPost(data);
        } catch (err) {
          setError('Failed to fetch post');
        } finally {
          setLoading(false);
        }
      };

      const fetchComment = async () => {
        try {
          const response = await fetch(`https://dummyjson.com/comments/post/${id}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setComments(data.comments);
        } catch (err) {
          setError('Failed to fetch comments');
        }
      }

      fetchPost();
      fetchComment();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) <p>{error}</p>;

  if (!post) <p>No post found</p>;

  return (
    <>
      <Navbar />
      {post && <PostDetail post={post} comments={comments || []} />}
      <Footer />
    </>
  );
};

export default PostPage;
