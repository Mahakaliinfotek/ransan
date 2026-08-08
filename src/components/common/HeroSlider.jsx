
import { useEffect, useRef, useState } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import home_DV from "../../assets/images/home_dv.webp";
import home_mv from "../../assets/images/home_mv.webp";
import { motion } from "framer-motion";

const MotionTypography = motion.create(Typography);

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 100,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};
const statistics = [
    {
        value: 12,
        decimals: 0,
        suffix: "+ Million",
        label: "Geological Reserves (Tons)",
    },
    {
        value: 1.2,
        decimals: 1,
        suffix: " MTPA",
        label: "Production Capacity",
    },
    {
        value: 5,
        decimals: 0,
        suffix: "M",
        label: "TONS READY STOCK",
    },
];

const CountUpNumber = ({
    value,
    decimals = 0,
    suffix = "",
    duration = 1800,
}) => {
    const numberRef = useRef(null);
    const hasAnimatedRef = useRef(false);
    const animationFrameRef = useRef(null);

    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const element = numberRef.current;

        if (!element) return;

        const startAnimation = () => {
            if (hasAnimatedRef.current) return;

            hasAnimatedRef.current = true;

            const startTime = performance.now();

            const animate = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Smooth ease-out
                const easedProgress = 1 - Math.pow(1 - progress, 3);

                setDisplayValue(value * easedProgress);

                if (progress < 1) {
                    animationFrameRef.current =
                        window.requestAnimationFrame(animate);
                } else {
                    setDisplayValue(value);
                }
            };

            animationFrameRef.current =
                window.requestAnimationFrame(animate);
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    startAnimation();
                    observer.unobserve(element);
                }
            },
            {
                threshold: 0.1,
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();

            if (animationFrameRef.current) {
                window.cancelAnimationFrame(
                    animationFrameRef.current
                );
            }
        };
    }, [value, duration]);

    return (
        <Box
            component="span"
            ref={numberRef}
            sx={{
                display: "inline-block",
                minWidth: "max-content",
            }}
        >
            {displayValue.toFixed(decimals)}
            {suffix}
        </Box>
    );
};

const HeroSlider = () => {
    return (
        <Box
            id="home"
            component="section"
            sx={{
                px: {
                    xs: 1.5,
                    sm: 2.5,
                },
                pt: {
                    xs: 1.5,
                    md: 2.5,
                },
                pb: {
                    xs: 4,
                    md: 5,
                },
            }}
        >
            <Box
                sx={{
                    position: "relative",

                    minHeight: {
                        xs: 650,
                        sm: 720,
                        md: 720,
                        lg: 760,
                    },

                    borderRadius: {
                        xs: "20px",
                        md: "24px",
                    },

                    overflow: "hidden",

                    backgroundImage: {
                        xs: `url("${home_mv}")`,

                        md: ` url("${home_DV}")
            `,
                    },

                    backgroundSize: "cover",

                    backgroundPosition: {
                        xs: "62% center",
                        sm: "58% center",
                        md: "center center",
                    },

                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* Light overlay */}
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        pointerEvents: "none",

                        background:
                            "linear-gradient(180deg, rgba(255,255,255,0.03) 55%, rgba(0,49,31,0.08) 100%)",
                    }}
                />

                <Container
                    maxWidth="xl"
                    sx={{
                        position: "relative",
                        zIndex: 1,
                        height: "100%",
                        minHeight: "inherit",

                        px: {
                            md: 8,
                            lg: 10,
                        },
                    }}
                >
                    {/* Hero heading */}
                    <Box
                        sx={{
                            pt: {
                                xs: 10,
                                sm: 9,
                                md: 13,
                                lg: 15,
                            },

                            maxWidth: {
                                xs: "100%",
                                sm: "100%",
                                md: 610,
                            },

                            mx: {
                                xs: "auto",
                                md: 0,
                            },

                            px: {
                                xs: 2,
                                md: 0,
                            },

                            textAlign: {
                                xs: "center",
                                md: "left",
                            },
                        }}
                    >
                        <MotionTypography
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            variants={fadeUp}
                            sx={{
                                mb: {
                                    xs: 1.5,
                                    md: 2.5,
                                },

                                color: "#151515",

                                fontFamily:
                                    '"IBM Plex Sans", sans-serif',

                                fontSize: {
                                    xs: 14,
                                    sm: 16,
                                    md: 18,
                                },

                                fontWeight: 500,
                                lineHeight: 1.4,
                                letterSpacing: "0.01em",
                                textTransform: "uppercase",
                            }}
                        >
                            THE MAHAKALI GROUP
                        </MotionTypography>

                        <MotionTypography
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 120,
                                },

                                visible: {
                                    opacity: 1,
                                    y: 0,

                                    transition: {
                                        duration: 0.9,
                                        delay: 0.15,
                                        ease: [0.25, 0.1, 0.25, 1],
                                    },
                                },
                            }}
                            component="h1"
                            sx={{
                                m: 0,

                                color: "#050505",

                                fontFamily:
                                    '"IBM Plex Sans", sans-serif',

                                fontSize: {
                                    xs: 22,
                                    sm: 18,
                                    md: 45,
                                    lg: 45,
                                },

                                lineHeight: {
                                    xs: 1.15,
                                    md: 1.08,
                                },

                                fontWeight: 600,

                                letterSpacing: {
                                    xs: "-0.025em",
                                    md: "-0.035em",
                                },

                                textTransform: "uppercase",

                                whiteSpace: {
                                    xs: "nowrap",
                                    md: "normal",
                                },
                            }}
                        >
                            RAN SAN ENTERPRISES


                        </MotionTypography>
                    </Box>


                </Container>
            </Box>
        </Box>
    );
};

export default HeroSlider;
