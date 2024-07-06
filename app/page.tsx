import React from 'react';
import Navbar from '@/app/ui/home/navbar';
import Header from '@/app/ui/home/header';
import RecentPost from '@/app/ui/home/recent-post';
import Footer from '@/app/ui/home/footer';

export default function Home() {
  return (
    <main className="w-full justify-between items-center">
      <Navbar />
      <Header />
      <RecentPost />
      <Footer />
    </main>
  );
} 
