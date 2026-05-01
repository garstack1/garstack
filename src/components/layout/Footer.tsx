import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-ink-200 bg-ink-900 text-slate-site">
      <div className="container-site py-16 grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <p className="text-display text-2xl mb-4">Garrett Stack</p>
          <p className="text-ink-300 text-sm leading-relaxed max-w-xs">
            Instructional Designer, Technical Writer, and Implementation Consultant based in Ireland.
          </p>
        </div>

        {/* Links */}
        <div>
          <p className="label-tag text-ink-500 mb-5">Navigation</p>
          <nav className="flex flex-col gap-3">
            {[
              ['/', 'Home'],
              ['/about', 'About'],
              ['/cv', 'CV'],
              ['/portfolio', 'Portfolio'],
              ['/blog', 'Blog'],
              ['/contact', 'Contact'],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="text-ink-300 text-sm hover:text-signal transition-colors">
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Connect */}
        <div>
          <p className="label-tag text-ink-500 mb-5">Connect</p>
          <div className="flex flex-col gap-3">
            <a href="https://linkedin.com/in/garrett-stack" target="_blank" rel="noopener noreferrer"
               className="text-ink-300 text-sm hover:text-signal transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/garstack1" target="_blank" rel="noopener noreferrer"
               className="text-ink-300 text-sm hover:text-signal transition-colors">
              GitHub
            </a>
            <a href="mailto:hello@garstack.com"
               className="text-ink-300 text-sm hover:text-signal transition-colors">
              hello@garstack.com
            </a>
          </div>
        </div>
      </div>

      <div className="container-site pb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p className="text-ink-600 text-xs font-mono">
          © {year} Garrett Stack. All rights reserved.
        </p>
        <p className="text-ink-600 text-xs font-mono">
          Built with Next.js · Sanity · Vercel
        </p>
      </div>
    </footer>
  )
}
