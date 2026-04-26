import { FaGithub, FaLinkedin } from 'react-icons/fa6'

const socials = [
  { label: 'GitHub', href: 'https://github.com/milanramdhari', Icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/milanramdhari/', Icon: FaLinkedin },
]

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-4">
      {socials.map((social) => {
        const Icon = social.Icon
        const isExternal = social.href.startsWith('http')
        return (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            className="text-gray-500 hover:text-[#2563eb] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] rounded"
          >
            <Icon size={20} />
          </a>
        )
      })}
    </div>
  )
}
