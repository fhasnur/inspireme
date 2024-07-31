import React from 'react';
import Container from '@/app/ui/container';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaThumbsUp, FaEye } from 'react-icons/fa';

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

interface PostDetailProps {
  post: Post;
  comments: Comments[];
}

const PostDetail: React.FC<PostDetailProps> = ({ post, comments }) => {
  return (
    <section className="flex w-3/4 my-16">
      <Container>
        <div className="leading-loose space-y-4">
          <h1 className="text-4xl font-bold tracking-tight leading-normal">
            {post.title}
          </h1>
          <div className="flex items-center space-x-4 text-gray-600 mt-2">
            <div className="flex items-center space-x-1">
              <FaThumbsUp />
              <span>{post.reactions.likes}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaEye />
              <span>{post.views}</span>
            </div>
          </div>
          <p className="w-1/2">
            {post.body}
          </p>
          <div className="mx-auto space-x-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </div>
        <div className="mt-16">
          <h4 className="text-base font-semibold tracking-tight leading-normal">
            Comments
          </h4>
          <div className="space-y-4 mt-5 mb-5">
            {comments.map((comment) => (
              <div key={comment.id}>
                <p className="text-sm font-semibold">{comment.user.fullName}</p>
                <p className="text-sm">{comment.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PostDetail;
