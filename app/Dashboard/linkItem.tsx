import Link from 'next/link'
import { ReactNode } from 'react'

interface CustomLinkProps {
  href: string
  children: ReactNode
  className?: string
}

export default function CustomLink({ href, children, className = '' }: CustomLinkProps) {
  return (
    <Link 
      href={href} 
      className={`${className}`}
    >
      {children}
    </Link>
  )
}