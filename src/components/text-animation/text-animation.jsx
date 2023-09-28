import React, {useEffect, useState} from 'react';
import './text-animation.css'
import {useInView} from 'react-intersection-observer';

function TextAnimation({text, typingSpeed, classAtt, tagName, startDelay}) {
    const [displayedText, setDisplayedText] = useState('');
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    useEffect(() => {
        let currentIndex = 0;
        let timeout;

        const startAnimation = () => {
            timeout = setTimeout(() => {
                const interval = setInterval(() => {
                    if (currentIndex <= text.length) {
                        setDisplayedText(text.slice(0, currentIndex));
                        currentIndex++;
                    } else {
                        clearInterval(interval);
                    }
                }, typingSpeed);
            }, startDelay);
        };

        if (inView) {
            startAnimation();
        } else {
            // Clear the timeout if the component goes out of view before starting
            clearTimeout(timeout);
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [inView, text, typingSpeed, startDelay]);

    // Use the tagName parameter to determine the HTML tag to render
    const Tag = tagName || 'p'; // Default to 'p' if tagName is not provided

    return <Tag className={classAtt || ""} ref={ref}>{displayedText}</Tag>;

}

export default TextAnimation;
