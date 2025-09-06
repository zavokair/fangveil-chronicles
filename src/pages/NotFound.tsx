import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center glass p-8 rounded-2xl border border-white/10">
        <h1 className="mb-4 text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">The spirits have hidden this page</p>
        <a href="/" className="text-primary hover:text-primary-glow underline transition-colors">
          Return to the Society
        </a>
      </div>
    </div>
  );
};

export default NotFound;
