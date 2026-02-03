export default function ReadingBoard() {
  const readingLists = {
    toBeRead: [
      { title: "Dune", author: "Frank Herbert", genre: "Sci-Fi" },
      { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" },
      { title: "Harry Potter & the Deathly Hollows", author: "J.K. Rowling", genre: "Fantasy" },
      { title: "Project Hail Mary", author: "Andy Weir", genre: "Sci-Fi" },
    ],
    inProgress: [
      { title: "Harry Potter & the Half-Blood Prince", author: "J.K. Rowling", genre: "Fantasy" },
      { title: "City of Bones", author: "Cassandra Clare", genre: "Fantasy" },
      { title: "Murder at the Vicarage", author: "Agatha Christie", genre: "Mystery" },
    ],
    finished: [
      { title: "A Series of Unfortunate Events: A Vile Village", author: "Lemony Snicket", genre: "Fiction" },
    ],
  };

  return (
    <div className="mt-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          2026 READING BOARD
        </span>
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {/* TO BE READ Column */}
        <div className="bg-gradient-to-b from-blue-900/50 to-blue-900/5 backdrop-blur-sm p-6 rounded-xl border border-blue-800/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
            </div>
            <h3 className="text-xl font-bold text-blue-400">TO BE READ</h3>
            <span className="ml-auto bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
              {readingLists.toBeRead.length} books
            </span>
          </div>
          
          <div className="space-y-4">
            {readingLists.toBeRead.map((book, index) => (
              <div 
                key={index} 
                className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 hover:border-blue-500/50 transition"
              >
                <h4 className="font-semibold text-white">{book.title}</h4>
                <p className="text-sm text-gray-400 mt-1">{book.author}</p>
                <span className="inline-block mt-2 px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">
                  {book.genre}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* IN PROGRESS Column */}
        <div className="bg-gradient-to-b from-purple-900/50 to-purple-900/15 backdrop-blur-xl p-6 rounded-xl border border-white/20 shadow-2xl shadow-purple-900/30">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <div className="w-5 h-5 bg-purple-500 rounded-full"></div>
            </div>
            <h3 className="text-xl font-bold text-purple-400">IN PROGRESS</h3>
            <span className="ml-auto bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">
              {readingLists.inProgress.length} books
            </span>
          </div>
          
          <div className="space-y-4">
            {readingLists.inProgress.map((book, index) => (
              <div 
                key={index} 
                className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 hover:border-purple-500/50 transition"
              >
                <h4 className="font-semibold text-white">{book.title}</h4>
                <p className="text-sm text-gray-400 mt-1">{book.author}</p>
                <span className="inline-block mt-2 px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded">
                  {book.genre}
                </span>
                <div className="mt-3">
                  <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 w-1/2"></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-1 text-right">50% complete</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FINISHED Column */}
        <div className="bg-gradient-to-b from-green-900/50 to-green-900/15 backdrop-blur-xl p-6 rounded-xl border border-white/20 shadow-2xl shadow-green-900/30">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
              <div className="w-5 h-5 bg-green-500 rounded-full"></div>
            </div>
            <h3 className="text-xl font-bold text-green-400">FINISHED</h3>
            <span className="ml-auto bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
              {readingLists.finished.length} books
            </span>
          </div>
          
          <div className="space-y-4">
            {readingLists.finished.map((book, index) => (
              <div 
                key={index} 
                className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 hover:border-green-500/50 transition"
              >
                <h4 className="font-semibold text-white">{book.title}</h4>
                <p className="text-sm text-gray-400 mt-1">{book.author}</p>
                <span className="inline-block mt-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">
                  {book.genre}
                </span>
                <div className="mt-3 flex items-center text-green-500">
                  <span className="text-sm">✅ Finished</span>
                  <span className="ml-auto text-xs text-gray-400">Jan 2026</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="mt-12 p-6 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-400">{readingLists.toBeRead.length}</div>
            <div className="text-gray-400">To Be Read</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400">{readingLists.inProgress.length}</div>
            <div className="text-gray-400">In Progress</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400">{readingLists.finished.length}</div>
            <div className="text-gray-400">Completed</div>
          </div>
        </div>
      </div>
    </div>
  );
}