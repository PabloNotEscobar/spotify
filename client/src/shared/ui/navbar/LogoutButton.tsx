import Link from 'next/link';

interface LogoutButton {
    clickHandler: () => void
}

export function LogoutButton({clickHandler}: LogoutButton) {
    return (
        <button
            type="button"
            className={"p-2 text-white opacity-70 hover:opacity-100 transition-opacity cu"}
            onClick={clickHandler}
        >
            <span aria-hidden="true">
                <svg
                    className="w-6 h-6 cursor-pointer"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                >
                    <path d="M1 8a6 6 0 018.514-5.45.75.75 0 01-.629 1.363 4.5 4.5 0 100 8.175.75.75 0 11.63 1.361A6 6 0 011 8z" />
                    <path d="M11.245 4.695a.75.75 0 00-.05 1.06l1.36 1.495H6.75a.75.75 0 000 1.5h5.805l-1.36 1.495a.75.75 0 001.11 1.01l2.5-2.75a.748.748 0 00-.002-1.012l-2.498-2.748a.75.75 0 00-1.06-.05z" />
                </svg>
            </span>
        </button>
    );
}
