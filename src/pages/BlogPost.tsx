import { useParams, Link } from 'react-router-dom';
import { getPostBySlug } from '@/lib/posts';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import PageTransition from '@/components/PageTransition';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <PageTransition>
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Post Not Found
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                The blog post you're looking for doesn't exist or has been moved.
              </p>
              <Link to="/blog">
                <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blog
                </button>
              </Link>
            </div>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Link to="/blog">
              <button className="flex items-center gap-2 px-3 py-2 text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </button>
            </Link>
          </div>

          {/* Article Header */}
          <article>
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-6 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </header>

            {/* Article Content */}
            <div className="bg-card rounded-lg border border-border p-8">
              <div 
                className="prose prose-slate max-w-none text-foreground leading-relaxed"
                style={{ whiteSpace: 'pre-line' }}
              >
                {post.content}
              </div>
            </div>

            {/* Article Footer */}
            <footer className="mt-12 pt-8 border-t">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Written by <span className="font-medium text-foreground">{post.author}</span>
                  </p>
                </div>
                <Link to="/blog">
                  <button className="flex items-center gap-2 px-3 py-2 border border-border rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Blog
                  </button>
                </Link>
              </div>
            </footer>
          </article>
        </div>
      </div>
    </PageTransition>
  );
};

export default BlogPost;