import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Link from "next/link";
import { format } from "date-fns";
import { zhCN } from "date-fns/locale";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

const POSTS_DIR = path.join(process.cwd(), "src/content/posts");

interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
}

function getPost(slug: string): Post | null {
  const filePath = path.join(POSTS_DIR, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const content = fs.readFileSync(filePath, "utf-8");

  // 解析 frontmatter
  const match = content.match(/^---\n([\s\S]+?)\n---/);
  const frontmatter: Record<string, string> = {};

  if (match) {
    match[1].split("\n").forEach((line) => {
      const [key, ...valueParts] = line.split(":");
      if (key && valueParts.length > 0) {
        frontmatter[key.trim()] = valueParts.join(":").trim();
      }
    });
  }

  // 移除 frontmatter，只保留正文
  const bodyContent = match ? content.replace(match[0], "") : content;

  return {
    slug,
    title: frontmatter.title || "未命名文章",
    date: frontmatter.date || "",
    content: bodyContent.trim(),
  };
}

export async function generateStaticParams() {
  if (!fs.existsSync(POSTS_DIR)) {
    return [];
  }

  const files = fs.readdirSync(POSTS_DIR).filter((file) => file.endsWith(".md"));
  return files.map((file) => ({
    slug: file.replace(".md", ""),
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link
          href="/blog"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8"
        >
          ← 返回文章列表
        </Link>

        <article>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          {post.date && (
            <p className="text-muted-foreground mb-8">
              {format(new Date(post.date), "PPP", { locale: zhCN })}
            </p>
          )}

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
}
