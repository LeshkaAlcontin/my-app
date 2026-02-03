// app/page.tsx
import ReadingBoard from '@/components/reading-board';

export default function Home() {
  return (
    <div className="container mx-auto px-6">
      {/* Reading Board Section */}
      <ReadingBoard />

      {/* Footer/Call to action */}
      <div className="text-center mt-32 pt-16 border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-6">Need Book Recommendations?</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Join our reading community to discover new books, track your progress, and connect with fellow readers.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-bold text-lg hover:opacity-90 transition">
            Join Reading Club
          </button>
          <button className="px-10 py-4 bg-gray-800 hover:bg-gray-700 rounded-xl font-bold text-lg transition">
            View All Books
          </button>
        </div>
      </div>
    </div>
  );
}