import { Link } from 'react-router-dom';
import { getAllPosts } from '@/lib/posts';
import { Calendar, User, ArrowRight } from 'lucide-react';
import PageTransition from '@/components/PageTransition';

const BlogIndex = () => {
  const posts = getAllPosts();

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Developer Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on modern web development, React, TypeScript, and more.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid gap-8 md:gap-12">
            {posts.map((post) => (
              <div key={post.id} className="group hover:shadow-lg transition-all duration-300 bg-card rounded-lg border border-border p-6">
                <div className="mb-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    <Link to={`/blog/${post.slug}`} className="flex items-center justify-between">
                      {post.title}
                      <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                </div>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="text-center mt-16 p-8 bg-muted rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Want to stay updated?</h3>
            <p className="text-muted-foreground">
              Follow along for more insights on modern web development.
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default BlogIndex;