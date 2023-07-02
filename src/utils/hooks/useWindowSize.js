import { useState, useEffect } from 'react';

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
        isSmallScreen: false,
        isMediumScreen: false,
        isLargeScreen: false,
    });

    useEffect(() => {
        function handleResize() {
            const { innerWidth: width, innerHeight: height } = window;
            setWindowSize({
                width,
                height,
                isSmallScreen: width <= 425,
                isMediumScreen: width <= 768,
                isLargeScreen: width > 1024,
            });
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}

export default useWindowSize;