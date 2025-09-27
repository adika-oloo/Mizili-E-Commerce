export default function Test() {
  return (
    <div className="min-h-screen bg-red-100 flex items-center justify-center">
      <div className="bg-blue-500 text-white p-8 rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold">Tailwind Test</h1>
        <p className="mt-4">If this has blue background and white text, Tailwind is working!</p>
        <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
          Test Button
        </button>
      </div>
    </div>
  )
}
