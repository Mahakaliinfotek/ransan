// import { useState } from "react";
// import { Box, Typography, useMediaQuery } from "@mui/material";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

// // Image imports
// import Banner1 from "../../assets/images/banner1.webp";
// import Banner2 from "../../assets/images/banner2.webp";
// import Banner3 from "../../assets/images/banner3.webp";
// import Banner4 from "../../assets/images/banner4.webp";
// import Banner5 from "../../assets/images/banner5.webp";
// import Banner6 from "../../assets/images/banner6.webp";
// import Banner7 from "../../assets/images/banner7.webp";
// import Banner8 from "../../assets/images/banner8.webp";
// import Banner9 from "../../assets/images/banner9.webp";
// import Banner1M from "../../assets/images/banner1M.webp";
// import Banner2M from "../../assets/images/banner2M.webp";
// import Banner3M from "../../assets/images/banner3M.webp";
// import Banner4M from "../../assets/images/banner4M.webp";
// import Banner5M from "../../assets/images/banner5M.webp";
// import Banner6M from "../../assets/images/banner6M.webp";
// import Banner7M from "../../assets/images/banner7M.webp";
// import Banner8M from "../../assets/images/banner8M.webp";
// import Banner9M from "../../assets/images/banner9M.webp";



// export default function HeroSlider() {
//     const isMobile = useMediaQuery("(max-width:600px)");
//     const [activeIndex, setActiveIndex] = useState(0);
//     const slides = [
//         // { img: isMobile ? Banner1M : Banner1, name: "MAHAKALI ESTATE" },
//         // { img: isMobile ? Banner2M : Banner2, name: "MAHAKALI UDYOG" },
//         // { img: isMobile ? Banner3M : Banner3, name: "OSHIYAMAA TRANSPORT OPERATOR" },
//         // { img: isMobile ? Banner4M : Banner4, name: "MAHAKALI INTERNATIONAL" },
//         // { img: isMobile ? Banner5M : Banner5, name: "INDIAZONA" },
//         { img: isMobile ? Banner6M : Banner6, name: "RANSAN ENTERPRISES" },
//         // { img: isMobile ? Banner7M : Banner7, name: "KRISHNA RESOURCES" },
//         // { img: isMobile ? Banner8M : Banner8, name: "MAHAKALI INFOTEK" },
//         // { img: isMobile ? Banner9M : Banner9, name: "MAHAKALI NURANI LLC, OMAN" },

//     ];

//     return (
//         <Box
//             sx={{
//                 width: "100%",
//                 height: { xs: "80vh", md: "80vh" },
//                 position: "relative",
//                 overflow: "hidden",
//             }}
//         >
//             {/* IMAGE SLIDER */}
//             <Swiper
//                 modules={[Autoplay]}
//                 autoplay={{ delay: 3000, disableOnInteraction: false }}
//                 loop={true}
//                 onSlideChange={(swiper) =>
//                     setActiveIndex(swiper.realIndex)
//                 }
//                 style={{ height: "100%" }}
//             >
//                 {slides.map((slide, index) => (
//                     <SwiperSlide key={index}>
//                         <Box
//                             sx={{
//                                 width: "100%",
//                                 // height:"100%",
//                                 aspectRatio: { xs: 0.82, md: 2.41 },
//                                 backgroundImage: `url(${slide.img})`,
//                                 backgroundSize: "cover",
//                                 backgroundPosition: "center",
//                                 filter: "brightness(0.85)",
//                             }}
//                         />
//                     </SwiperSlide>
//                 ))}
//             </Swiper>

//             <Box
//                 sx={{
//                     position: "absolute",
//                     top: "50%",
//                     left: "50%",
//                     transform: "translate(-50%, -50%)",
//                     width: "100%",
//                     color: "white",
//                     textAlign: "center",
//                     zIndex: 20,
//                     px: 2,
//                 }}
//             >
//                 <Box
//                     sx={{
//                         display: "flex",
//                         flexWrap: "wrap",
//                         justifyContent: "center",
//                         alignItems: "center",
//                     }}

//                 // border={1}
//                 >

//                     {/* FIXED LEFT PART */}
//                     <Typography
//                         sx={{
//                             fontSize: { xs: "20px", md: "30px", lg: "30px" },
//                             fontWeight: 100,
//                             letterSpacing: 1,
//                             whiteSpace: "nowrap",
//                             textShadow: "0 0 8px rgba(0,0,0,0.8)",
//                             fontFamily: "IBM Plex Sans"
//                         }}
//                     >
//                         THE MAHAKALI GROUP |
//                     </Typography>

//                     {/* DYNAMIC RIGHT PART */}
//                     <Typography
//                         sx={{
//                             fontSize: { xs: "22px", md: "40px", lg: "40px" },
//                             fontWeight: 500,
//                             letterSpacing: 1,
//                             ml: 1,
//                             // maxWidth: "700px",
//                             textAlign: "center",
//                             lineHeight: 1.1,
//                             wordBreak: "break-word",
//                             textShadow: "0 0 8px rgba(0,0,0,0.8)",
//                             fontFamily: "IBM Plex Sans",

//                         }}
//                     // border={1}
//                     >
//                         {slides[activeIndex].name}
//                     </Typography>
//                 </Box>
//             </Box>









//         </Box>
//     );
// }


import { useEffect, useRef, useState } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import home_DV from "../../assets/images/home_dv.webp";
import home_mv from "../../assets/images/home_mv.webp";

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
                        <Typography
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
                        </Typography>

                        <Typography
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


                        </Typography>
                    </Box>


                </Container>
            </Box>
        </Box>
    );
};

export default HeroSlider;
