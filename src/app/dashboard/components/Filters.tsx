import { useState } from 'react';

const Filters = ({ onFilterChange }: { onFilterChange: (language: string) => void }) => {
    const [language, setLanguage] = useState('');

    return (
        <div className="p-4">
            <select value={language} onChange={(e) => {
                const selectedLanguage = e.target.value;
                setLanguage(selectedLanguage);
                onFilterChange(selectedLanguage);
            }}>
                <option value="">All Languages</option>
                <option value="javascript">JavaScript</option>
                <option value="typescript">TypeScript</option>
                <option value="python">Python</option>
                <option value="go">Go</option>
            </select>
        </div>
    );
};
export default Filters;