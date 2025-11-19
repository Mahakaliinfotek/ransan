import { Box, Typography } from "@mui/material";

export default function CoreOfferings() {
    const items = [
        {
            title: "Domestic & Imported Coal",
            desc: "Nagaland, Arunachal & Meghalaya coal, Indian e-auction coal from ECL & CCL alongwith imported steam coal from US, South Africa and Indonesia.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYeKYrP5bG8un8GRr7bPrSK7IopiUkRVdIIIn-XXIB4qHH4wTKaEpKm8_EBHWbA6tmV-05VGK4GmWF1VVrxe3Frc56JGOSI6Yakc8qVqWzHZ5Ze2VeJWQaPl1W2oKG1KQOZeNj4iejBE03_5nVppWGZ2N8Bxlhh5nUlf0s0gF6jY-u_orJyKGoHyFXCrHDSNKpkizgAg9CnuXwQG_cDii47clO-ALCVT9-fQTMMDdYHEGGLlY_ZvOLhOnQb8u7hNrPHNAMrGCQb8E",
        },
        {
            title: "Fuel Supply Management",
            desc: "Integrated sourcing, loading, and delivery solutions that enable nationwide coal movement from the North East to key industrial clusters.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUY3FL1b8cuJypBJnzJkcCdwUwrfaJwQDytECOgxnwENF70bEI-D3ojlRCd2srgRSgk6giGQOKSYBsS85iGyyX794VFbxv5Dbpkj9DquDaADQUvfG40JPYujYeexs0i0qZAvL6GrBs5DKOzjV8HW87GvjVNTHE0a-6ZkJoGRNmE0jzenTY8TqBh2SAQsAE8g6g3fKAf3cNNbBAPA2hT6zJ2E4d4sjL1CegOKx-TlTa51NJf4fV7tKjL7zApS4LUKCwCyrmAHykklY",
        },
        {
            title: "Consultancy",
            desc: "Advisory on procurement strategy, logistics optimization, and regulatory compliance",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeHyD8fMdzTkTOWEt4KHhnJAJozJhg9hD2yxEVmsryS45s3e-K5QNDs5FrtdJH0GbUcoHmcLuRMrkZ0FV9lj7vkJ6fS93_h_Ka4kBSkXTWu_Zlmz9LX2ilm6mCJwtZ5Z4TZpQZ2Vt6MKmIcba1c9za9_WVhhtgQEX9F823KTF0-lRNYq67lVjH4mYS3R9FjTfwvX9EOUf9Y1QhJXAQHRvXfrNZWqj0aVDevmqUN3dW-s2VgcPdGTWJB_yQPuuN2W9Y6d6zz3411JI",
        },
    ];

    return (
        <Box
            sx={{
                backgroundColor: "#fff",
                width: "100%",
                maxWidth: "1400px",
                mx: "auto",
                px: { xs: 2, md: 6 },
                py: { xs: 2, md: 1 },
            }}
        >
            {/* Section Heading */}
            <Typography
                sx={{
                    fontSize: { xs: "28px", md: "40px" },
                    fontWeight: 700,
                    mb: 4,
                    color: "#0A0F1C",
                    fontFamily: "Manrope !important",
                }}
            >
                Core Offerings
            </Typography>

            {/* Responsive Cards Container */}
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    justifyContent: { xs: "center", md: "space-between" },
                }}
            >
                {items.map((item, index) => (
                    <Box
                        key={index}
                        sx={{

                            maxWidth: { xs: "100%", md: "30%", lg: "32%" },
                        }}
                    >
                        {/* Image */}
                        <Box
                            component="img"
                            src={item.img}
                            alt={item.title}
                            sx={{

                                width: "100%",
                                height: "auto",
                                borderRadius: "16px",
                                aspectRatio: "1 / 1",
                                objectFit: "cover",
                                mb: 2,
                            }}
                        />

                        {/* Title */}
                        <Typography
                            sx={{
                                fontSize: "20px",
                                fontWeight: 700,
                                color: "#0A0F1C",
                                fontFamily: "Manrope !important",
                            }}
                        >
                            {item.title}
                        </Typography>

                        {/* Description */}
                        <Typography
                            sx={{
                                mt: 1,
                                color: "#5A6273",
                                fontSize: "15px",
                                lineHeight: 1.5,
                                fontFamily: "Manrope !important",
                            }}
                        >
                            {item.desc}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
