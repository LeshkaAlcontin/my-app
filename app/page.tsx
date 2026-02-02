import { Glow } from "@/components/ui/glow"; // Adjust path if needed

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background with multiple glow effects */}
      <Glow variant="top" className="opacity-70" />
      <Glow variant="center" className="opacity-70" />
      <Glow variant="bottom" className="opacity-70" />
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Hero section */}
        <div className="text-center pt-20 pb-32">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              LESHICAKE'S READING LIST [2026]
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
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

        {/* Features section */}
        <div className="grid md:grid-cols-3 gap-8 mt-32">
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-blue-500 rounded"></div>
            </div>
            <h3 className="text-xl font-bold mb-3">Fast & Efficient</h3>
            <p className="text-gray-400">Lightning fast performance with minimal resource usage.</p>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-purple-500 rounded"></div>
            </div>
            <h3 className="text-xl font-bold mb-3">Modern Design</h3>
            <p className="text-gray-400">Clean, contemporary UI with smooth animations.</p>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
            <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-pink-500 rounded"></div>
            </div>
            <h3 className="text-xl font-bold mb-3">Easy to Use</h3>
            <p className="text-gray-400">Intuitive interface that anyone can navigate.</p>
          </div>
        </div>

        {/* Footer/Call to action */}
        <div className="text-center mt-32 pt-16 border-t border-gray-800">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <button className="px-10 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl font-bold text-lg hover:opacity-90 transition">
            Join Now - It's Free
          </button>
        </div>
      </div>
    </div>
  );
}