import fs from "fs";
import path from "path";
import Link from "next/link";
import { format } from "date-fns";
import { zhCN } from "date-fns/locale";

const POSTS_DIR = path.join(process.cwd(), "src/content/posts");

interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

function getPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) {
    return [];
  }

  const files = fs.readdirSync(POSTS_DIR).filter((file) => file.endsWith(".md"));

  const posts = files.map((filename) => {
    const filePath = path.join(POSTS_DIR, filename);
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

    return {
      slug: filename.replace(".md", ""),
      title: frontmatter.title || "未命名文章",
      date: frontmatter.date || "",
      excerpt: frontmatter.excerpt || "",
    };
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">博客文章</h1>

        {posts.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <p className="text-lg">还没有文章</p>
            <p className="text-sm mt-2">在 src/content/posts/ 目录下创建 .md 文件来添加文章</p>
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="border rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-semibold mb-2 hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                </Link>
                {post.date && (
                  <p className="text-sm text-muted-foreground mb-3">
                    {format(new Date(post.date), "PPP", { locale: zhCN })}
                  </p>
                )}
                {post.excerpt && (
                  <p className="text-muted-foreground">{post.excerpt}</p>
                )}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block mt-4 text-primary hover:underline"
                >
                  阅读更多 →
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
