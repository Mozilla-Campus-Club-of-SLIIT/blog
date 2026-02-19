'use client';

import React from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import PostCard from '@/components/blog/PostCard';
import { BlogPost } from '@/types/blog';

const POSTS_PER_PAGE = 9;

interface PostsContentProps {
  posts: ReadonlyArray<BlogPost>;
}

export default function PostsContent({ posts }: Readonly<PostsContentProps>) {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Get current page from URL, default to 1
  const currentPageParam = searchParams.get('page');
  const currentPage = currentPageParam ? Number.parseInt(currentPageParam, 10) : 1;

  // Calculate pagination
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const postsToDisplay = posts.slice(startIndex, endIndex);

  if (posts.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">No posts published yet.</p>
        </div>
      </div>
    );
  }

  // Ensure valid page number
  if (currentPage < 1 || currentPage > totalPages) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">Page not found</p>
        </div>
      </div>
    );
  }

  const handlePageChange = (newPage: number) => {
    router.push(`/posts?page=${newPage}`);
  };

  return (
    <>
      {/* Posts Grid */}
      <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {postsToDisplay.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-16 flex items-center justify-center gap-4">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-400 shadow-sm transition-colors disabled:cursor-not-allowed hover:enabled:text-gray-700"
          >
            Previous
          </button>

          {/* Page Numbers */}
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`min-w-[40px] rounded-lg px-4 py-2 text-sm font-medium shadow-sm transition-all ${
                    pageNum === currentPage
                      ? 'bg-[#1a1a1a] text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {pageNum}
                </button>
              )
            )}
          </div>

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors disabled:cursor-not-allowed disabled:text-gray-400 hover:enabled:text-gray-900"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}
