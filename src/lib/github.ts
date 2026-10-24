import type { GithubRepo } from '../types';

const CACHE_KEY = 'asep_portfolio_github_repos_v1';
const CACHE_TIMESTAMP_KEY = 'asep_portfolio_github_timestamp_v1';
const CACHE_TTL_MS = 15 * 60 * 1000; // 15 minutes

export interface GitHubFetchResult {
  repos: GithubRepo[];
  source: 'live' | 'cache' | 'fallback';
  rateLimited: boolean;
  error?: string;
  updatedAt?: string;
}

// Authentic snapshot fallback captured during repository audit
export const fallbackRepos: GithubRepo[] = [
  {
    id: 938201923,
    name: 'iwatch',
    full_name: 'asepsaepulloh-oss/iwatch',
    description: 'Modern Editorial Anime Streaming Platform built with React, Vite & Tailwind CSS',
    html_url: 'https://github.com/asepsaepulloh-oss/iwatch',
    homepage: 'https://iwatch-livid.vercel.app',
    language: 'TypeScript',
    stargazers_count: 0,
    forks_count: 0,
    fork: false,
    archived: false,
    topics: ['react', 'vite', 'tailwind', 'streaming', 'editorial-ui'],
    updated_at: '2026-10-24T13:21:46Z',
    created_at: '2026-10-22T08:10:00Z',
    default_branch: 'main',
  },
  {
    id: 938104521,
    name: 'louicomic',
    full_name: 'asepsaepulloh-oss/louicomic',
    description: 'Manga and manhwa reader with Capacitor Android packaging, Supabase auth & Gemini AI',
    html_url: 'https://github.com/asepsaepulloh-oss/louicomic',
    homepage: 'https://louicomic.vercel.app',
    language: 'TypeScript',
    stargazers_count: 0,
    forks_count: 0,
    fork: false,
    archived: false,
    topics: ['capacitor', 'manga-reader', 'react', 'supabase'],
    updated_at: '2026-07-25T15:27:32Z',
    created_at: '2026-07-23T10:00:00Z',
    default_branch: 'main',
  },
  {
    id: 937984129,
    name: 'animes',
    full_name: 'asepsaepulloh-oss/animes',
    description: 'Reactive anime discovery hub with fluid view transitions, bookmarking, and streaming proxy',
    html_url: 'https://github.com/asepsaepulloh-oss/animes',
    homepage: 'https://animes-bice-six.vercel.app',
    language: 'TypeScript',
    stargazers_count: 0,
    forks_count: 0,
    fork: false,
    archived: false,
    topics: ['react', 'motion', 'streaming-hub', 'vite'],
    updated_at: '2026-08-27T23:10:25Z',
    created_at: '2026-08-25T14:00:00Z',
    default_branch: 'main',
  },
  {
    id: 936998124,
    name: 'link',
    full_name: 'asepsaepulloh-oss/link',
    description: 'Ultra-fast Next.js link-in-bio aggregator with dynamic vector QR code generation',
    html_url: 'https://github.com/asepsaepulloh-oss/link',
    homepage: 'https://linkinbio-ashen-beta.vercel.app',
    language: 'TypeScript',
    stargazers_count: 0,
    forks_count: 0,
    fork: false,
    archived: false,
    topics: ['nextjs', 'qr-code', 'minimalist-ui', 'bio'],
    updated_at: '2026-07-25T03:31:15Z',
    created_at: '2026-07-25T01:00:00Z',
    default_branch: 'main',
  },
  {
    id: 937012948,
    name: 'Samehadaku-Unofficial-REST-API',
    full_name: 'asepsaepulloh-oss/Samehadaku-Unofficial-REST-API',
    description: 'Fast unofficial REST API for Samehadaku streaming data deployed on Vercel',
    html_url: 'https://github.com/asepsaepulloh-oss/Samehadaku-Unofficial-REST-API',
    homepage: 'https://samehadaku-unofficial-rest-api-ashen.vercel.app',
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
    fork: true,
    archived: false,
    topics: ['rest-api', 'scraping', 'express', 'cheerio'],
    updated_at: '2026-10-24T11:52:19Z',
    created_at: '2026-10-24T10:00:00Z',
    default_branch: 'main',
  },
  {
    id: 936881902,
    name: 'kaigobiz',
    full_name: 'asepsaepulloh-oss/kaigobiz',
    description: 'High-performance TypeScript GoBiz/GoPay Payment Gateway featuring Dynamic QRIS Generator (EMVCo CRC16)',
    html_url: 'https://github.com/asepsaepulloh-oss/kaigobiz',
    homepage: null,
    language: 'TypeScript',
    stargazers_count: 0,
    forks_count: 0,
    fork: true,
    archived: false,
    topics: ['qris', 'emvco', 'payment-gateway', 'gopay'],
    updated_at: '2026-08-12T07:11:03Z',
    created_at: '2026-08-12T05:00:00Z',
    default_branch: 'main',
  },
  {
    id: 936772819,
    name: 'Komiku-Rest-Api',
    full_name: 'asepsaepulloh-oss/Komiku-Rest-Api',
    description: 'Manga discovery and reading API built with Cheerio and Express. Uses data from Komiku',
    html_url: 'https://github.com/asepsaepulloh-oss/Komiku-Rest-Api',
    homepage: 'https://manga-fe-sigma.vercel.app/',
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
    fork: true,
    archived: false,
    topics: ['komiku', 'manga-api', 'cheerio', 'express'],
    updated_at: '2026-10-21T15:45:54Z',
    created_at: '2026-10-21T14:00:00Z',
    default_branch: 'master',
  },
  {
    id: 936661928,
    name: 'IDLIX-API',
    full_name: 'asepsaepulloh-oss/IDLIX-API',
    description: 'Streaming platform movie catalog scraper and REST endpoints built with Node.js',
    html_url: 'https://github.com/asepsaepulloh-oss/IDLIX-API',
    homepage: 'https://idlix-api-8acc.vercel.app',
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
    fork: true,
    archived: false,
    topics: ['scraper', 'idlix', 'api', 'express'],
    updated_at: '2026-10-21T13:23:31Z',
    created_at: '2026-10-21T12:00:00Z',
    default_branch: 'main',
  },
  {
    id: 935551920,
    name: 'salo-jus',
    full_name: 'asepsaepulloh-oss/salo-jus',
    description: 'Fresh juice small business landing page featuring Cormorant Garamond editorial typography',
    html_url: 'https://github.com/asepsaepulloh-oss/salo-jus',
    homepage: null,
    language: 'HTML',
    stargazers_count: 0,
    forks_count: 0,
    fork: false,
    archived: false,
    topics: ['editorial-web', 'culinary', 'html5'],
    updated_at: '2026-04-28T00:30:21Z',
    created_at: '2026-04-28T00:00:00Z',
    default_branch: 'main',
  },
  {
    id: 935441920,
    name: 'cloudflare_temp_email',
    full_name: 'asepsaepulloh-oss/cloudflare_temp_email',
    description: 'CloudFlare free temp domain email service with IMAP/SMTP and Telegram Bot notification support',
    html_url: 'https://github.com/asepsaepulloh-oss/cloudflare_temp_email',
    homepage: 'https://mail.awsl.uk',
    language: 'TypeScript',
    stargazers_count: 3,
    forks_count: 0,
    fork: true,
    archived: false,
    topics: ['cloudflare-workers', 'temp-email', 'telegram-bot'],
    updated_at: '2026-08-27T22:33:38Z',
    created_at: '2026-08-27T20:00:00Z',
    default_branch: 'main',
  },
];

