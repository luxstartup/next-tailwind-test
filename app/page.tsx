export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center p-8 gap-8">
      {/* タイトル */}
      <h1 className="text-5xl font-extrabold text-center text-blue-800 underline decoration-pink-500">
        Tennis Matching
      </h1>

      {/* ボタン */}
      <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300">
        Click Me
      </button>

      {/* カード */}
      <div className="w-80 p-6 bg-white rounded-2xl shadow-xl border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Tailwind Test Card</h2>
        <p className="text-gray-600">
          これは Tailwind CSS が正しく反映されているかを確認するサンプルカードです。
        </p>
        <div className="mt-4 flex gap-2">
          <span className="px-2 py-1 bg-green-200 text-green-800 rounded-full text-sm font-medium">Easy</span>
          <span className="px-2 py-1 bg-red-200 text-red-800 rounded-full text-sm font-medium">Hard</span>
        </div>
      </div>

      {/* フレックスボックステスト */}
      <div className="flex gap-4">
        <div className="w-16 h-16 bg-red-400 animate-bounce"></div>
        <div className="w-16 h-16 bg-green-400 animate-spin"></div>
        <div className="w-16 h-16 bg-blue-400 animate-pulse"></div>
      </div>

      <p className="text-gray-700 text-center mt-4">
        もしこれらの色、サイズ、アニメーション、影が表示されていれば、Tailwindは正しく反映されています。
      </p>
    </main>
  )
}
