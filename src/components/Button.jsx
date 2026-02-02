import { Link } from 'react-router-dom'
import clsx from 'clsx'

export default function Button({
  text,
  href,
  newTab = false,
  variant = 'primary',
  className = '',
  onClick
}) {
  const baseStyles = clsx(
    'btn',
    variant === 'primary' ? 'btn-primary' : 'btn-outline',
    className
  )

  // External link or internal route
  const isExternal = href?.startsWith('http') || href?.startsWith('mailto:')

  if (isExternal || newTab) {
    return (
      <a
        href={href}
        target={newTab ? '_blank' : undefined}
        rel={newTab ? 'noopener noreferrer' : undefined}
        className={baseStyles}
        onClick={onClick}
      >
        {text}
      </a>
    )
  }

  return (
    <Link
      to={href}
      className={baseStyles}
      onClick={onClick}
    >
      {text}
    </Link>
  )
}
