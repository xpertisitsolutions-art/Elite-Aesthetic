/**
 * Lightweight Client-Side Router
 * Elite Aesthetics Cebu
 *
 * Provides typed, zero-dependency routing, popstate handling,
 * route param parsing, and smooth anchor support.
 */

import React, { createContext, useContext, useState, useEffect, ReactNode, MouseEvent } from 'react';
import { applyPageMetadata } from '../data/seoData';

interface RouterContextType {
  pathname: string;
  navigate: (to: string) => void;
  params: Record<string, string>;
}

const RouterContext = createContext<RouterContextType>({
  pathname: '/',
  navigate: () => {},
  params: {},
});

export const useRouter = () => useContext(RouterContext);

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

export const Link: React.FC<LinkProps> = ({ to, children, className, onClick, ...rest }) => {
  const { navigate } = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }
    // Allow default for cmd/ctrl/middle click
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) {
      return;
    }
    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} className={className} {...rest}>
      {children}
    </a>
  );
};

export const RouterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [pathname, setPathname] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const [params, setParams] = useState<Record<string, string>>({});

  useEffect(() => {
    // Parse params on mount and change
    if (pathname.startsWith('/treatments/')) {
      const slug = pathname.replace('/treatments/', '').split('/')[0];
      setParams({ slug });
    } else {
      setParams({});
    }

    // Apply metadata
    applyPageMetadata(pathname);
  }, [pathname]);

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string) => {
    // Check if it's an anchor on the same page
    if (to.startsWith('#')) {
      const targetId = to.substring(1);
      if (pathname !== '/') {
        // Navigate to home then scroll to anchor
        window.history.pushState({}, '', '/' + to);
        setPathname('/');
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    if (to === pathname) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    window.history.pushState({}, '', to);
    setPathname(to);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RouterContext.Provider value={{ pathname, navigate, params }}>
      {children}
    </RouterContext.Provider>
  );
};
