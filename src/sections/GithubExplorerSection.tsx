import { useState } from 'react';
import type { FC } from 'react';
import {
  Search,
  ExternalLink,
  GitFork,
  Star,
  RefreshCw,
  AlertCircle,
  Code2,
  Calendar,
} from 'lucide-react';
import { GithubIcon } from '../components/icons/GithubIcon';
import type { GithubRepo } from '../types';
import type { RepoFilter } from '../hooks/useGithubRepos';

interface GithubExplorerSectionProps {
  repos: GithubRepo[];
  loading: boolean;
  source: 'live' | 'cache' | 'fallback';
  rateLimited: boolean;
  error: string | null;
  activeFilter: RepoFilter;
  setActiveFilter: (filter: RepoFilter) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  totalCount: number;
}

export const GithubExplorerSection: FC<GithubExplorerSectionProps> = ({
  repos,
  loading,
  source,
  rateLimited,
  error,
  activeFilter,
  setActiveFilter,
  searchQuery,
  setSearchQuery,
  totalCount,
}) => {
  const [displayCount, setDisplayCount] = useState<number>(12);

  const filters: { id: RepoFilter; label: string }[] = [
    { id: 'all', label: 'ALL REPOSITORIES' },
    { id: 'original', label: 'ORIGINAL WORK' },
    { id: 'api', label: 'APIS & SCRAPERS' },
    { id: 'web', label: 'WEB APPS' },
    { id: 'forks', label: 'FORKS & ENHANCEMENTS' },
  ];

  const visibleRepos = repos.slice(0, displayCount);

  const formatDate = (isoString: string) => {
    try {
      const d = new Date(isoString);
      return d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
      });
    } catch {
      return isoString;
    }
  };

  return (
    <section id="github-explorer" className="py-24 border-b border-[#303030] bg-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#303030]">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#C5F467] tracking-wider uppercase mb-2">
              <span>03 // REPOSITORIES</span>
              <span className="text-[#666666]">/</span>
              <span>LIVE GITHUB ECOSYSTEM</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#F2F0EB] tracking-tight">
              OPEN SOURCE DISCOVERY
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            {/* Live / Cache Status Badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#181818] border border-[#303030] text-[#999999]">
              <span
                className={`w-2 h-2 rounded-full ${
                  source === 'live'
                    ? 'bg-[#10B981]'
                    : source === 'cache'
                    ? 'bg-[#38BDF8]'
                    : 'bg-[#EAB308]'
                }`}
              />
              <span className="uppercase">{source} DATA</span>
              <span>•</span>
              <span className="text-[#F2F0EB] font-bold">{totalCount} REPOS</span>
            </div>

            <a
              href="https://github.com/asepsaepulloh-oss"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#181818] hover:bg-[#C5F467] hover:text-[#101010] border border-[#303030] text-[#F2F0EB] transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>@asepsaepulloh-oss</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Notice Banner if rate-limited or using fallback snapshot */}
        {(rateLimited || error) && (
          <div className="my-6 p-4 bg-[#261E0A] border border-[#EAB308]/40 text-xs font-mono text-[#FDE047] flex items-center gap-3">
            <AlertCircle className="w-4 h-4 shrink-0 text-[#EAB308]" />
            <span>
              {error ||
                'GitHub API rate limit reached for client IP. Showing authentic cached repository snapshot. Full public archive remains accessible on GitHub.'}
            </span>
          </div>
        )}

        {/* Controls: Search and Filter Tabs */}
        <div className="my-8 flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 font-mono text-xs" role="tablist">
            {filters.map((f) => (
              <button
                key={f.id}
                role="tab"
                aria-selected={activeFilter === f.id}
                onClick={() => {
                  setActiveFilter(f.id);
                  setDisplayCount(12);
                }}
                className={`px-3 py-1.5 border transition-all text-[11px] uppercase tracking-wider focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C5F467] ${
                  activeFilter === f.id
                    ? 'bg-[#C5F467] text-[#101010] border-[#C5F467] font-semibold'
                    : 'bg-[#181818] text-[#999999] border-[#303030] hover:text-[#F2F0EB] hover:border-[#505050]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-[#666666] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setDisplayCount(12);
              }}
              placeholder="Search repos, tags, languages..."
              className="w-full bg-[#181818] border border-[#303030] pl-9 pr-4 py-1.5 text-xs font-mono text-[#F2F0EB] placeholder-[#666666] focus:outline-none focus:border-[#C5F467] transition-colors"
            />
          </div>
        </div>

        {/* Loading State */}
        {loading && repos.length === 0 && (
          <div className="py-20 flex flex-col items-center justify-center space-y-3 font-mono text-xs text-[#999999]">
            <RefreshCw className="w-6 h-6 animate-spin text-[#C5F467]" />
            <span>CONNECTING TO GITHUB API...</span>
          </div>
        )}

        {/* Empty State */}
        {!loading && repos.length === 0 && (
          <div className="py-16 text-center border border-[#2a2a2a] bg-[#181818] p-8 space-y-3">
            <p className="font-mono text-xs text-[#999999]">
              No repositories match current query "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('all');
              }}
              className="px-4 py-1.5 bg-[#C5F467] text-[#101010] font-mono text-xs uppercase"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Repository Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleRepos.map((repo) => (
            <div
              key={repo.id}
              className="bg-[#181818] border border-[#2c2c2c] p-5 flex flex-col justify-between space-y-4 hover:border-[#444444] transition-colors group"
            >
              <div>
                {/* Top Meta Line */}
                <div className="flex items-center justify-between font-mono text-[11px] text-[#666666] pb-3 border-b border-[#242424]">
                  <div className="flex items-center gap-1.5">
                    {repo.fork ? (
                      <span className="flex items-center gap-1 text-[#EAB308]">
                        <GitFork className="w-3 h-3" /> FORK
                      </span>
                    ) : (
                      <span className="text-[#10B981]">ORIGINAL</span>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center gap-1 text-[#F2F0EB]">
                        <Star className="w-3 h-3 text-[#EAB308] fill-[#EAB308]" />
                        {repo.stargazers_count}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(repo.updated_at)}
                    </span>
                  </div>
                </div>

                {/* Repo Name */}
                <h4 className="font-display font-bold text-lg text-[#F2F0EB] mt-3 tracking-tight group-hover:text-[#C5F467] transition-colors break-words">
                  {repo.name}
                </h4>

                {/* Description */}
                <p className="font-sans text-xs text-[#999999] mt-2 line-clamp-3 leading-relaxed">
                  {repo.description || 'Public repository without explicit description on GitHub.'}
                </p>
              </div>

              <div>
                {/* Language / Topics */}
                <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-[#242424] font-mono text-[11px]">
                  {repo.language && (
                    <span className="px-2 py-0.5 bg-[#121212] border border-[#2c2c2c] text-[#F2F0EB] flex items-center gap-1">
                      <Code2 className="w-2.5 h-2.5 text-[#C5F467]" />
                      {repo.language}
                    </span>
                  )}

                  {repo.topics?.slice(0, 2).map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-0.5 bg-[#121212] border border-[#262626] text-[#777777]"
                    >
                      #{topic}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-3 flex items-center justify-between font-mono text-xs">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#999999] hover:text-[#F2F0EB] flex items-center gap-1 transition-colors"
                  >
                    <GithubIcon className="w-3 h-3" />
                    <span>GITHUB</span>
                  </a>

                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#C5F467] hover:underline flex items-center gap-1"
                    >
                      <span>LIVE</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {repos.length > displayCount && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setDisplayCount((prev) => prev + 12)}
              className="px-8 py-3 bg-[#181818] hover:bg-[#202020] text-[#F2F0EB] border border-[#303030] hover:border-[#666666] font-mono text-xs tracking-wider uppercase transition-colors"
            >
              SHOW MORE REPOSITORIES ({repos.length - displayCount} REMAINING)
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
