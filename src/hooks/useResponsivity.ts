import { useState, useEffect } from 'react'

export function useResponsivity() {
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	})

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

	return { isMobile: windowSize.width < 800 }
}
