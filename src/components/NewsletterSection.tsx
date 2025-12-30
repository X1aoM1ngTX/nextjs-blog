'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'

export function NewsletterSection() {
  return (
    <section className="px-4 py-20 md:py-32 max-w-4xl mx-auto">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">联系我</h2>
          <p className="text-xl text-muted-foreground">
            有任何问题或合作意向？欢迎联系我！
          </p>
        </div>

        <Card className="max-w-lg mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              发送邮件
            </CardTitle>
            <CardDescription>
              通过邮件与我联系，讨论技术交流或合作机会。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-muted rounded-lg text-center">
                <a
                  href="mailto:qianye_poem@qq.com"
                  className="text-lg font-semibold text-primary hover:underline"
                >
                  qianye_poem@qq.com
                </a>
              </div>
              <div className="text-sm text-muted-foreground text-center">
                或通过以下方式找到我：
              </div>
              <div className="flex justify-center gap-4">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://github.com/X1aoM1ngTX" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
