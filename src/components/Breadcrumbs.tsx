/**
 * Breadcrumb Navigation Component
 * Elite Aesthetics Cebu
 */

import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbItem } from '../data/navigationData';
import { useRouter } from '../router/Router';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  const { navigate } = useRouter();

  if (!items || items.length <= 1) {
    return null;
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center text-xs tracking-wider text-[#8C7667] ${className}`}
    >
      <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.path + index} className="inline-flex items-center gap-1.5 sm:gap-2">
              {index > 0 && (
                <ChevronRight className="w-3 h-3 text-[#C9A77E]/70 shrink-0" aria-hidden="true" />
              )}
              {isLast ? (
                <span
                  className="font-medium text-[#1D1815] truncate max-w-[200px] sm:max-w-none"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <button
                  type="button"
                  onClick={() => navigate(item.path)}
                  className="hover:text-[#9E7A42] transition-colors inline-flex items-center gap-1 focus:outline-none focus-visible:underline"
                >
                  {index === 0 && <Home className="w-3 h-3 text-[#9E7A42]/80" aria-hidden="true" />}
                  <span>{item.label}</span>
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
