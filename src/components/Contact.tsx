import React from 'react';
import { MessageSquareIcon, BookOpenIcon, PhoneIcon, MailIcon } from 'lucide-react';
export function Contact() {
  return <section className="w-full bg-green-50 px-6 py-16">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Start Your Journey
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Get support and guidance for your sustainability goals
        </p>
        <div className="grid gap-4 mb-8">
          <button className="w-full bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center">
            <BookOpenIcon className="w-5 h-5 mr-2" />
            Access Free Resources
          </button>
          <button className="w-full bg-white border border-green-600 text-green-600 font-semibold py-3 px-6 rounded-lg hover:bg-green-50 transition-colors flex items-center justify-center">
            <MessageSquareIcon className="w-5 h-5 mr-2" />
            Schedule Consultation
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <PhoneIcon className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-800">Support Line</p>
              <p className="text-gray-600">1-800-WASTERA</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <MailIcon className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-800">Email Us</p>
              <p className="text-gray-600">support@wastera.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}