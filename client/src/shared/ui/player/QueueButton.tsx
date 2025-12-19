import React from 'react';

interface QueueButtonProps {
    isActive?: boolean;
    // onClick: () => void;
    className?: string;
}

export function QueueButton({ isActive = false, className = '' }: QueueButtonProps) {
    return (
        <button
            // onClick={onClick}
            className={`p-2 cursor-pointer text-white opacity-70 hover:opacity-100 transition-opacity duration-150 ${isActive ? 'opacity-100' : ''} ${className}`}
            aria-label="Очередь"
            aria-pressed={isActive}
        >
            <span aria-hidden="true">
                <svg className="w-4 h-4" viewBox="0 0 16 16">
                    <path fill="currentColor" d="M15 15H1v-1.5h14zm0-4.5H1V9h14zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5m2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2z"></path>
                </svg>
            </span>
        </button>
    );
}
