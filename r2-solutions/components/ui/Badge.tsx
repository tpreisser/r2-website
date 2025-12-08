import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
}

export function GuaranteeBadge({ size = 'md', className, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        'relative flex flex-col items-center justify-center rounded-full bg-[#FF6B35] text-white font-bold shadow-xl',
        size === 'sm' && 'w-24 h-24 text-xs',
        size === 'md' && 'w-32 h-32 text-sm',
        size === 'lg' && 'w-40 h-40 text-base',
        className,
      )}
      {...props}
    >
      <div className="text-center leading-tight tracking-tight z-10">
        <div
          className={cn(
            size === 'sm' && 'text-xs',
            size === 'md' && 'text-sm',
            size === 'lg' && 'text-base',
          )}
        >
          RESULTS IN
        </div>
        <div
          className={cn(
            'font-bold',
            size === 'sm' && 'text-lg',
            size === 'md' && 'text-2xl',
            size === 'lg' && 'text-3xl',
          )}
        >
          A DAY
        </div>
        <div
          className={cn(
            size === 'sm' && 'text-xs',
            size === 'md' && 'text-sm',
            size === 'lg' && 'text-base',
          )}
        >
          GUARANTEED
        </div>
      </div>

      {/* Subtle pulse animation */}
      <div
        className="absolute inset-0 rounded-full bg-[#FF6B35] opacity-75 animate-ping"
        style={{ animationDuration: '3s' }}
      />
    </div>
  );
}

