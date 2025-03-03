import { useEffect, useState } from 'react';
import { fetchRepos } from '@/lib/github';
import { useInView } from 'react-intersection-observer';

interface Repo {
    id: number;
    name: string;
    html_url: string;
}

const RepoList = ({ query, language }: { query: string, language: string }) => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [page, setPage] = useState(1);
    const { ref, inView } = useInView();

    useEffect(() => {
        setRepos([]); // Reset repos on new search/filter
        setPage(1);
    }, [query, language]);

    useEffect(() => {
        if (inView) {
            fetchRepos(query, language, page)
                .then((data: { items: Repo[] }) => {  // Explicitly define the type for `data.items`
                    setRepos(prev => {
                        const uniqueRepos = new Map(prev.map(repo => [repo.id, repo]));
                        data.items.forEach(repo => uniqueRepos.set(repo.id, repo));
                        return Array.from(uniqueRepos.values());
                    });
                    setPage(prev => prev + 1);
                })
                .catch(error => console.error(error));
        }
    }, [inView, query, language, page]); // Added `page` to the dependency array

    return (
        <div>
            {repos.length > 0 ? (
                repos.map((repo) => (
                    <a key={repo.id} href={repo.html_url} target="_blank" className="block p-4 border-b">
                        {repo.name}
                    </a>
                ))
            ) : (
                <p className="text-gray-500 text-center">No repositories found. Showing top open-source repos.</p>
            )}
            <div ref={ref} className="h-10" />
        </div>
    );
};

export default RepoList;
