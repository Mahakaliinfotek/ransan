import { Box, Typography, Paper } from "@mui/material";
import AshokaPulp from "../assets/images/Ashoka-Pulp-Paper-Main-logo.png";
import Dalmia from "../assets/images/Dalmia.png";
import Dhunseri from "../assets/images/Dhunseri.png";
import Dima from "../assets/images/Dima.png";
import Ellenbarie from "../assets/images/Ellenbarie.png";
import Goodricke from "../assets/images/goodricke_group_limited_logo.png";
import Grobtea from "../assets/images/grob tea.png";
import LONGVIEW from "../assets/images/LONGVIEW.png";
import Yule from "../assets/images/Yule.png";




const clientsList = [
    {
        name: "",
        logo: AshokaPulp,

    },
    {
        name: "",
        logo: Dalmia,
    },
    {
        name: "",
        logo: Dhunseri,
    },
    {
        name: "",
        logo: Dima,
    },
    {
        name: "",
        logo: Ellenbarie,
    },
    {
        name: "",
        logo: Goodricke,
    },
    {
        name: "",
        logo: Grobtea,
    },
    {
        name: "",
        logo: LONGVIEW
    },
    {
        name: "Dhendia tea",
        logo: ""
    },
    {
        name: "Makrapara tea",
        logo: ""
    },
    {
        name: "Singhania tea",
        logo: ""
    },
    {
        name: "Ranichera tea",
        logo: ""
    },
    {
        name: "Kuchli Bari tea",
        logo: ""
    },
    {
        name: "Looksan tea",
        logo: ""
    },
    {
        name: "Mech para tea",
        logo: ""
    },
    {
        name: "Zurantee tea",
        logo: ""
    },
    {
        name: "GairKhata tea",
        logo: ""
    },

    {
        name: "Atiabari tea",
        logo: ""
    },
];

export default function ClientsComponent() {

    return (
        <Box
            sx={{
                backgroundColor: "#fff",

                width: "100%",
            //    maxWidth: "1400px",
                mx: "auto",
                px: { xs: 2, md: 6 },
                py: { xs: 2, md: 2 },
            }}
        >

            <Typography
                sx={{
                    fontSize: { xs: "28px", md: "40px" },
                    fontWeight: 700,
                    textAlign: "center",
                    mb: 5,
                  fontFamily: "Manrope !important",
                    color: "#0A0F1C",
                }}
            >
                Our Clients
            </Typography>


            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "repeat(2, 1fr)",
                        sm: "repeat(3, 1fr)",
                        md: "repeat(4, 1fr)",
                    },
                    gap: { xs: 2, md: 3 },
                }}
            >
                {clientsList.map((client, index) => {
                    const showLogo = !client.name;
                    return (
                        <Paper
                            key={index}
                            elevation={0}
                            sx={{
                                p: 1,
                                borderRadius: "14px",
                                border: "1px solid #E6E8EC",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                            }}
                        >
                            {/* If name is empty → show logo */}
                            {showLogo && (
                                <Box
                                    component="img"
                                    src={client.logo}
                                    alt={client.name}
                                    sx={{
                                        width: "100px",
                                        height: "100px",
                                        objectFit: "contain",
                                        mb: 2,
                                    }}
                                />
                            )}

                            {/* If name exists → show name text */}
                            {!showLogo && (
                                <Typography
                                    sx={{
                                        fontSize: "25px",
                                        fontWeight: 600,
                                      fontFamily: "Manrope !important",
                                        color: "#0A0F1C",
                                        py: 4,
                                    }}
                                >
                                    {client.name}
                                </Typography>
                            )}
                        </Paper>
                    );
                })}




            </Box>


        </Box>
    );
}
