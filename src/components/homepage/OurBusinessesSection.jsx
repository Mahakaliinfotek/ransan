import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
const MotionBox = motion.create(Box);

import logo1 from "../../assets/images/business/mupl.png";
import logo2 from "../../assets/images/business/oto.png";
import logo3 from "../../assets/images/business/iz.png";
import logo4 from "../../assets/images/business/mi.png";
import logo5 from "../../assets/images/business/minter.png";
import logo6 from "../../assets/images/business/rse.png";
import logo7 from "../../assets/images/business/me.png";
import logo8 from "../../assets/images/business/kp.png";
import logo9 from "../../assets/images/business/mun.png";

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 55,
    scale: 0.94,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


const businesses = [
  {
    id: "mahakali-group",
    logo: logo1,
    alt: "Mahakali Group",
    description:
      "Four decades of trusted coal and coke solutions since 1984.",
    path: "https://www.mahakaliudyog.com/",
  },
  {
    id: "oto",
    logo: logo2,
    alt: "OTO",
    description:
      "End-to-end bulk logistics and stevedoring experts across India’s East Coast.",
    path: "https://otovizag.com/",
  },
  {
    id: "indiazona",
    logo: logo3,
    alt: "Indiazona",
    description:
      "Where buyers discover more and sellers grow faster",
    path: "https://indiazona.in",
  },
  {
    id: "mahakali-infotech",
    logo: logo4,
    alt: "Mahakali Infotech",
    description:
      "Building reliable digital systems that power business growth.",
    path: "https://mahakaliinfotek.com/",
  },
  {
    id: "mahakali-international",
    logo: logo5,
    alt: "Mahakali International",
    description:
      "Reliable coke supply with precise screening for steel industries.",
    path: "https://mahakaliinternational.com/",
  },
  {
    id: "rse",
    logo: logo6,
    alt: "RSE",
    description:
      "Powering industries with reliable coal solutions since 2003.",
    path: "https://ransanenterprises.com/",
  },
  // {
  //   id: "mahakali-estate",
  //   logo: logo7,
  //   alt: "Mahakali Estate",
  //   description:
  //     "Turning land into productive and sustainable assets.",
  //   path: "https://mahakaliestate.com/",
  // },
  // {
  //   id: "kr",
  //   logo: logo8,
  //   alt: "KR",
  //   description:
  //     "Reliable coal supply from Indonesia with consistent quality.",
  //   path: "https://krishnaresource.com/",
  // },
  {
    id: "mun",
    logo: logo9,
    alt: "MUN LLC Oman",
    description:
      "Reliable limestone and minerals supply from Oman.",
    path: "https://munminmet.om/",
  },
];

