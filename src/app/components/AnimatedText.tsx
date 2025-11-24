import React from 'react';

interface AnimatedTextProps {
    text: string;
    className?: string;
    animation?: string;
    baseDelay?: number;
    delayStep?: number;
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
    text,
    className = '',
    animation = 'fade-up',
    baseDelay = 0,
    delayStep = 50,
    tag: Tag = 'div',
}) => {
    return (
        <Tag className={className} aria-label={text}>
            {text.split('').map((char, index) => (
                <span
                    key={index}
                    data-aos={animation}
                    data-aos-delay={baseDelay + index * delayStep}
                    style={{ display: 'inline-block', whiteSpace: 'pre' }}
                >
                    {char}
                </span>
            ))}
        </Tag>
    );
};

export default AnimatedText;
