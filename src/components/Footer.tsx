'use client'

import { Github, Mail, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <footer className="border-t bg-muted/50 mt-auto">
      <div className="px-4 py-12 max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* 个人简介 */}
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold">小茗同学 👋</h3>
            <p className="text-muted-foreground">全栈开发者 | Java | Vue.js | 学习爱好者</p>
            <p className="text-sm text-muted-foreground">专注于构建健壮的应用程序</p>
          </div>

          {/* 联系方式 */}
          <div className="flex items-center gap-6">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label="Toggle theme"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            )}

            <a
              href="mailto:qianye_poem@qq.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/X1aoM1ngTX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>

          {/* 版权信息 */}
          <div className="text-sm text-muted-foreground text-center">
            © {currentYear} 小茗同学. 持续学习，不断成长！🔥
          </div>
          {/* 备案信息 */}
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground text-center hover:text-foreground transition-colors"
          >
            粤ICP备2025471762号-1
          </a>
        </div>
      </div>
    </footer>
  )
}
