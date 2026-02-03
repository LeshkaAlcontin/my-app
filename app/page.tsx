import FooterNav from "@/components/footer-nav";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-15">
      <div className="text-center pt-20 pb-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-12">
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
        // In your app/page.tsx - After the paragraph, add:
        <div className="mt-5 mb-5 flex justify-center">
          <img
            src="/my-melody.png"
            alt="Cute reading illustration"
            className="max-w-[100px] w-full"
          />
        </div>
        <FooterNav />
      </div>
    </div>
  );
}