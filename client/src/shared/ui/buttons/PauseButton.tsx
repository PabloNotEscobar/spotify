interface PauseButtonProps {
    playHandler: () => void
    circleDiameter?: string
    iconSize?: string
    color?: string
    animation?: string
}

export function PauseButton ({ playHandler, circleDiameter = '48', iconSize = '24', color = '#22C55E', animation}: PauseButtonProps) {
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
                <path className="fill-black" d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606"></path>
            </svg>
        </div>
    )
}