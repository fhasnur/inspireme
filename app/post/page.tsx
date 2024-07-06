import React from 'react';
import Navbar from '@/app/ui/navbar';
import PostDetail from '@/app/ui/post/post-detail';
import Footer from '@/app/ui/footer';

export default function Post() {
  return (
    <>
      <Navbar />
      <PostDetail />
      <Footer />
    </>
  );
}
