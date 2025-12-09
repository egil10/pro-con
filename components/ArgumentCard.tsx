'use client';

import { useState } from 'react';
import { Argument } from '@/data/statements';
import { ChevronUp, ChevronDown, Sparkles } from 'lucide-react';

interface ArgumentCardProps {
  argument: Argument;
  isPro?: boolean;
}

export default function ArgumentCard({ argument: initialArgument, isPro = true }: ArgumentCardProps) {
  const [argument, setArgument] = useState(initialArgument);
  const [userVote, setUserVote] = useState<'up' | 'down' | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleUpvote = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
    
    if (userVote === 'up') {
      setArgument({ ...argument, votes: Math.max(0, argument.votes - 1) });
      setUserVote(null);
    } else if (userVote === 'down') {
      setArgument({ ...argument, votes: argument.votes + 2 });
      setUserVote('up');
    } else {
      setArgument({ ...argument, votes: argument.votes + 1 });
      setUserVote('up');
    }
  };

  const handleDownvote = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
    
    if (userVote === 'down') {
      setArgument({ ...argument, votes: argument.votes + 1 });
      setUserVote(null);
    } else if (userVote === 'up') {
      setArgument({ ...argument, votes: Math.max(0, argument.votes - 2) });
      setUserVote('down');
    } else {
      setArgument({ ...argument, votes: Math.max(0, argument.votes - 1) });
      setUserVote('down');
    }
  };

  const voteDisplay = `+${argument.votes}`;
  const cardColor = isPro 
    ? 'bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 border-emerald-200/60' 
    : 'bg-gradient-to-br from-rose-50 via-red-50 to-pink-50 border-rose-200/60';

  return (
    <div className={`group relative ${cardColor} border-2 rounded-xl shadow-sm p-5 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm`}>
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <Sparkles className={`w-4 h-4 ${isPro ? 'text-emerald-400' : 'text-rose-400'}`} />
      </div>
      
      <p className="text-gray-800 mb-4 text-sm leading-relaxed font-medium pr-6">{argument.text}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`text-base font-bold px-3 py-1.5 rounded-lg transition-all duration-300 ${
            isPro 
              ? 'bg-emerald-500 text-white shadow-md shadow-emerald-200' 
              : 'bg-rose-500 text-white shadow-md shadow-rose-200'
          } ${isAnimating ? 'scale-110' : ''}`}>
            {voteDisplay}
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={handleUpvote}
            className={`p-2 rounded-lg transition-all duration-200 transform hover:scale-110 active:scale-95 ${
              userVote === 'up'
                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-300/50'
                : 'bg-white/80 text-gray-700 hover:bg-emerald-100 hover:text-emerald-700 border border-gray-200'
            }`}
          >
            <ChevronUp className="w-4 h-4" />
          </button>
          <button
            onClick={handleDownvote}
            className={`p-2 rounded-lg transition-all duration-200 transform hover:scale-110 active:scale-95 ${
              userVote === 'down'
                ? 'bg-rose-500 text-white shadow-lg shadow-rose-300/50'
                : 'bg-white/80 text-gray-700 hover:bg-rose-100 hover:text-rose-700 border border-gray-200'
            }`}
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

