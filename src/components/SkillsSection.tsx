'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

type Skill = {
  name: string
  icon: string
}

const skills: Record<string, Skill[]> = {
  backend: [
    { name: "Java", icon: "/skills-icons/java.svg" },
    { name: "Spring Boot", icon: "/skills-icons/spring.svg" },
    { name: "MyBatis Plus", icon: "/skills-icons/mybatis-plus.svg" },
    { name: "MySQL", icon: "/skills-icons/mysql.svg" },
    { name: "Redis", icon: "/skills-icons/redis.svg" }
  ],
  frontend: [
    { name: "Vue.js", icon: "/skills-icons/vue.png" },
    { name: "TypeScript", icon: "/skills-icons/typescript.svg" },
    { name: "CSS3", icon: "/skills-icons/css3.svg" },
    { name: "HTML5", icon: "/skills-icons/html5.svg" },
    { name: "Ant Design Vue", icon: "/skills-icons/antdesign.svg" }
  ],
  tools: [
    { name: "Git", icon: "/skills-icons/git.svg" },
    { name: "Maven", icon: "/skills-icons/maven.svg" },
    { name: "Nginx", icon: "/skills-icons/nginx.svg" },
    { name: "Linux", icon: "/skills-icons/linux.svg" },
    { name: "IntelliJ IDEA", icon: "/skills-icons/intellij.svg" },
    { name: "Cursor", icon: "/skills-icons/cursor.png" }
  ]
}

export function SkillsSection() {
  return (
    <section className="px-4 py-20 md:py-32 max-w-6xl mx-auto">
      <div className="space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">技术栈</h2>
          <p className="text-xl text-muted-foreground">
            我使用的技术和工具
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* 后端开发 */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <span className="text-2xl">⚙️</span>
                后端开发
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <Badge key={skill.name} variant="secondary" className="text-sm px-3 py-1 flex items-center gap-1">
                    <img src={skill.icon} alt={skill.name} className="w-4 h-4" />
                    <span>{skill.name}</span>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 前端开发 */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <span className="text-2xl">🎨</span>
                前端开发
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <Badge key={skill.name} variant="secondary" className="text-sm px-3 py-1 flex items-center gap-1">
                    <img src={skill.icon} alt={skill.name} className="w-4 h-4" />
                    <span>{skill.name}</span>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 工具与平台 */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <span className="text-2xl">🛠️</span>
                工具与平台
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <Badge key={skill.name} variant="secondary" className="text-sm px-3 py-1 flex items-center gap-1">
                    <img src={skill.icon} alt={skill.name} className="w-4 h-4" />
                    <span>{skill.name}</span>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
