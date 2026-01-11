'use client'

export function HeroSection() {
  return (
    <section className="px-4 py-20 md:py-32 max-w-4xl mx-auto">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          小茗同学 👋
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          全栈开发者 • Java • Vue.js • 学习爱好者 🔥
        </p>

        <div className="space-y-4 pt-4">
          <h2 className="text-2xl md:text-3xl font-semibold">你好！</h2>
          <p className="text-lg leading-relaxed">
            我是一名充满热情的全栈开发者，专注于使用 <strong className="text-primary">Java</strong> 后端和 <strong className="text-primary">Vue.js</strong> 前端构建健壮的应用程序。
          </p>
          <p className="text-lg leading-relaxed">
            这个数字花园记录了我在全栈开发世界中的学习历程、项目和见解。
          </p>
          <p className="text-lg leading-relaxed">
            持续学习，不断成长！
          </p>
        </div>

        <div className="space-y-4 pt-6">
          <h3 className="text-lg font-semibold">
            我的项目：
          </h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-3 bg-card border rounded-lg p-3 hover:shadow-md transition-shadow">
              <img src="/project/zerocode.png" alt="ZeroCode 零码" className="w-12 h-12 object-contain rounded-lg" />
              <div>
                <div className="font-semibold">🚀 ZeroCode 零码</div>
                <div className="text-sm text-muted-foreground">不用手写代码的应用生成网站</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-card border rounded-lg p-3 hover:shadow-md transition-shadow">
              <img src="/project/d2d-v2-1.png" alt="Draw2Draw" className="w-12 h-12 object-contain rounded-lg" />
              <div>
                <div className="font-semibold">🎨 Draw2Draw</div>
                <div className="text-sm text-muted-foreground">企业级智能协同云图库</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 pt-6">
          <a
            href="/blog"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            📝 查看博客
          </a>
          <a href="mailto:qianye_poem@qq.com" className="inline-flex items-center hover:text-foreground transition-colors text-muted-foreground">
            📧 联系我
          </a>
          <a href="https://github.com/X1aoM1ngTX" target="_blank" rel="noopener noreferrer" className="inline-flex items-center hover:text-foreground transition-colors text-muted-foreground">
            🔗 GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
