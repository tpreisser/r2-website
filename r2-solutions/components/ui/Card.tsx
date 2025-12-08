import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'hover' | 'feature';
  padding?: 'sm' | 'md' | 'lg';
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', padding = 'md', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg bg-white',
          variant === 'default' && 'border border-gray-200 shadow-sm',
          variant === 'hover' &&
            'border border-gray-200 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(2,80,130,0.2)] hover:border-[#025082]/20 cursor-pointer group',
          variant === 'feature' && 'bg-gray-50 border-none',
          padding === 'sm' && 'p-6',
          padding === 'md' && 'p-8',
          padding === 'lg' && 'p-12',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = 'Card';


