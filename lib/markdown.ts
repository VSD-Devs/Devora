import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'content/blog');

interface PostMeta {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  author: string;
  coverImage: string;
  readingTime: string;
  tags: string[];
}

interface Post extends PostMeta {
  content: string;
  contentHtml: string;
}

export async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkHtml, { sanitize: false })
    .process(markdown);
  return result.toString();
}

export function getPostSlugs() {
  try {
    return fs.readdirSync(postsDirectory).filter(file => file.endsWith('.md'));
  } catch (e) {
    console.error('Error reading post directory:', e);
    return [];
  }
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, `${realSlug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug: realSlug,
      title: data.title || '',
      date: data.date || '',
      excerpt: data.excerpt || '',
      author: data.author || 'Devora Team',
      coverImage: data.coverImage || '/blog/default-cover.jpg',
      readingTime: data.readingTime || calculateReadingTime(content),
      tags: data.tags || [],
      content,
      contentHtml: ''
    };
  } catch (e) {
    console.error(`Error getting post by slug ${slug}:`, e);
    return null;
  }
}

export async function getPostWithHtml(slug: string): Promise<Post | null> {
  const post = getPostBySlug(slug);
  
  if (!post) {
    return null;
  }
  
  const contentHtml = await markdownToHtml(post.content);
  return { ...post, contentHtml };
}

export function getAllPosts(): PostMeta[] {
  try {
    const slugs = getPostSlugs();
    const posts = slugs
      .map((slug) => getPostBySlug(slug))
      .filter((post): post is Post => post !== null)
      .sort((post1, post2) => (new Date(post2.date) > new Date(post1.date) ? 1 : -1));
    
    return posts.map(({ slug, title, date, excerpt, author, coverImage, readingTime, tags }) => ({
      slug,
      title,
      date,
      excerpt,
      author,
      coverImage,
      readingTime, 
      tags
    }));
  } catch (e) {
    console.error('Error getting all posts:', e);
    return [];
  }
}

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
} 