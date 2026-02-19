import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getPostSlugs } from "@/lib/posts";
import Badge from "@/components/ui/Badge";

interface PostPageProps {
  readonly params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white pb-16">
      <div className="mx-auto max-w-3xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-white">
          <div className="relative h-72 w-full bg-gray-100 sm:h-96">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="px-6 pb-10 pt-8 sm:px-10">
            <div className="mb-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  className="bg-[#EDF2F7] text-gray-600 px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {post.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Image
                  src={post.author.avatarUrl}
                  alt={post.author.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div className="text-gray-700">
                  <p className="font-semibold">{post.author.name}</p>
                  <p className="text-xs text-gray-500">{post.author.role}</p>
                </div>
              </div>
              <span>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span>{post.readTime}</span>
            </div>

            <div className="article-content mt-8">
              <MDXRemote source={post.content} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
