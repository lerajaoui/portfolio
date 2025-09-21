import './App.css'

function App() {


  return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
          <h1 className="text-4xl font-bold text-blue-400">
              Bienvenue sur mon Portfolio 🚀
          </h1>
          <p className="mt-4 text-lg text-gray-300">
              Ce site est construit avec Vite + React + TailwindCSS
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg">
              Voir mes projets
          </button>
      </div>
  )
}

export default App
