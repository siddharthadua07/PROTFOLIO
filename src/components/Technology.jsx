import React from 'react';
import styles from './Technology.module.css';

const Technology = () => {
    const techStack = [
        // Marketing Tools
        {
            name: 'Google Ads',
            icon: (
                <svg className={styles.techIcon} viewBox="0 0 48 48" fill="none">
                    <rect width="48" height="48" rx="8" fill="#4285F4" />
                    <path d="M24 12v24M12 24h24" stroke="white" strokeWidth="4" strokeLinecap="round" />
                </svg>
            )
        },
        {
            name: 'Meta Ads',
            icon: (
                <svg className={styles.techIcon} viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="20" fill="#1877F2" />
                    <path d="M26 18h4v-4h-4c-3.3 0-6 2.7-6 6v2h-4v4h4v12h4V26h4l1-4h-5v-2c0-1.1.9-2 2-2z" fill="white" />
                </svg>
            )
        },
        {
            name: 'HubSpot',
            icon: (
                <svg className={styles.techIcon} viewBox="0 0 48 48" fill="none">
                    <rect width="48" height="48" rx="8" fill="#FF6B35" />
                    <path d="M14 24c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10" stroke="white" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="24" cy="24" r="4" fill="white" />
                </svg>
            )
        },
        {
            name: 'Mailchimp',
            icon: (
                <svg className={styles.techIcon} viewBox="0 0 48 48" fill="none">
                    <rect width="48" height="48" rx="8" fill="#FFE01B" />
                    <path d="M16 16h16v16H16z" fill="#000" />
                    <path d="M20 20h8v8h-8z" fill="#FFE01B" />
                </svg>
            )
        },
        {
            name: 'Analytics',
            icon: (
                <svg className={styles.techIcon} viewBox="0 0 48 48" fill="none">
                    <rect width="48" height="48" rx="8" fill="#00C853" />
                    <path d="M14 34l6-6 4 4 10-14 6 6" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            name: 'Semrush',
            icon: (
                <svg className={styles.techIcon} viewBox="0 0 48 48" fill="none">
                    <rect width="48" height="48" rx="8" fill="#7B68EE" />
                    <path d="M24 12l12 6v12l-12 6-12-6V18l12-6z" stroke="white" strokeWidth="2" />
                    <path d="M24 24v12M12 18l12 6 12-6" stroke="white" strokeWidth="2" />
                </svg>
            )
        },
        // Design Tools
        {
            name: 'Figma',
            icon: (
                <svg className={styles.techIcon} viewBox="0 0 48 48" fill="none">
                    <rect width="48" height="48" rx="8" fill="#F24E1E" />
                    <circle cx="18" cy="14" r="6" fill="white" />
                    <circle cx="30" cy="14" r="6" fill="#FF7262" />
                    <circle cx="18" cy="26" r="6" fill="#A259FF" />
                    <rect x="24" y="20" width="12" height="12" rx="6" fill="#1ABCFE" />
                    <circle cx="18" cy="38" r="6" fill="#0ACF83" />
                </svg>
            )
        },
        {
            name: 'Photoshop',
            icon: (
                <svg className={styles.techIcon} viewBox="0 0 48 48" fill="none">
                    <rect width="48" height="48" rx="8" fill="#001E36" />
                    <path d="M10 38V10h8l6 20 6-20h8v28h-6V18l-6 20h-4l-6-20v20h-6z" fill="#31A8FF" />
                </svg>
            )
        },
        {
            name: 'Illustrator',
            icon: (
                <svg className={styles.techIcon} viewBox="0 0 48 48" fill="none">
                    <rect width="48" height="48" rx="8" fill="#330000" />
                    <path d="M14 14h20l-4 20H18l-4-20zm6 8h8" stroke="#FF9A00" strokeWidth="2" />
                </svg>
            )
        },
        {
            name: 'Canva',
            icon: (
                <svg className={styles.techIcon} viewBox="0 0 48 48" fill="none">
                    <rect width="48" height="48" rx="8" fill="#00C4CC" />
                    <circle cx="24" cy="24" r="12" fill="white" />
                    <path d="M20 20l8 4-8 4v-8z" fill="#00C4CC" />
                </svg>
            )
        },
        {
            name: 'Framer',
            icon: (
                <svg className={styles.techIcon} viewBox="0 0 48 48" fill="none">
                    <rect width="48" height="48" rx="8" fill="#000" />
                    <rect x="12" y="12" width="10" height="10" rx="2" fill="#fff" />
                    <rect x="26" y="12" width="10" height="10" rx="2" fill="#fff" />
                    <rect x="12" y="26" width="10" height="10" rx="2" fill="#fff" />
                    <rect x="26" y="26" width="10" height="10" rx="2" fill="#fff" />
                </svg>
            )
        },
        {
            name: 'Dribbble',
            icon: (
                <svg className={styles.techIcon} viewBox="0 0 48 48" fill="none">
                    <rect width="48" height="48" rx="8" fill="#EA4C89" />
                    <circle cx="24" cy="24" r="12" fill="white" />
                    <circle cx="24" cy="24" r="6" fill="#EA4C89" />
                </svg>
            )
        },
        // Development Tools
        {
            name: 'React',
            icon: (
                <svg className={styles.techIcon} viewBox="0 0 48 48" fill="none">
                    <rect width="48" height="48" rx="8" fill="#61DAFB" />
                    <circle cx="24" cy="24" r="4" fill="#20232A" />
                    <ellipse cx="24" cy="24" rx="16" ry="6" stroke="#20232A" strokeWidth="2" fill="none" />
                    <ellipse cx="24" cy="24" rx="16" ry="6" stroke="#20232A" strokeWidth="2" fill="none" transform="rotate(60 24 24)" />
                    <ellipse cx="24" cy="24" rx="16" ry="6" stroke="#20232A" strokeWidth="2" fill="none" transform="rotate(120 24 24)" />
                </svg>
            )
        },
        {
            name: 'Next.js',
            icon: (
                <svg className={styles.techIcon} viewBox="0 0 48 48" fill="none">
                    <rect width="48" height="48" rx="8" fill="#000" />
                    <path d="M24 10l14 24H10l14-24z" fill="white" />
                </svg>
            )
        },
        {
            name: 'Tailwind',
            icon: (
                <svg className={styles.techIcon} viewBox="0 0 48 48" fill="none">
                    <rect width="48" height="48" rx="8" fill="#38BDF8" />
                    <path d="M14 24c0-8 6-14 10-14-2 4 0 8 4 10-6 1-10 6-10 10 0-8 6-8 10-6-4 0-8 1-10 6 0-4 1-6 6-6H14z" fill="white" />
                </svg>
            )
        },
        {
            name: 'TypeScript',
            icon: (
                <svg className={styles.techIcon} viewBox="0 0 48 48" fill="none">
                    <rect width="48" height="48" rx="8" fill="#3178C6" />
                    <path d="M14 30v-4h20v4H14zm8-14h4v18h-4V16z" fill="white" />
                </svg>
            )
        },
        {
            name: 'Node.js',
            icon: (
                <svg className={styles.techIcon} viewBox="0 0 48 48" fill="none">
                    <rect width="48" height="48" rx="8" fill="#68A063" />
                    <path d="M24 10l14 8v16l-14 8-14-8V18l14-8z" stroke="white" strokeWidth="2" />
                    <path d="M24 26v10M17 22l7 4 7-4" stroke="white" strokeWidth="2" />
                </svg>
            )
        },
        {
            name: 'JavaScript',
            icon: (
                <svg className={styles.techIcon} viewBox="0 0 48 48" fill="none">
                    <rect width="48" height="48" rx="8" fill="#F7DF1E" />
                    <path d="M14 34l3-2c.6 1 1.1 1.8 2.4 1.8 1.2 0 2-.5 2-2.4V20h3.6v11.5c0 4-2.3 5.8-5.7 5.8-3 0-4.8-1.6-5.7-3.5l.4.2zm13 0l3-2c.8 1.2 1.8 2.1 3.6 2.1 1.5 0 2.5-.8 2.5-1.8 0-1.3-.9-1.7-2.6-2.5l-.9-.4c-2.6-1.1-4.3-2.5-4.3-5.4 0-2.7 2-4.7 5.3-4.7 2.3 0 4 .8 5.2 2.9l-2.8 1.9c-.6-1.1-1.3-1.6-2.4-1.6-1.1 0-1.8.7-1.8 1.6 0 1.1.7 1.6 2.3 2.3l.9.4c3 1.3 4.8 2.6 4.8 5.6 0 3.2-2.5 5-5.9 5-3.3 0-5.4-1.6-6.4-3.6l-.5.2z" fill="#000" />
                </svg>
            )
        },
        {
            name: 'Redux',
            icon: (
                <svg className={styles.techIcon} viewBox="0 0 48 48" fill="none">
                    <rect width="48" height="48" rx="8" fill="#764ABC" />
                    <circle cx="24" cy="24" r="6" fill="white" />
                    <path d="M24 14a10 10 0 0 1 0 20 10 10 0 0 1 0-20" stroke="white" strokeWidth="2" fill="none" />
                </svg>
            )
        },
        {
            name: 'HTML5',
            icon: (
                <svg className={styles.techIcon} viewBox="0 0 48 48" fill="none">
                    <rect width="48" height="48" rx="8" fill="#E34F26" />
                    <path d="M14 12h20l-2 22-8 4-8-4-2-22z" fill="white" />
                    <path d="M24 16v20l6-3 1.5-17H24z" fill="#E34F26" />
                </svg>
            )
        },
        {
            name: 'CSS3',
            icon: (
                <svg className={styles.techIcon} viewBox="0 0 48 48" fill="none">
                    <rect width="48" height="48" rx="8" fill="#1572B6" />
                    <path d="M14 12h20l-2 22-8 4-8-4-2-22z" fill="white" />
                    <path d="M24 16v20l6-3 1.5-17H24z" fill="#1572B6" />
                </svg>
            )
        },
        {
            name: 'Storybook',
            icon: (
                <svg className={styles.techIcon} viewBox="0 0 48 48" fill="none">
                    <rect width="48" height="48" rx="8" fill="#FF4785" />
                    <path d="M32 12l2 6-4-2-4 2 2-6-4-2 8 0 0 2zm-8 4v20l-10-10 10-10z" fill="white" />
                </svg>
            )
        }
    ];

    return (
        <section className={styles.techSection}>
            {/* Header */}
            <div className={styles.header}>
                <p className={styles.subtitle}>Tools &amp; Frameworks</p>
                <h2 className={styles.title}>Technologies I Work With</h2>
                <div className={styles.divider}></div>
            </div>

            {/* Category Labels */}
            <div className={styles.categoryContainer}>
                <span className={`${styles.categoryBadge} ${styles.marketing}`}>Marketing</span>
                <span className={`${styles.categoryBadge} ${styles.design}`}>Design</span>
                <span className={`${styles.categoryBadge} ${styles.development}`}>Development</span>
            </div>

            {/* Scrolling Tech Icons */}
            <div className={styles.scrollContainer}>
                <div className={styles.scrollTrack}>
                    {/* First set of icons */}
                    <div className={styles.scrollContent}>
                        {techStack.map((tech, index) => (
                            <div key={index} className={styles.techCard}>
                                {tech.icon}
                                <span className={styles.techName}>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                    {/* Duplicate set for seamless loop */}
                    <div className={styles.scrollContent}>
                        {techStack.map((tech, index) => (
                            <div key={`duplicate-${index}`} className={styles.techCard}>
                                {tech.icon}
                                <span className={styles.techName}>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Decoration */}
            <div className={styles.bottomDecoration}>
                <div className={`${styles.dot} ${styles.dot1}`}></div>
                <div className={`${styles.dot} ${styles.dot2}`}></div>
                <div className={`${styles.dot} ${styles.dot3}`}></div>
            </div>
        </section>
    );
};

export default Technology;