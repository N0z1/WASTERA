import React from 'react';
import { RecycleIcon } from 'lucide-react';
export function Footer() {
  return <footer className="w-full bg-gray-800 text-white px-6 py-12">
      <div className="max-w-md mx-auto text-center">
        <div className="flex items-center justify-center mb-6">
          <RecycleIcon className="w-8 h-8 mr-2" />
          <h3 className="text-2xl font-bold">WASTERA</h3>
        </div>
        <p className="text-gray-300 mb-6 text-sm leading-relaxed">
          Making waste management simple, efficient, and environmentally
          responsible.
        </p>
        <div className="border-t border-gray-700 pt-6">
          <p className="text-gray-400 text-xs">
            © 2024 WASTERA. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs mt-2">
            Licensed & Insured Waste Management Services
          </p>
        </div>
      </div>
    </footer>;
}