// app/components/navigation.tsx
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white">
          MySite
        </Link>
        <div className="flex gap-6">
          <Link 
            href="/" 
            className="text-gray-300 hover:text-white transition"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="text-gray-300 hover:text-white transition"
          >
            About Me
          </Link>
        </div>
      </div>
    </nav>
  );
}