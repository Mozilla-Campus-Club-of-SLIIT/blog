import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/types/blog";
import Badge from "@/components/ui/Badge";

interface PostCardProps {
  post: BlogPost;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-md border border-gray-100">
      
      {/* 1. White Border Frame: 
          'p-4' creates the white frame. 
      */}
      <div className="relative w-full p-4">
        {/* 2. Custom Aspect Ratio:
            Changed to 'aspect-[1080/1241]' to match your specific image dimensions perfectly.
            This ensures the entire 1080x1241 image is visible without cropping.
        */}
        <div className="relative aspect-[1080/1241] w-full overflow-hidden rounded-xl bg-gray-50">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            /* 'object-contain' is the safest choice for text-heavy banners 
               to ensure every pixel is shown. */
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>

      {/* 3. Content Alignment:
          'px-4' matches the 'p-4' above so the text and image edges align.
      */}
      <div className="flex h-full flex-col px-4 pb-5 pt-0">
        
        {/* Author Row */}
        <div className="mb-3 flex items-center gap-2">
          <div className="h-6 w-6 overflow-hidden rounded-full border border-gray-100">
            <Image
              src={post.author.avatarUrl}
              alt={post.author.name}
              width={24}
              height={24}
              className="object-cover"
            />
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
            <span className="text-gray-800">{post.author.name}</span>
            <span>•</span>
            <span>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>
        </div>

        {/* Title */}
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-lg font-bold leading-tight tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-[#D45D29]">
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-500">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          {post.tags.map((tag) => (
            <Badge 
              key={tag} 
              className="bg-[#EDF2F7] text-gray-600 px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  );
}