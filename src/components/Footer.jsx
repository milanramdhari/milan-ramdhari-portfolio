import SocialIcons from './SocialIcons'

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-4">
        <SocialIcons />
        {/* <p className="font-mono text-sm text-gray-400">&gt; built with coffee and curiosity</p> */}
      </div>
    </footer>
  )
}
