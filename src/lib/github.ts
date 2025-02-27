export const fetchRepos = async (query: string, language: string, page: number) => {
    const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

    let searchQuery = query || language ? `${query} ${language ? `language:${language}` : ''}` : 'stars:>20'; // Default to popular repos if no query

    if (language) searchQuery += `+language:${language}`;

    console.log(`Fetching: https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&order=desc&page=${page}&per_page=10`);

    const res = await fetch(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&order=desc&page=${page}&per_page=10`, {
        headers: GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : {},
    });

    if (!res.ok) throw new Error('Failed to fetch repositories');
    return res.json();
};