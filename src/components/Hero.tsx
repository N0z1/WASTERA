import React from 'react';
import { RecycleIcon, LeafIcon } from 'lucide-react';
export function Hero() {
  return <section className="w-full bg-gradient-to-br from-green-600 to-green-800 text-white px-6 py-16">
      <div className="max-w-md mx-auto text-center">
        <div className="flex items-center justify-center mb-6">
          <RecycleIcon className="w-12 h-12 mr-3" />
          <h1 className="text-4xl font-bold">WASTERA</h1>
        </div>
        <h2 className="text-xl mb-4 text-green-100">
          Together Towards Net Zero
        </h2>
        <p className="text-green-100 mb-8 leading-relaxed">
          Join our community of businesses and individuals making a difference.
          Learn, implement, and achieve sustainable waste management practices.
        </p>
        <div className="space-y-4">
          <button className="w-full bg-white text-green-700 font-semibold py-3 px-6 rounded-lg hover:bg-green-50 transition-colors flex items-center justify-center">
            <LeafIcon className="w-5 h-5 mr-2" />
            Start Your Green Journey
          </button>
          <button className="w-full border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-green-700 transition-colors">
            Learn About Net Zero
          </button>
        </div>
      </div>
    </section>;
}