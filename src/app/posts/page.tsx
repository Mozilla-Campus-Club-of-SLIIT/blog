import React, { Suspense } from 'react';
import PostsContent from './posts-content';
import { getAllPosts } from '@/lib/posts';

export default function PostsPage() {
  const allPosts = getAllPosts();
  const posts = allPosts.filter((post) => post.cardImage);

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Title */}
        <div className="mb-28 text-center">
          <h1 className="text-5xl font-bold text-gray-900">
            Editor&apos;s Corner
          </h1>
        </div>

        {/* Posts Content with Suspense */}
        <Suspense fallback={<div className="text-center text-gray-600">Loading posts...</div>}>
          <PostsContent posts={posts} />
        </Suspense>
      </div>
    </main>
  );
}