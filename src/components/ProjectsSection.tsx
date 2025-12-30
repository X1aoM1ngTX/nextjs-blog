'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "ZeroCode 零码",
    description: "不用手写代码的应用生成网站，让开发更简单。通过可视化界面快速构建应用程序。",
    tags: ["Spring Boot", "Vue.js", "MySQL", "代码生成"],
    links: {
      live: "https://zerocode.game9hq.xyz",
      github: "https://github.com/X1aoM1ngTX/zerocode-backend"
    }
  },
  {
    id: 2,
    title: "Draw2Draw 智能协同云图库",
    description: "企业级智能协同云图库，支持团队协作绘图，让团队协作更高效。",
    tags: ["Spring Boot", "Vue.js", "协同编辑", "云存储"],
    links: {
      live: "https://picture.game9hq.xyz",
      github: "https://github.com/X1aoM1ngTX/draw2draw-backend"
    }
  }
]

export function ProjectsSection() {
  return (
    <section className="px-4 py-20 md:py-32 max-w-6xl mx-auto">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">我的项目</h2>
          <p className="text-xl text-muted-foreground">
            这里是我的一些作品！
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col hover:shadow-lg transition-all duration-300">
              <CardHeader className="flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  {project.links.live && (
                    <Button variant="default" size="sm" className="flex-1" asChild>
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        在线体验
                      </a>
                    </Button>
                  )}
                  {project.links.github && (
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        源码
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
