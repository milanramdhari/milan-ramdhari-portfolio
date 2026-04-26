export default function Button({ children, href, className = '', ...props }) {
  const base =
    'inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#2563eb] text-white text-sm font-medium hover:bg-[#1d4ed8] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2'

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
