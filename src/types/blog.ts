export interface Author {
  id: string;
  name: string;
  avatarUrl: string;
  role: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  cardImage: string;
  featuredImage: string;
  publishedAt: string;
  readTime: string;
  author: Author;
  tags: string[];
}
