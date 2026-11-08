import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

// Componente shadcn/ui (Radix/Nova), adaptado ao formulário do Figma.
function Input({ className, type, ...props }: ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'h-10 w-full min-w-0 rounded-[20px] border-2 border-input bg-transparent px-2 py-0 text-[15px] leading-normal font-medium text-[#222] placeholder:text-black/70 placeholder:opacity-100 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-50 dark:text-white/87 dark:placeholder:text-white/87',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
