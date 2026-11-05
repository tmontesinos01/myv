import { cn } from '@/lib/utils'

type ImagePlaceholderProps = { label: string; className?: string }

export function ImagePlaceholder({ label, className }: ImagePlaceholderProps) {
  return (
    <div className={cn('placeholder', className)}>
      <span>{label}</span>
    </div>
  )
}
