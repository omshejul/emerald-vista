// This hook file can be placed in a hooks folder
import { useEffect, useState, RefObject } from 'react';

interface UseOnScreenProps {
    ref: RefObject<HTMLElement>;
    rootMargin?: string;
}

interface IntersectionEntry {
    isIntersecting: boolean;
}

const useOnScreen = ({ ref, rootMargin = '0px' }: UseOnScreenProps) => {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]: IntersectionEntry[]) => {
                setIntersecting(entry.isIntersecting);
            },
            {
                rootMargin,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [ref, rootMargin]); // Dependency array

    return isIntersecting;
};

export default useOnScreen;
