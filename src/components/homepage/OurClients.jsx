
import { useMemo } from "react";
import { useReducedMotion } from "framer-motion";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import dalmiaLogo from "../../assets/images/clients/dalmia.webp";
import ashokaLogo from "../../assets/images/clients/ashoka.webp";
import dhunseriLogo from "../../assets/images/clients/dhunseri.webp";
import sunLogo from "../../assets/images/clients/sunlogo.webp";
import ellenbarrieLogo from "../../assets/images/clients/ellenbarrie.webp";
import goodrickeLogo from "../../assets/images/clients/goodricke.webp";
import grobTeaLogo from "../../assets/images/clients/grobtea.webp";
import longviewLogo from "../../assets/images/clients/longview.webp";

const clients = [
  {
    id: 1,
    name: "Dalmia Bharat",
    logo: dalmiaLogo,
    logoWidth: "62%",
  },
  {
    id: 2,
    name: "Dhendia Tea",
  },
  {
    id: 3,
    name: "Ashoka Pulp & Paper",
    logo: ashokaLogo,
    logoWidth: "82%",
  },
  {
    id: 4,
    name: "Makrapara Tea",
  },
  {
    id: 5,
    name: "Dhunseri Tea & Industries",
    logo: dhunseriLogo,
    logoWidth: "78%",
  },
  {
    id: 6,
    name: "Singhania Tea",
  },
  {
    id: 7,
    name: "Client",
    logo: sunLogo,
    logoWidth: "50%",
  },
  {
    id: 8,
    name: "Ranichera Tea",
  },
  {
    id: 9,
    name: "Ellenbarrie Industrial Gases Ltd",
    logo: ellenbarrieLogo,
    logoWidth: "84%",
  },
  {
    id: 10,
    name: "Kuchli Bari Tea",
  },
  {
    id: 11,
    name: "Goodricke",
    logo: goodrickeLogo,
    logoWidth: "52%",
  },
  {
    id: 12,
    name: "Looksan Tea",
  },
  {
    id: 13,
    name: "The Grob Tea Co. Ltd.",
    logo: grobTeaLogo,
    logoWidth: "76%",
  },
  {
    id: 14,
    name: "Mech Para Tea",
  },
  {
    id: 15,
    name: "Longview Tea",
    logo: longviewLogo,
    logoWidth: "58%",
  },
  {
    id: 16,
    name: "Zurantee Tea",
  },
  {
    id: 17,
    name: "Gairkhata Tea",
  },
  {
    id: 18,
    name: "Atiabari Tea",
  },
];

/**
 * Alternates logo and text cards separately in both marquee rows:
 *
 * Row 1: Logo → Text → Logo → Text
 * Row 2: Logo → Text → Logo → Text
 */
function createAlternatingRows(items) {
  const logoClients = items.filter((client) => Boolean(client.logo));
  const textClients = items.filter((client) => !client.logo);

  const firstRowLogos = logoClients.filter(
    (_, index) => index % 2 === 0
  );

  const secondRowLogos = logoClients.filter(
    (_, index) => index % 2 !== 0
  );

  const firstRowTexts = textClients.filter(
    (_, index) => index % 2 === 0
  );

  const secondRowTexts = textClients.filter(
    (_, index) => index % 2 !== 0
  );

  const alternateItems = (logos, texts) => {
    const result = [];
    const maximumLength = Math.max(logos.length, texts.length);

    for (let index = 0; index < maximumLength; index += 1) {
      if (logos[index]) {
        result.push(logos[index]);
      }

      if (texts[index]) {
        result.push(texts[index]);
      }
    }

    return result;
  };

  return {
    firstRow: alternateItems(firstRowLogos, firstRowTexts),
    secondRow: alternateItems(secondRowLogos, secondRowTexts),
  };
}

const Corner = ({ position }) => {
  const isTop = position.includes("top");
  const isLeft = position.includes("left");

  return (
    <Box
      sx={{
        position: "absolute",
        top: isTop ? { xs: 8, md: 14 } : "auto",
        bottom: !isTop ? { xs: 8, md: 14 } : "auto",
        left: isLeft ? { xs: 8, md: 14 } : "auto",
        right: !isLeft ? { xs: 8, md: 14 } : "auto",

        width: {
          xs: 7,
          md: 8,
        },

        height: {
          xs: 7,
          md: 8,
        },

        borderColor: "#A58AAF",
        borderStyle: "solid",
        borderWidth: 0,
        borderTopWidth: isTop ? "2px" : 0,
        borderBottomWidth: !isTop ? "2px" : 0,
        borderLeftWidth: isLeft ? "2px" : 0,
        borderRightWidth: !isLeft ? "2px" : 0,
        pointerEvents: "none",
      }}
    />
  );
};

