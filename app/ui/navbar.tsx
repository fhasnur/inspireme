import React from 'react';
import Container from '@/app/ui/container';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Container>
        <div className="mx-auto max-w-screen-12xl py-4 flex justify-between items-center">
          <Link href="/" className=" text-2xl font-bold tracking-tight">
            inspire.me
          </Link>
          <div className="space-x-8 text-base">
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </Container>
    </nav>
  );
};