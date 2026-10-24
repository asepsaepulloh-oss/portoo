import { useState, useEffect, useMemo } from 'react';
import type { GithubRepo, Project } from '../types';
import { fetchGithubRepositories, fallbackRepos, type GitHubFetchResult } from '../lib/github';
import { featuredProjects } from '../data/projects';

export type RepoFilter = 'all' | 'original' | 'forks' | 'web' | 'api';

export function useGithubRepos() {
  const [repos, setRepos] = useState<GithubRepo[]>(fallbackRepos);
  const [loading, setLoading] = useState<boolean>(true);
  const [source, setSource] = useState<GitHubFetchResult['source']>('cache');
  const [rateLimited, setRateLimited] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<RepoFilter>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    let isMounted = true;

    async function load() {
      setLoading(true);
      const result = await fetchGithubRepositories();
      if (!isMounted) return;

      setRepos(result.repos);
      setSource(result.source);
      setRateLimited(result.rateLimited);
      setError(result.error || null);
      setLoading(false);
    }

    load();

    return () => {
      isMounted = false;
    };
  }, []);

  // Merge live GitHub repository metadata into curated featured projects
  const enrichedFeaturedProjects = useMemo<Project[]>(() => {
    return featuredProjects.map((fp) => {
      const match = repos.find(
        (r) => r.name.toLowerCase() === fp.name.toLowerCase()
      );
      if (match) {
        return {
          ...fp,
          stars: match.stargazers_count,
          // Keep live URL if present or update if GitHub repo has homepage
          liveUrl: fp.liveUrl || (match.homepage ? match.homepage : undefined),
          // Keep accurate fork status
          isFork: match.fork,
          isOriginal: !match.fork,
        };
      }
      return fp;
    });
  }, [repos]);

  // Exclude featured project repo names from the general GitHub explorer list to avoid duplication
  const featuredRepoNames = useMemo(
    () => new Set(featuredProjects.map((p) => p.name.toLowerCase())),
    []
  );

  // Filter and search additional repositories
  const filteredRepos = useMemo(() => {
    return repos
      .filter((repo) => {
        // Text search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = repo.name.toLowerCase().includes(q);
          const matchDesc = (repo.description || '').toLowerCase().includes(q);
          const matchLang = (repo.language || '').toLowerCase().includes(q);
          const matchTopics = repo.topics?.some((t) => t.toLowerCase().includes(q));
          if (!matchName && !matchDesc && !matchLang && !matchTopics) {
            return false;
          }
        }

        // Category filter
        switch (activeFilter) {
          case 'original':
            return !repo.fork;
          case 'forks':
            return repo.fork;
          case 'web':
            return (
              repo.homepage !== null &&
              repo.homepage !== '' &&
              (repo.language === 'TypeScript' ||
                repo.language === 'JavaScript' ||
                repo.language === 'HTML')
            );
          case 'api':
            return (
              repo.name.toLowerCase().includes('api') ||
              (repo.description || '').toLowerCase().includes('api') ||
              repo.topics?.includes('api') ||
              repo.topics?.includes('rest-api')
            );
          case 'all':
          default:
            return true;
        }
      })
      .filter((repo) => !featuredRepoNames.has(repo.name.toLowerCase()));
  }, [repos, activeFilter, searchQuery, featuredRepoNames]);

  return {
    repos,
    filteredRepos,
    featuredProjects: enrichedFeaturedProjects,
    loading,
    source,
    rateLimited,
    error,
    activeFilter,
    setActiveFilter,
    searchQuery,
    setSearchQuery,
    totalReposCount: repos.length,
    originalReposCount: repos.filter((r) => !r.fork).length,
  };
}
