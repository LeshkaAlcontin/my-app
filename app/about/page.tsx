export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-20">
      {/* Hero section - Copy your content here */}
      <div className="text-center pt-20 pb-32">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            LESHICAKE'S READING LIST [2026]
          </span>
        </h1>
        <p className="text-l text-gray-300 max-w-3xl mx-auto mb-10">
          Hi! Welcome to my site. Before everything else, I just want to say that I am not the biggest reader out there.
          However, I do enjoy reading books from time to time, and I wanted to share my reading list for 2026 with you all. 
          This list includes books I have been putting off for a long time now. 
          Feel free to explore and maybe even find some new books to add to your own reading list!
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:opacity-90 transition">
            My Goodreads
          </button>
        </div>
      </div>
    </div>
  );
}