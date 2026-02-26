interface PlayButtonProps {
    playHandler: () => void
    circleDiameter?: string
    iconSize?: string
    color?: string
    animation?: string
}

export function PlayButton ({  playHandler, circleDiameter = '48', iconSize = '24', color = '#22C55E', animation}: PlayButtonProps) {
    return (
        <div
            onClick={playHandler}
            className={`bg-green-500 shadow-xl/50 rounded-full flex justify-center items-center cursor-pointer ${animation}`}
            style={{
                width: `${circleDiameter}px`,
                height: `${circleDiameter}px`,
                backgroundColor: color,
            }}
        >
            <svg
                viewBox="0 0 24 24"
                className="flex content-center items-center justify-center"
                style={{
                    width: `${iconSize}px`,
                    height: `${iconSize}px`,
                }}
            >
                <path className="fill-black" d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"></path>
            </svg>
        </div>
    )
}