const ClientCard = ({ client }) => {
  return (
    <Box
      sx={{
        position: "relative",

        width: {
          xs: 150,
          sm: 190,
          md: 220,
        },

        height: {
          xs: 105,
          sm: 125,
          md: 150,
        },

        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        px: {
          xs: 1.5,
          sm: 2,
          md: 2.5,
        },

        py: {
          xs: 1.5,
          md: 2,
        },

        bgcolor: "#FFFFFF",
        border: "1px solid #E5E3E6",
        overflow: "hidden",

        transition:
          "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",

        "&:hover": {
          transform: "translateY(-3px)",
          borderColor: "#CDBED2",
          boxShadow: "0 12px 28px rgba(45, 26, 50, 0.08)",
        },

        "&:hover .client-logo": {
          transform: "scale(1.04)",
        },
      }}
    >
      <Corner position="top-left" />
      <Corner position="top-right" />
      <Corner position="bottom-left" />
      <Corner position="bottom-right" />

      {client.logo ? (
        <Box
          component="img"
          className="client-logo"
          src={client.logo}
          alt={`${client.name} logo`}
          loading="lazy"
          sx={{
            display: "block",
            width: client.logoWidth || "70%",
            maxWidth: "100%",

            maxHeight: {
              xs: "62%",
              md: "68%",
            },

            objectFit: "contain",
            transition: "transform 180ms ease",
          }}
        />
      ) : (
        <Typography
          sx={{
            maxWidth: "90%",
            color: "#272427",
            textAlign: "center",

            fontSize: {
              xs: 12,
              sm: 14,
              md: 16,
            },

            lineHeight: 1.3,
            fontWeight: 700,
            textTransform: "uppercase",

            letterSpacing: {
              xs: "0.01em",
              md: "0.025em",
            },

            overflowWrap: "anywhere",
          }}
        >
          {client.name}
        </Typography>
      )}
    </Box>
  );
};

const MarqueeRow = ({
  clients: rowClients,
  reverse = false,
  reducedMotion,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",

        "&:hover .our-clients-track": {
          animationPlayState: "paused",
        },
      }}
    >
      <Box
        className="our-clients-track"
        sx={{
          display: "flex",
          width: "max-content",
          willChange: "transform",

          animation: reducedMotion
            ? "none"
            : `${reverse
              ? "ourClientsMarqueeReverse"
              : "ourClientsMarquee"
            } 32s linear infinite`,

          "@keyframes ourClientsMarquee": {
            from: {
              transform: "translateX(0)",
            },
            to: {
              transform: "translateX(-50%)",
            },
          },

          "@keyframes ourClientsMarqueeReverse": {
            from: {
              transform: "translateX(-50%)",
            },
            to: {
              transform: "translateX(0)",
            },
          },
        }}
      >
        {[0, 1].map((copy) => (
          <Box
            key={copy}
            aria-hidden={copy === 1 ? "true" : undefined}
            sx={{
              display: "flex",
              flexShrink: 0,

              gap: {
                xs: 1,
                sm: 1.5,
                md: 2.2,
              },

              pr: {
                xs: 1,
                sm: 1.5,
                md: 2.2,
              },
            }}
          >
            {rowClients.map((client) => (
              <ClientCard
                key={`${copy}-${client.id}`}
                client={client}
              />
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const OurClients = () => {
  const reducedMotion = useReducedMotion();

  const { firstRow, secondRow } = useMemo(
    () => createAlternatingRows(clients),
    []
  );

  return (
    <Box
      component="section"
      id="our-clients"
      sx={{
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "100%",

          px: {
            xs: 0,
            sm: 0,
            md: 4,
          },

          pt: {
            xs: 5,
            sm: 6,
            md: 5,
          },

          pb: {
            xs: 6,
            sm: 8,
            md: 7,
          },
        }}
      >
        <Typography
          component="h2"
          sx={{
            mb: {
              xs: 4,
              sm: 4.5,
              md: 6,
            },

            px: {
              xs: 2.5,
              sm: 3.5,
              md: 5,
            },

            color: "#242124",

            textAlign: {
              xs: "left",
              md: "center",
            },

            fontSize: {
              xs: 21,
              sm: 26,
              md: 34,
            },

            lineHeight: 1.1,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
          }}
        >
          Our Clients
        </Typography>

        <Box
          sx={{
            display: "grid",

            gap: {
              xs: 1.6,
              md: 3,
            },
          }}
        >
          <MarqueeRow
            clients={firstRow}
            reducedMotion={reducedMotion}
          />

          <MarqueeRow
            clients={secondRow}
            reverse
            reducedMotion={reducedMotion}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default OurClients;