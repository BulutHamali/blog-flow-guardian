import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogIn, Shield } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import { useEffect } from 'react';

const Login = () => {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = () => {
    login();
    navigate('/admin');
  };

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="bg-card rounded-lg border border-border p-6">
            <div className="text-center mb-6">
              <div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold">Welcome Back</h1>
              <p className="text-muted-foreground">
                Sign in to access the admin dashboard
              </p>
            </div>
            <div className="space-y-6">
              <div className="text-center text-sm text-muted-foreground">
                This is a demo authentication system. Click the button below to simulate logging in.
              </div>
              
              <button 
                onClick={handleLogin} 
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                <LogIn className="h-4 w-4" />
                Log In
              </button>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Need an account? This is just a demo - click login to proceed!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Login;