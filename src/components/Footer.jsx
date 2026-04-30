import SocialIcons from './SocialIcons'

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <SocialIcons />
        <p className="font-mono text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Milan Ramdhari
        </p>
      </div>
    </footer>
  )
}
