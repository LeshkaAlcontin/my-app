import Link from 'next/link';

export default function FooterNav() {
  return (
    <footer className="mt-32 pt-8 border-t border-gray-800">
      <div className="container mx-auto px-6 py-6 text-center">
        <h3 className="text-xl font-bold text-white mb-4">
          Ready to see what I'm reading?
        </h3>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <Link
            href="/reading-page"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:opacity-70 transition"
          >
            📚 View My Reading Board
          </Link>

          <Link
            href="https://www.goodreads.com/user/show/178948085-rurururu"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:opacity-70 transition"
          >
            📚 My Goodreads
          </Link>
        </div>

        <p className="text-gray-500 text-sm">
          © 2026 LeshiCake's 2026 Reading Challenge
        </p>
      </div>
    </footer>
  );
}