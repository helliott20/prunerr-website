const REPO = 'helliott20/prunerr';
const FALLBACK = 'v1.4.7';

interface GitHubRelease {
  tag_name: string;
  html_url: string;
  published_at: string;
}

export interface LatestRelease {
  tag: string;
  url: string;
  publishedAt: string | null;
}

const FALLBACK_RELEASE: LatestRelease = {
  tag: FALLBACK,
  url: `https://github.com/${REPO}/releases`,
  publishedAt: null,
};

export async function fetchLatestRelease(): Promise<LatestRelease> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const headers: HeadersInit = {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'prunerr-website-build',
      'X-GitHub-Api-Version': '2022-11-28',
    };
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`, {
      headers,
      signal: controller.signal,
    });

    if (!res.ok) {
      console.warn(`[version] GitHub API returned ${res.status}; falling back to ${FALLBACK}`);
      return FALLBACK_RELEASE;
    }

    const data = (await res.json()) as GitHubRelease;
    return {
      tag: data.tag_name,
      url: data.html_url,
      publishedAt: data.published_at ?? null,
    };
  } catch (error) {
    console.warn(`[version] Failed to fetch latest release; falling back to ${FALLBACK}:`, error);
    return FALLBACK_RELEASE;
  } finally {
    clearTimeout(timeout);
  }
}