export async function fetchGithubRepositories(): Promise<GitHubFetchResult> {
  // 1. Check local cache first to avoid rate-limiting
  if (typeof window !== 'undefined') {
    try {
      const cachedData = localStorage.getItem(CACHE_KEY);
      const cachedTimestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);

      if (cachedData && cachedTimestamp) {
        const age = Date.now() - parseInt(cachedTimestamp, 10);
        if (age < CACHE_TTL_MS) {
          const parsed = JSON.parse(cachedData) as GithubRepo[];
          if (Array.isArray(parsed) && parsed.length > 0) {
            return {
              repos: parsed,
              source: 'cache',
              rateLimited: false,
              updatedAt: new Date(parseInt(cachedTimestamp, 10)).toLocaleTimeString(),
            };
          }
        }
      }
    } catch {
      // Ignore localStorage issues and proceed to fetch
    }
  }

  // 2. Fetch live data from GitHub API
  try {
    const response = await fetch(
      'https://api.github.com/users/asepsaepulloh-oss/repos?per_page=100&sort=updated',
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      }
    );

    if (response.status === 403) {
      // Rate limited
      return {
        repos: fallbackRepos,
        source: 'fallback',
        rateLimited: true,
        error: 'GitHub API rate limit exceeded. Displaying curated snapshot.',
      };
    }

    if (!response.ok) {
      throw new Error(`GitHub API returned status ${response.status}`);
    }

    const repos: GithubRepo[] = await response.json();

    // Cache successful response
    if (typeof window !== 'undefined' && Array.isArray(repos) && repos.length > 0) {
      try {
        localStorage.setItem(CACHE_KEY, JSON.stringify(repos));
        localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
      } catch {
        // Storage quota might be exceeded, ignore
      }
    }

    return {
      repos,
      source: 'live',
      rateLimited: false,
      updatedAt: new Date().toLocaleTimeString(),
    };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to fetch repositories';
    // Fall back to offline snapshot
    return {
      repos: fallbackRepos,
      source: 'fallback',
      rateLimited: false,
      error: message,
    };
  }
}
