import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full flex justify-between items-center text-left p-6 hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        {isOpen ? <Minus className="w-5 h-5 text-gray-500" /> : <Plus className="w-5 h-5 text-gray-500" />}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}