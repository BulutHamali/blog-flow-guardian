import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { LogIn, LogOut, BookOpen, Shield } from 'lucide-react';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="border-b bg-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-primary">
            <BookOpen className="h-6 w-6" />
            <span>DevBlog</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <Link 
              to="/blog" 
              className="text-foreground hover:text-primary transition-colors"
            >
              Blog
            </Link>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link 
                  to="/admin" 
                  className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors"
                >
                  <Shield className="h-4 w-4" />
                  <span>Admin</span>
                </Link>
                <button 
                  onClick={logout}
                  className="flex items-center space-x-1 px-3 py-2 border border-border rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Log Out</span>
                </button>
              </div>
            ) : (
              <Link to="/login">
                <button className="flex items-center space-x-1 px-3 py-2 border border-border rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                  <LogIn className="h-4 w-4" />
                  <span>Log In</span>
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;