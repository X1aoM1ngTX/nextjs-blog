'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: "Building a Discord Bot with 500K MAU",
    description: "Learn how I scaled Truth or Dare bot to serve millions of users across Discord communities.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Engineering",
    featured: true
  },
  {
    id: 2,
    title: "Video Arena: Evaluating Generative Video Models",
    description: "Deep dive into building the largest preference evaluation system for video AI models.",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "AI/ML",
    featured: true
  },
  {
    id: 3,
    title: "Bug Bounty: Finding Security Vulnerabilities",
    description: "My journey discovering and reporting a critical security issue that earned a $100K bounty.",
    date: "2023-12-20",
    readTime: "6 min read",
    category: "Security"
  },
  {
    id: 4,
    title: "Organizing TreeHacks: Behind the Scenes",
    description: "What it takes to run one of Stanford's largest hackathons as co-director.",
    date: "2023-11-15",
    readTime: "10 min read",
    category: "Leadership"
  }
]

export function BlogSection() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <section className="px-4 py-20 md:py-32 max-w-6xl mx-auto">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Blog</h2>
          <p className="text-xl text-muted-foreground">
            Here's some writing about cool things I've done!
          </p>
        </div>

        <div className="space-y-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Featured Posts</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      {post.featured && <Badge variant="default">Featured</Badge>}
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold">More Posts</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {regularPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-md transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Read
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
