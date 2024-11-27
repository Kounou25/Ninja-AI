'use client';
import { useState } from 'react';

export default function ChatPage() {
  const [userInput, setUserInput] = useState(''); // État pour stocker la valeur du champ

  const handleInputChange = (e) => {
    setUserInput(e.target.value); // Met à jour la valeur de l'état
  };

  return (
    <div className="h-screen flex flex-col bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-800 to-purple-700 p-4 shadow-lg">
        <h1 className="text-2xl font-bold text-center tracking-wide animate-pulse">
        Ninja-AI
        </h1>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="hidden lg:block w-1/5 bg-gray-800 p-6 border-r border-gray-700 flex flex-col">
          <nav className="space-y-4">
            <a
              href="#"
              className="block py-2 px-4 bg-gray-700 rounded-lg text-gray-200 hover:bg-blue-600 hover:text-white transition duration-300"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block py-2 px-4 bg-gray-700 rounded-lg text-gray-200 hover:bg-blue-600 hover:text-white transition duration-300"
            >
              Chatbot
            </a>
            <a
              href="#"
              className="block py-2 px-4 bg-gray-700 rounded-lg text-gray-200 hover:bg-blue-600 hover:text-white transition duration-300"
            >
              Paramètres
            </a>
          </nav>
          <div className="mt-auto text-gray-400 text-sm">© 2024 Ninja-AI.</div>
        </aside>

        {/* Chat Section */}
        <main className="flex-1 flex flex-col bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
          {/* Chat Area */}
          <div className="flex-1 p-6 space-y-4 overflow-y-auto">
            {/* Chatbot Message */}
            <div className="flex items-start">
              <div className="h-10 w-10 bg-blue-600 rounded-full flex-shrink-0 shadow-lg animate-glow"></div>
              <div className="ml-4 bg-gray-700 p-4 rounded-xl shadow-lg max-w-lg animate-fade-in">
                Bonjour ! Comment puis-je vous aider aujourd'hui ?
              </div>
            </div>

            {/* User Message */}
            <div className="flex items-end justify-end">
              <div className="bg-blue-600 p-4 rounded-xl shadow-lg max-w-lg animate-fade-in-right">
                Pouvez-vous me parler de vos fonctionnalités ?
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-700 bg-gray-800 flex items-center gap-4">
            <input
              type="text"
              placeholder="Écrivez votre message..."
              value={userInput} // Liaison de l'état à l'input
              onChange={handleInputChange} // Gestion des changements
              className="flex-1 bg-gray-700 p-3 rounded-full text-white placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
            <button
              onClick={() => console.log('Valeur du champ:', userInput)} // Affiche la valeur dans la console
              className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:scale-110 transform transition duration-300"
            >
              Envoyer
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
