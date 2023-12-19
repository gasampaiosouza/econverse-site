import { useState, useEffect } from 'react'

type WindowSize = {
	width: number | undefined
	height: number | undefined
}

export function useResponsivity() {
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	} as WindowSize)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const handleResize = () => {
				setWindowSize({
					width: window.innerWidth,
					height: window.innerHeight,
				})
			}

			window.addEventListener('resize', handleResize)

			handleResize()

			return () => window.removeEventListener('resize', handleResize)
		}
	}, [])

	return { isMobile: (windowSize?.width || 0) < 800 }
}
