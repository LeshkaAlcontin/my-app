'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function FooterNav() {
  const pathname = usePathname();
  const isReadingPage = pathname === '/reading-page';
  
  // Define links based on page
  const links = isReadingPage ? [
    { href: "/", label: "← Back to About Me", color: "bg-gradient-to-r from-blue-500 to-purple-600" },
    { href: "https://www.goodreads.com/user/show/178948085-rurururu", label: "📚 My Goodreads", color: "bg-gradient-to-r from-blue-500 to-purple-600", external: true }
  ] : [
    { href: "/reading-page", label: "View My Reading Board", color: "bg-gradient-to-r from-blue-500 to-purple-600" },
    { href: "https://www.goodreads.com/user/show/178948085-rurururu", label: "📚 My Goodreads", color: "bg-gradient-to-r from-blue-500 to-purple-600", external: true }
  ];

  return (
    <footer className="mt-35 pt-8 border-t border-gray-800">
      <div className="container mx-auto px-6 py-6 text-center">
        <h3 className="text-xl font-bold text-white mb-4">
          {isReadingPage ? 'Explore More' : 'Ready to see what I\'m reading?'}
        </h3>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {links.map((link, index) => (
            link.external ? (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3 ${link.color} rounded-lg font-semibold hover:opacity-70 transition`}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={index}
                href={link.href}
                className={`px-6 py-3 ${link.color} rounded-lg font-semibold hover:opacity-70 transition`}
              >
                {link.label}
              </Link>
            )
          ))}
        </div>

        <p className="text-gray-500 text-sm">
          © 2026 LeshiCake's 2026 Reading Challenge
        </p>
      </div>
    </footer>
  );
}