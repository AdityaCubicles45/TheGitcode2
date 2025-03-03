'use client';
import { useState } from 'react';
import Filters from '@/components/Filters';
import RepoList from '@/components/RepoList';

const Dashboard = () => {
    const [query, setQuery] = useState('');
    const [language, setLanguage] = useState('');

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl font-bold">GitHub Open Source Repos</h1>
            <input
                type="text"
                placeholder="Search repositories..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="border p-2 w-full mb-4"
            />
            <Filters onFilterChange={setLanguage} />
            <RepoList query={query} language={language} />
        </div>
    );
};
export default Dashboard;