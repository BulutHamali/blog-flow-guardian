import { useAuth } from '@/contexts/AuthContext';
import { Shield, Users, FileText, BarChart3, Settings } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import { getAllPosts } from '@/lib/posts';

const Admin = () => {
  const { logout } = useAuth();
  const posts = getAllPosts();

  const stats = [
    {
      title: "Total Posts",
      value: posts.length,
      icon: FileText,
      description: "Published blog posts"
    },
    {
      title: "Total Views",
      value: "12.4K",
      icon: BarChart3,
      description: "All-time page views"
    },
    {
      title: "Active Users",
      value: "847",
      icon: Users,
      description: "Monthly active readers"
    }
  ];

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                Admin Dashboard
              </h1>
              <p className="text-muted-foreground mt-2">
                Welcome to the admin dashboard. Manage your blog content and settings.
              </p>
            </div>
            <button 
              onClick={logout}
              className="px-3 py-2 border border-border rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Sign Out
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-card rounded-lg border border-border p-6">
                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <h3 className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </h3>
                  <stat.icon className="h-4 w-4 text-muted-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Posts */}
            <div className="bg-card rounded-lg border border-border p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold">Recent Posts</h3>
                <p className="text-muted-foreground">
                  Your latest blog posts
                </p>
              </div>
              <div className="space-y-4">
                {posts.slice(0, 5).map((post) => (
                  <div key={post.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-sm">{post.title}</h4>
                      <p className="text-xs text-muted-foreground">
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Published
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-card rounded-lg border border-border p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold">Quick Actions</h3>
                <p className="text-muted-foreground">
                  Common administrative tasks
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3">
                <button className="flex items-center justify-start gap-2 px-3 py-2 border border-border rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                  <FileText className="h-4 w-4" />
                  Create New Post
                </button>
                <button className="flex items-center justify-start gap-2 px-3 py-2 border border-border rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                  <BarChart3 className="h-4 w-4" />
                  View Analytics
                </button>
                <button className="flex items-center justify-start gap-2 px-3 py-2 border border-border rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                  <Users className="h-4 w-4" />
                  Manage Users
                </button>
                <button className="flex items-center justify-start gap-2 px-3 py-2 border border-border rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                  <Settings className="h-4 w-4" />
                  Site Settings
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 p-6 bg-muted/50 rounded-lg text-center">
            <p className="text-sm text-muted-foreground">
              This is a demo admin dashboard. In a real application, you would have full CRUD operations for managing blog posts, user accounts, and site settings.
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Admin;