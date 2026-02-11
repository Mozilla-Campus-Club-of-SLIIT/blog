import { BlogPost } from "@/types/blog";

export const MOCK_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "java-and-its-benefits-compared-to-other-programming-languages",
    title: "Java and it's benefits compared to other programming languages",
    excerpt:
      "Java is one of the most used and popular programming languages in the world, invented by Sun Microsystems back in 1995. Discover the key benefits of Java compared to other programming languages: ease of learning, object-oriented programming, inexpensiveness, stability, and the ability to build numerous apps and services.",
    coverImage: "/images/hero-java.png",
    publishedAt: "2024-07-17",
    readTime: "2 min read",
    author: {
      id: "charuka-wanigasinghe",
      name: "Charuka Wanigasinghe",
      avatarUrl: "/images/avatars/charuka.png",
      role: "Intern at Mountain Solutions",
    },
    tags: ["Java", "Programming Languages"],
  },
  {
    id: "2",
    slug: "a-beginners-guide-to-mastering-apis-with-postman-and-httpie",
    title: "A Beginner's Guide to Mastering APIs with Postman and HTTPie",
    excerpt:
      "APIs power most of the apps we use every day, from logging in with Google to checking the weather or ordering food online. But for beginners, APIs can feel like a mysterious black box. That's where API testing tools come in. They let you explore, send requests, and understand responses without diving into complex code. Two of the most popular tools today are Postman and the newer HTTPie.",
    coverImage: "/images/api-tools.png",
    publishedAt: "2025-09-30",
    readTime: "5 min read",
    author: {
      id: "janitha-gamage",
      name: "Janitha Gamage",
      avatarUrl: "/images/avatars/janitha.png",
      role: "Software Engineer",
    },
    tags: ["APIs", "Postman", "HTTPie"],
  },
  {
    id: "3",
    slug: "practical-devops-playbook-for-deploying-academic-projects",
    title: "Practical DevOps Playbook for Deploying Academic Projects",
    excerpt:
      "University projects usually begin with tons of ideas and excitement. But as the deadline approaches, you may hear, 'Wait, it only works on my laptop!' That's where DevOps comes in, not as a fancy word, but as a practical approach to make your academic projects more reliable, scalable, and production ready.",
    coverImage: "/images/devops-playbook.png",
    publishedAt: "2025-10-31",
    readTime: "5 min read",
    author: {
      id: "sadeesha-perera",
      name: "Sadeesha Perera",
      avatarUrl: "/images/avatars/sadeesha.png",
      role: "President at SLIIT Mozilla",
    },
    tags: ["DevOps", "CI/CD", "Docker", "Academic Projects"],
  },
  {
    id: "4",
    slug: "top-5-cyber-threats-every-university-student-should-know",
    title: "Top 5 Cyber Threats Every University Student Should Know",
    excerpt:
      "As a university student who spends a lot of time online, I've noticed some common risks that can affect anyone. Based on my experience and observations, here are the top five cyber threats students should be aware of, along with simple tips to stay safe.",
    coverImage: "/images/cyber-threats.png",
    publishedAt: "2025-08-28",
    readTime: "6 min read",
    author: {
      id: "heshan-thenura",
      name: "Heshan Thenura",
      avatarUrl: "/images/avatars/heshan.png",
      role: "Editorial Member at SLIIT Mozilla",
    },
    tags: ["Cybersecurity", "Student Safety", "OSINT"],
  },
  {
    id: "5",
    slug: "the-new-ui-ux-era-built-on-open-source-ai-and-design-tokens",
    title: "The New UI/UX Era Built on Open-Source AI and Design Tokens",
    excerpt:
      "The Moment I Realized Design Was Becoming Intelligent. A few months ago, while working on a demo interface, I tried switching a simple theme: just one color token. To my surprise, half the UI lost structure, spacing collapsed, typography didn't scale, and contrast warnings popped everywhere. With open-source AI, design tokens, and browser-AI models, UI/UX engineering is evolving from static styling to dynamic, semantic, and user-aware experiences.",
    coverImage: "/images/ui-ux-design.png",
    publishedAt: "2025-12-29",
    readTime: "4 min read",
    author: {
      id: "gayathri-priya",
      name: "Gayathri Priya Krishnaram",
      avatarUrl: "/images/avatars/gayathri.png",
      role: "Editorial Member at SLIIT Mozilla",
    },
    tags: ["UI/UX", "Design Tokens", "Open Source AI"],
  },
];
