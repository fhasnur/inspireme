import React from 'react';
import Container from '@/app/ui/container';

export default function Navbar() {
  return (
    <nav>
      <Container>
        <div className="mx-auto max-w-screen-12xl py-4 flex justify-between items-center">
          <a href="#" className=" text-2xl font-bold tracking-tight">inspire.me</a>
          <div className="space-x-8 text-base">
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </Container>
    </nav>
  );
};