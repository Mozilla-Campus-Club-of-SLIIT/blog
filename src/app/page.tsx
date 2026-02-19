import FeaturedCard from "@/components/blog/FeaturedCard";
import PostCard from "@/components/blog/PostCard";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();
  const featuredPost = posts.find((post) => post.featuredImage);
  const recentPosts = posts.filter(
    (post) =>
      post.cardImage &&
      post.id !== featuredPost?.id
  ).slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Featured Story Section */}
        <section className="mb-16">
          <h1 className="mb-8 text-4xl font-bold tracking-tight text-[#D9622B]">
            Featured Story
          </h1>
          {featuredPost ? (
            <FeaturedCard post={featuredPost} />
          ) : (
            <p className="text-gray-600">No featured post available.</p>
          )}
        </section>

        {/* Recently Published Section */}
        <section className="mb-12">
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-[#D9622B]">
            Recently Published
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {recentPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        {/* Explore More Button Section */}
        <section className="flex justify-center">
          <Link
            href="/posts"
            className="mx-auto mt-12 flex items-center gap-2 rounded-full bg-orange-500 px-8 py-3 font-semibold text-white shadow-md transition-colors hover:bg-orange-600"
          >
            Explore More
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </section>
      </div>
    </div>
  );
}
