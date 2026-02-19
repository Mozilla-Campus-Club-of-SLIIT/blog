import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/types/blog";
import Badge from "@/components/ui/Badge";

interface FeaturedCardProps {
  post: Readonly<BlogPost>;
}

export default function FeaturedCard({ post }: Readonly<FeaturedCardProps>) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-md border border-gray-100">
      
      {/* 1. White Border Frame: Created by 'p-5' 
          This pushes the image in, creating the frame effect.
      */}
      {post.featuredImage && (
        <div className="relative w-full p-5">
          <div className="relative aspect-[2.4/1] w-full overflow-hidden rounded-xl"> 
            {/* rounded-xl here matches the inner rounding of the design */}
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
        </div>
      )}

      {/* Content Container: 
          'px-5' matches the 'p-5' above to ensure the tag and title 
          align vertically with the image edge.
      */}
      <div className="px-5 pb-6 pt-0">
        
        {/* Row 1: Badge (Left) | Author Name + Avatar (Right) */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} className="bg-[#E2E8F0] text-gray-700 px-3 py-1 rounded-md text-xs font-semibold">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Author Section - Re-added as requested */}
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium text-gray-700">
              {post.author.name}
            </p>
            {post.author.avatarUrl && (
              <div className="h-7 w-7 overflow-hidden rounded-full border border-gray-100">
                <Image
                  src={post.author.avatarUrl}
                  alt={post.author.name}
                  width={28}
                  height={28}
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>

        {/* Row 2: Title */}
        <Link href={`/posts/${post.slug}`}>
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-[#D45D29] transition-colors duration-300 hover:text-[#B34B1E] md:text-3xl">
            {post.title}
          </h2>
        </Link>

        {/* Row 3: Excerpt */}
        <p className="mb-6 text-sm md:text-base leading-relaxed text-gray-500 line-clamp-2">
          {post.excerpt}
        </p>

        {/* Row 4: Footer */}
        <div className="flex items-center justify-between border-t border-gray-50 pt-4">
          <div className="flex items-center gap-4 text-xs font-medium text-gray-400">
            <div className="flex items-center gap-1">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{post.readTime}</span>
            </div>
          </div>

          <Link
            href={`/posts/${post.slug}`}
            className="flex items-center gap-1 text-sm font-bold text-[#D45D29] transition-colors hover:text-[#B34B1E]"
          >
            Read more
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}