export default function Button({ children, href, className = '', ...props }) {
  const base =
    'inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2'

  if (href) {
    return (
      <a href={href} className={`${base} ${className}`} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={`${base} ${className}`} {...props}>
      {children}
    </button>
  )
}
