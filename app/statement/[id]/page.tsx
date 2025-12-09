import Link from 'next/link';
import { notFound } from 'next/navigation';
import { statements } from '@/data/statements';
import ArgumentCard from '@/components/ArgumentCard';
import { ArrowLeft, TrendingUp, TrendingDown, Sparkles } from 'lucide-react';

interface PageProps {
  params: {
    id: string;
  };
}

export default function StatementPage({ params }: PageProps) {
  const statement = statements.find((s) => s.id === params.id);

  if (!statement) {
    notFound();
  }

  const totalProVotes = statement.pros.reduce((sum, pro) => sum + pro.votes, 0);
  const totalConVotes = statement.cons.reduce((sum, con) => sum + con.votes, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <header className="border-b border-white/20 bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-indigo-600 mb-4 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to statements
          </Link>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-3">{statement.title}</h1>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-semibold text-emerald-700">
                    {totalProVotes} total pro votes
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-rose-100 rounded-lg">
                  <TrendingDown className="w-5 h-5 text-rose-600" />
                  <span className="text-sm font-semibold text-rose-700">
                    {totalConVotes} total con votes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pro Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg shadow-md">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                PRO Arguments
              </h2>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                {statement.pros.length}
              </span>
            </div>
            <div className="space-y-4">
              {statement.pros.map((pro, index) => (
                <div
                  key={pro.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ArgumentCard argument={pro} isPro={true} />
                </div>
              ))}
            </div>
          </div>

          {/* Con Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-gradient-to-br from-rose-400 to-pink-500 rounded-lg shadow-md">
                <TrendingDown className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                CON Arguments
              </h2>
              <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-semibold">
                {statement.cons.length}
              </span>
            </div>
            <div className="space-y-4">
              {statement.cons.map((con, index) => (
                <div
                  key={con.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ArgumentCard argument={con} isPro={false} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

