import React from 'react';
import Container from '@/app/ui/container';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"

export default function PostDetail() {
  return (
    <section className="flex w-3/4 my-16">
      <Container>
        <div className="leading-loose space-y-4">
          <h1 className="text-4xl font-bold tracking-tight leading-normal">
            His mother had always taught him
          </h1>
          <p className="w-1/2">
            His mother had always taught him not to ever think of himself as better than others. He tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.
          </p>
          <div className="mx-auto space-x-2">
            <Badge variant="secondary">history</Badge>
            <Badge variant="secondary">american</Badge>
            <Badge variant="secondary">crime</Badge>
          </div>
        </div>
        <div className="mt-16">
          <h4 className="text-base font-semibold tracking-tight leading-normal">
            Comments
          </h4>
          <div className="space-y-4 mt-5 mb-5">
            <div>
              <p className="text-sm font-semibold">User 1</p>
              <p className="text-sm">This is a comment from user 1.</p>
            </div>
            <div>
              <p className="text-sm font-semibold">User 2</p>
              <p className="text-sm">This is a comment from user 2.</p>
            </div>
            <div>
              <p className="text-sm font-semibold">User 3</p>
              <p className="text-sm">This is a comment from user 3.</p>
            </div>
          </div>
        </div>
        <Button
          className="text-xs"
          variant="outline"
        >
          Load More
        </Button>
      </Container>
    </section >
  );
}