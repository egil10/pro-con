import Link from 'next/link';
import { statements } from '@/data/statements';
import { ArrowRight, TrendingUp, TrendingDown, MessageSquare } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <header className="border-b border-white/20 bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Structured Debate
            </h1>
          </div>
          <p className="text-gray-600 text-sm mt-2">Explore arguments, vote, and engage in structured discussions</p>
        </div>
      </header>
      
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {statements.map((statement, index) => (
            <Link
              key={statement.id}
              href={`/statement/${statement.id}`}
              className="group relative block bg-white/90 backdrop-blur-sm border-2 border-white rounded-2xl shadow-md hover:shadow-2xl p-6 transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-300" />
              
              <div className="relative z-10">
                <h2 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                  {statement.title}
                </h2>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-100 rounded-full">
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-semibold text-emerald-700">{statement.pros.length} pros</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-100 rounded-full">
                    <TrendingDown className="w-4 h-4 text-rose-600" />
                    <span className="text-sm font-semibold text-rose-700">{statement.cons.length} cons</span>
                  </div>
                </div>
                
                <div className="flex items-center text-indigo-600 font-medium text-sm group-hover:gap-2 transition-all">
                  <span>View debate</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

