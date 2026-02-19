import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { BlogPost } from "@/types/blog";

export interface BlogPostWithContent extends BlogPost {
  content: string;
}

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

function readPostFile(slug: string) {
  const fullPath = path.join(POSTS_DIR, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const coverImage = String(data.coverImage ?? data.featuredImage ?? data.cardImage ?? "/images/placeholder.png");
  const cardImage = String(data.cardImage ?? coverImage);
  const featuredImage = String(data.featuredImage ?? coverImage);

  const post: BlogPost = {
    id: String(data.id ?? slug),
    slug,
    title: String(data.title ?? "Untitled"),
    excerpt: String(data.excerpt ?? ""),
    coverImage,
    cardImage,
    featuredImage,
    publishedAt: String(data.publishedAt ?? ""),
    readTime: String(data.readTime ?? ""),
    author: {
      id: String(data.author?.id ?? slug),
      name: String(data.author?.name ?? "Unknown Author"),
      avatarUrl: String(data.author?.avatarUrl ?? "/images/avatars/default.png"),
      role: String(data.author?.role ?? ""),
    },
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
  };

  return { post, content };
}

export function getPostSlugs() {
  if (!fs.existsSync(POSTS_DIR)) {
    return [] as string[];
  }

  return fs
    .readdirSync(POSTS_DIR)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => fileName.replace(/\.mdx$/, ""));
}

export function getAllPosts() {
  const slugs = getPostSlugs();

  const posts = slugs.map((slug) => readPostFile(slug).post);

  return posts.sort((a, b) => {
    const aTime = Date.parse(a.publishedAt) || 0;
    const bTime = Date.parse(b.publishedAt) || 0;
    return bTime - aTime;
  });
}

export function getPostBySlug(slug: string) {
  if (!fs.existsSync(POSTS_DIR)) {
    return null;
  }

  const fullPath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const { post, content } = readPostFile(slug);
  return { ...post, content } satisfies BlogPostWithContent;
}
