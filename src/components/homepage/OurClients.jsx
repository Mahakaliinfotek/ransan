import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

// Replace these imports with your actual client logo paths.
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
    name: "Ashoka Pulp & Paper",
    logo: ashokaLogo,
    logoWidth: "82%",
  },
  {
    id: 3,
    name: "Dhunseri Tea & Industries",
    logo: dhunseriLogo,
    logoWidth: "78%",
  },
  {
    id: 4,
    name: "Client",
    logo: sunLogo,
    logoWidth: "50%",
  },
  {
    id: 5,
    name: "Ellenbarrie Industrial Gases Ltd",
    logo: ellenbarrieLogo,
    logoWidth: "84%",
  },
  {
    id: 6,
    name: "Goodricke",
    logo: goodrickeLogo,
    logoWidth: "52%",
  },
  {
    id: 7,
    name: "The Grob Tea Co. Ltd.",
    logo: grobTeaLogo,
    logoWidth: "76%",
  },
  {
    id: 8,
    name: "Longview Tea",
    logo: longviewLogo,
    logoWidth: "58%",
  },
  {
    id: 9,
    name: "Dhendia Tea",
  },
  {
    id: 10,
    name: "Makrapara Tea",
  },
  {
    id: 11,
    name: "Singhania Tea",
  },
  {
    id: 12,
    name: "Ranichera Tea",
  },
  {
    id: 13,
    name: "Kuchli Bari Tea",
  },
  {
    id: 14,
    name: "Looksan Tea",
  },
  {
    id: 15,
    name: "Mech Para Tea",
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
        minWidth: 0,
        aspectRatio: {
          xs: "1 / 1.08",
          sm: "1 / 1",
          md: "1.32 / 1",
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: {
          xs: 1,
          sm: 1.5,
          md: 2,
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
      }}
    >
      <Corner position="top-left" />
      <Corner position="top-right" />
      <Corner position="bottom-left" />
      <Corner position="bottom-right" />

      {client.logo ? (
        <Box
          component="img"
          src={client.logo}
          alt={client.name}
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

            ".MuiBox-root:hover &": {
              transform: "scale(1.03)",
            },
          }}
        />
      ) : (
        <Typography
          sx={{
            maxWidth: "100%",
            color: "#272427",
            textAlign: "center",
            fontSize: {
              xs: 10,
              sm: 12,
              md: 15,
              lg: 16,
            },
            lineHeight: 1.25,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: {
              xs: "0.01em",
              md: "0.025em",
            },
            wordBreak: "break-word",
          }}
        >
          {client.name}
        </Typography>
      )}
    </Box>
  );
};

const OurClients = () => {
  return (
    <Box
      component="section"
      sx={{
        // bgcolor: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1220px",
          px: {
            xs: 2.5,
            sm: 3.5,
            md: 5,
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
            gridTemplateColumns: {
              xs: "repeat(4, minmax(0, 1fr))",
              sm: "repeat(4, minmax(0, 1fr))",
              md: "repeat(5, minmax(0, 1fr))",
            },
            gap: {
              xs: 1,
              sm: 1.5,
              md: 2.2,
            },
            alignItems: "stretch",
          }}
        >
          {clients.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default OurClients;