const BusinessCard = ({ business }) => {
  return (
    <Box
      sx={{
        position: "relative",
        minWidth: 0,
        borderRadius: {
          xs: "8px",
          md: "26px",
        },

        "&::before": {
          content: '""',
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: {
            xs: 0,
            md: "-10px",
          },
          borderRadius: "inherit",
          backgroundColor: "#42104F",
          opacity: {
            xs: 0,
            md: 0,
          },
          transform: {
            xs: "none",
            md: "translateY(-6px)",
          },
          transition:
            "opacity 0.3s ease, transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
          pointerEvents: "none",
        },

        "&:hover::before": {
          opacity: {
            md: 1,
          },
          transform: {
            md: "translateY(0)",
          },
        },
      }}
    >
      <Box
        component={Link}
        to={business.path}
        sx={{
          position: "relative",
          zIndex: 1,

          minHeight: {
            xs: 68,
            sm: 78,

          },

          display: {
            xs: "grid",
            md: "flex",
          },

          gridTemplateColumns: {
            xs: "96px minmax(0, 1fr) auto",
            sm: "110px minmax(0, 1fr) auto",
          },

          flexDirection: {
            md: "column",
          },

          alignItems: {
            xs: "center",
            md: "flex-start",
          },

          gap: {
            xs: 2,
            md: 0,
          },

          px: {
            xs: 1.3,
            sm: 1.8,
            md: 3.2,
          },

          py: {
            xs: 1.3,
            sm: 1.6,
            md: 2.8,
          },

          border: "1px solid #E4E4E4",

          borderRadius: {
            xs: "8px",
            md: "26px",
          },

          backgroundColor: "#FFFFFF",
          color: "#202124",
          textDecoration: "none",

          transform: "translateY(0)",

          transition:
            "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.3s ease, box-shadow 0.3s ease",

          "&:hover": {
            transform: {
              md: "translateY(0px)",
            },
            borderColor: {
              md: "#42104F",
            },
            boxShadow: {
              md: "0 10px 22px rgba(0, 90, 11, 0.08)",
            },
          },

          "&:hover .business-arrow": {
            transform: "translateX(4px)",
          },

          "&:hover .business-logo": {
            transform: {
              md: "translateY(-2px)",
            },
          },
        }}
      >
        <Box
          className="business-logo"
          sx={{
            width: {
              xs: 94,
              sm: 108,
              md: 130,
            },

            height: {
              xs: 48,
              sm: 52,
              md: 52,
            },

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            //  px: 1.3,
            mb: {
              md: 2.5,
            },

            transition: "transform 0.3s ease",
          }}
        >
          <Box
            component="img"
            src={business.logo}
            alt={business.alt}
            sx={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Box>

        <Typography
          sx={{
            color: "#000000",
            fontFamily: 'IBM Plex Sans',

            fontSize: {
              xs: 12.5,
              sm: 14,
              md: 19,
            },

            lineHeight: {
              xs: 1.35,
              md: 1.5,
            },

            fontWeight: 400,

            pr: {
              xs: 1,
              md: 0,
            },

            mb: {
              md: 2,
            },
          }}
        >
          {business.description}
        </Typography>

        <Box
          sx={{
            mt: {
              md: "auto",
            },

            display: "inline-flex",
            alignItems: "center",

            gap: {
              xs: 0.6,
              md: 1,
            },

            color: {
              xs: "#075A12",
              md: "#111111",
            },

            whiteSpace: "nowrap",
          }}
        >
          <Typography
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },

              fontFamily: 'IBM Plex Sans',

              fontSize: {
                sm: 9,
                md: 18,
              },

              lineHeight: 1,
              fontWeight: 600,
            }}
          >
            <Box
              component="span"
              sx={{
                display: {
                  xs: "none",
                  md: "inline",
                },
              }}
            >
              Click to{" "}
            </Box>

            Read More
          </Typography>

          <ArrowForwardIosRoundedIcon
            className="business-arrow"
            sx={{
              fontSize: {
                xs: 11,
                md: 14,
              },
              transition: "transform 0.3s ease",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
const OurBusinessesSection = ({
  scrollMarginTop = { xs: "20vh", md: 0 },
}) => {
  const reducedMotion = useReducedMotion();

  return (
    <Box
      id="businesses"
      component="section"
      sx={{
        py: {
          xs: 5,
          sm: 7,
          md: 5,
        },
        scrollMarginTop,
        fontFamily: '"IBM Plex Sans", sans-serif',
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          px: {
            xs: 2.8,
            sm: 4,
          },
        }}
      >
        <MotionBox
          initial={
            reducedMotion
              ? false
              : {
                opacity: 0,
                y: 35,
              }
          }
          whileInView={
            reducedMotion
              ? {}
              : {
                opacity: 1,
                y: 0,
              }
          }
          viewport={{
            once: false,
            amount: 0.4,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          sx={{
            mb: {
              xs: 4,
              md: 5.5,
            },
            textAlign: {
              xs: "left",
              md: "center",
            },
          }}
        >
          <Typography
            component="h2"
            sx={{
              mb: {
                xs: 1.5,
                md: 1.3,
              },
              color: "#202124",
              fontFamily: '"IBM Plex Sans", sans-serif',
              fontSize: {
                xs: 21,
                sm: 28,
                md: 34,
              },
              lineHeight: 1.15,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
            }}
          >
            Our Businesses
          </Typography>

          <Typography
            sx={{
              mx: {
                xs: 0,
                md: "auto",
              },
              color: "#292929",
              fontFamily: '"IBM Plex Sans", sans-serif',
              fontSize: {
                xs: 13,
                sm: 15,
                md: 18,
              },
              lineHeight: 1.45,
              fontWeight: 400,
            }}
          >
            Discover the diverse ventures we operate, each built with quality,
            innovation, and customer commitment at its core.
          </Typography>
        </MotionBox>

        <MotionBox
          variants={reducedMotion ? undefined : gridVariants}
          initial={reducedMotion ? false : "hidden"}
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{
            once: false,
            amount: 0.12,
          }}
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(3, minmax(0, 1fr))",
            },
            gap: {
              xs: 1.3,
              sm: 1.7,
              md: 2,
            },
          }}
        >
          {businesses.map((business) => (
            <MotionBox
              key={business.id}
              variants={reducedMotion ? undefined : cardVariants}
              sx={{
                minWidth: 0,
                height: "100%",
              }}
            >
              <BusinessCard business={business} />
            </MotionBox>
          ))}
        </MotionBox>
      </Container>
    </Box>
  );
};
export default OurBusinessesSection;
