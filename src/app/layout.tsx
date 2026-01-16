import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "小茗同学の小窝",
  description: "全栈开发者的个人博客，分享技术文章和项目经验。",
  keywords: ["个人博客", "全栈开发", "Java", "Vue.js", "TypeScript"],
  authors: [{ name: "X1aoM1ngTX" }],
  icons: "/icon.png",
  openGraph: {
    title: "小茗同学の小窝",
    description: "小茗同学的个人博客，分享技术文章和项目经验。",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "小茗同学の小窝",
    description: "小茗同学的个人博客，分享技术文章和项目经验。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="antialiased bg-background text-foreground"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
