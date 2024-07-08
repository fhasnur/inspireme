'use client';

import React, { useEffect, useState } from 'react';
import Container from '@/app/ui/container';
import { Badge } from '@/components/ui/badge';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
}

const POSTS_PER_PAGE = 6;

export default function RecentPost() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data.posts);
      } catch (err) {
        setError('Failed to fetch posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="flex justify-center h-screen">
        <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) return <p>{error}</p>;

  return (
    <section className="bg-slate-50 p-16">
      <Container>
        <div className="mx-auto border-1">
          <p className="text-lg mb-10 font-semibold tracking-tight leading-normal">
            Recent Post
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {currentPosts.map((post) => (
              <div key={post.id} className="leading-normal space-y-4">
                <a href="#" className="text-2xl font-bold tracking-tight leading-normal hover:border-b-2 hover:border-gray-400">
                  {post.title}
                </a>
                <p className="line-clamp-2">
                  {post.body}
                </p>
                <div className="flex space-x-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Pagination className="mt-10">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) paginate(currentPage - 1);
                }}
              />
            </PaginationItem>
            {Array.from({ length: Math.ceil(posts.length / POSTS_PER_PAGE) }, (_, i) => (
              <PaginationItem key={i + 1}>
                <PaginationLink
                  href="#"
                  isActive={i + 1 === currentPage}
                  onClick={(e) => {
                    e.preventDefault();
                    paginate(i + 1);
                  }}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < Math.ceil(posts.length / POSTS_PER_PAGE)) paginate(currentPage + 1);
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </Container>
    </section>
  );
}
