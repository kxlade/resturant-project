import { useEffect, useRef, useState } from "react";
import "./Reveal.css";

const Reveal = ({
    children,
    className = "",
    as: Component = "div",
    delay = 0,
    threshold = 0.15,
    rootMargin = "0px 0px -10% 0px",
}) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;
        if (typeof IntersectionObserver === "undefined") {
            // defer state update to avoid calling setState synchronously within effect
            const id = setTimeout(() => setIsVisible(true), 0);
            return () => clearTimeout(id);
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(element);
                }
            },
            { threshold, rootMargin },
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    return (
        <Component
            ref={ref}
            className={`reveal ${isVisible ? "reveal--visible" : ""} ${className}`.trim()}
            style={{ "--reveal-delay": `${delay}ms` }}
        >
            {children}
        </Component>
    );
};

export default Reveal;
