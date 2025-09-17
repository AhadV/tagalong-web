import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const highlightText = (text, highlight) => {
  if (!highlight) return text;
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  return (
    <span>
      {parts.map((part, i) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <mark key={i} className="bg-yellow-200/70 text-black rounded px-1">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </span>
  );
};

export default function ContentModule({ title, content, searchTerm }) {
  const [isOpen, setIsOpen] = useState(false);

  const isInitiallyOpen = useMemo(() => {
    if (!searchTerm) return false;
    const lowercasedFilter = searchTerm.toLowerCase();

    if (title.toLowerCase().includes(lowercasedFilter)) return true;
    return content.some(child => 
        child.subtitle.toLowerCase().includes(lowercasedFilter) || 
        child.points.some(point => point.toLowerCase().includes(lowercasedFilter))
    );
  }, [searchTerm, title, content]);

  const toggleOpen = () => setIsOpen(!isOpen);

  const shouldBeOpen = searchTerm ? isInitiallyOpen : isOpen;

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-gray-300 hover:shadow-sm">
      <button
        className="w-full flex justify-between items-center text-left p-6"
        onClick={toggleOpen}
      >
        <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900">
          {highlightText(title, searchTerm)}
        </h2>
        {shouldBeOpen ? (
          <Minus className="w-6 h-6 text-gray-500 flex-shrink-0" />
        ) : (
          <Plus className="w-6 h-6 text-gray-500 flex-shrink-0" />
        )}
      </button>
      <AnimatePresence>
        {shouldBeOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 space-y-6">
              {content.map((child, index) => (
                <div key={index} className="prose prose-lg max-w-none text-gray-700 font-sans leading-relaxed">
                  {child.subtitle && (
                    <h3 className="font-serif font-bold text-lg text-gray-800 mb-2">
                        {highlightText(child.subtitle, searchTerm)}
                    </h3>
                  )}
                  <ul className="space-y-2 list-disc pl-5">
                    {child.points.map((point, pointIndex) => (
                      <li key={pointIndex}>
                        {highlightText(point, searchTerm)}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}