"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { useDebounce } from 'use-debounce';

interface SearchResult {
  id: number;
  title: string;
  image: string;
  categories: string;
}

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [debouncedQuery] = useDebounce(query, 300);

  const handleSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsSearching(true);
    try {
      const response = await axios.get(
        `http://localhost:8000/api/v1/events/search?q=${searchQuery}`
      );
      setResults(response.data.data);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsSearching(false);
    }
  };

  useEffect(() => {
    handleSearch(debouncedQuery);
  }, [debouncedQuery]);

  return (
    <div className="relative">
      <div className="flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search events..."
          className="w-64 rounded-lg border px-4 py-2 focus:outline-none focus:ring-2"
        />
        {isSearching && (
          <div className="ml-2 animate-spin">⌛</div>
        )}
      </div>

      {results.length > 0 && (
        <div className="absolute mt-2 w-96 rounded-lg border bg-white p-2 shadow-lg z-10">
          {results.map((result) => (
            <Link
              key={result.id}
              href={`/event-posts/${result.id}`}
              className="grid grid-cols-2 items-center gap-3 p-2 hover:bg-gray-100"
            >
              <div className="relative h-12 w-full overflow-hidden rounded-md">
                <Image
                  src={result.image}
                  fill
                  alt={result.title}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold">{result.title}</p>
                <p className="text-sm text-gray-600">{result.categories}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}