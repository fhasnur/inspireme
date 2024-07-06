import React from 'react';
import Container from '@/app/ui/container';
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function RecentPost() {
  return (
    <section className="bg-slate-50 p-16">
      <Container>
        <div className="mx-auto border-1">
          <p className="text-lg mb-10 font-semibold tracking-tight leading-normal">
            Recent Post
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="leading-normal space-y-4">
              <a href="#" className="text-2xl font-bold tracking-tight leading-normal hover:border-b-2 hover:border-gray-400">
                His mother had always taught him
              </a>
              <p className="line-clamp-2">
                His mother had always taught him not to ever think of himself as better than others...
              </p>
              <div className="flex space-x-2">
                <Badge variant="secondary">history</Badge>
                <Badge variant="secondary">american</Badge>
                <Badge variant="secondary">crime</Badge>
              </div>
            </div>
            <div className="leading-normal space-y-4">
              <h1 className="text-2xl font-bold tracking-tight leading-normal">
                A great way to start the day
              </h1>
              <p className="line-clamp-2">His mother had always taught him not to ever think of himself as better than others. He  tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.</p>
              <div className="flex space-x-2">
                <Badge variant="secondary">history</Badge>
                <Badge variant="secondary">american</Badge>
                <Badge variant="secondary">crime</Badge>
              </div>
            </div>
            <div className="leading-normal space-y-4">
              <h1 className="text-2xl font-bold tracking-tight leading-normal">
                The beauty of nature
              </h1>
              <p className="line-clamp-2">Walking through the forest, you can see all sorts of wildlife and plants...</p>
              <div className="flex space-x-2">
                <Badge variant="secondary">history</Badge>
                <Badge variant="secondary">american</Badge>
                <Badge variant="secondary">crime</Badge>
              </div>
            </div>
            <div className="leading-normal space-y-4">
              <h1 className="text-2xl font-bold tracking-tight leading-normal">
                The joy of reading
              </h1>
              <p className="line-clamp-2">Books can transport you to different worlds and introduce you to new ideas...</p>
              <div className="flex space-x-2">
                <Badge variant="secondary" >history</Badge>
                <Badge variant="secondary">american</Badge>
                <Badge variant="secondary">crime</Badge>
              </div>
            </div>
            <div className="leading-normal space-y-4">
              <h1 className="text-2xl font-bold tracking-tight leading-normal">
                Cooking at home
              </h1>
              <p className="line-clamp-2">Making your own meals at home can be a fun and rewarding experience...</p>
              <div className="flex space-x-2">
                <Badge variant="secondary">history</Badge>
                <Badge variant="secondary">american</Badge>
                <Badge variant="secondary">crime</Badge>
              </div>
            </div>
            <div className="leading-normal space-y-4">
              <h1 className="text-2xl font-bold tracking-tight leading-normal">
                Exercise for a healthy life
              </h1>
              <p className="line-clamp-2">Regular exercise can help improve your physical and mental health...</p>
              <div className="flex space-x-2">
                <Badge variant="secondary">history</Badge>
                <Badge variant="secondary">american</Badge>
                <Badge variant="secondary">crime</Badge>
              </div>
            </div>
          </div>
        </div>
        <Pagination className="mt-10">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </Container>
    </section>
  );
}
