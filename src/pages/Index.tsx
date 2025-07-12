import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Code, Users, Zap, ArrowRight } from 'lucide-react';
import PageTransition from '@/components/PageTransition';

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Rich Content",
      description: "Discover in-depth tutorials and insights on modern web development."
    },
    {
      icon: Code,
      title: "Code Examples",
      description: "Practical examples and code snippets you can use in your projects."
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with fellow developers and share your experiences."
    },
    {
      icon: Zap,
      title: "Stay Updated",
      description: "Keep up with the latest trends and technologies in web development."
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Welcome to
              <span className="text-primary block">DevBlog</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Your go-to source for modern web development insights, tutorials, and best practices. 
              From React fundamentals to advanced TypeScript patterns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/blog">
                <Button size="lg" className="flex items-center gap-2">
                  Explore Blog
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg">
                  Admin Login
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Why Choose DevBlog?
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to stay ahead in web development
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center max-w-2xl">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to dive in?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of developers who trust DevBlog for their learning journey.
            </p>
            <Link to="/blog">
              <Button size="lg" className="flex items-center gap-2 mx-auto">
                Start Reading
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Index;
