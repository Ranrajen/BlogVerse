import type { Post } from "../types/Post";

export const dummyPosts: Post[] = [
  {
    id: "1",
    title: "Welcome to BlogVerse",
    content:
      "This is the first post of BlogVerse. Soon you'll be able to create, edit and delete posts.",
    category: "General",
    tags: ["Welcome", "React"],
    author: "Rajen",
    createdAt: "05 Jul 2026",
    updatedAt: "05 Jul 2026",
  },
  {
    id: "2",
    title: "Learning React Components",
    content:
      "Components help us split the UI into reusable pieces. Each component has one responsibility.",
    category: "React",
    tags: ["React", "Components"],
    author: "Rajen",
    createdAt: "05 Jul 2026",
    updatedAt: "05 Jul 2026",
  },
  {
    id: "3",
    title: "Why TypeScript?",
    content:
      "TypeScript helps us write safer and more maintainable applications.",
    category: "TypeScript",
    tags: ["TypeScript"],
    author: "Rajen",
    createdAt: "05 Jul 2026",
    updatedAt: "05 Jul 2026",
  },
];