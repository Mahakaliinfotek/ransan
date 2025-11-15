import React from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    Paper,
    Stack,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";

const ContactSection = () => {
    return (
        <Box
            sx={{
                width: "100%",
                backgroundColor: "#F6F3F8",
                py: { xs: 2, md: 4 },
                px: { xs: 2, md: 4 },
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1400px",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 6,
                }}
            >
                {/* LEFT SIDE */}
                <Box sx={{ flex: 1 }}>
                    <Typography
                        sx={{
                            fontSize: { xs: "1.8rem", md: "2rem" },
                            fontWeight: 700,
                            mb: 2,
                            color: "#1A1A1A",
                        }}
                    >
                        Get in Touch
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: "1rem",
                            color: "#575757",
                            maxWidth: "600px",
                            lineHeight: 1.6,
                            mb: 4,
                        }}
                    >
                        Have a question or a project to discuss? We're here to help. Fill out
                        the form, and our team will get back to you promptly. For detailed
                        service information, download our corporate brochure.
                    </Typography>

                    {/* CONTACT DETAILS */}
                    <Stack spacing={2} sx={{ mb: 4 }}>
                        <Stack direction="row" spacing={1.5} alignItems="center">
                            <LocationOnIcon sx={{ color: "#4C1D95" }} />
                            <Typography sx={{ color: "#333" }}>
                                123 Industrial Way, Mumbai, MH 400001, India
                            </Typography>
                        </Stack>

                        <Stack direction="row" spacing={1.5} alignItems="center">
                            <PhoneIcon sx={{ color: "#4C1D95" }} />
                            <Typography sx={{ color: "#333" }}>+91 22 1234 5678</Typography>
                        </Stack>

                        <Stack direction="row" spacing={1.5} alignItems="center">
                            <EmailIcon sx={{ color: "#4C1D95" }} />
                            <Typography sx={{ color: "#333" }}>
                                contact@ransan.enterprises
                            </Typography>
                        </Stack>
                    </Stack>

                    {/* DOWNLOAD BUTTON */}
                    <Button
                        variant="outlined"
                        startIcon={<DownloadIcon />}
                        sx={{
                            backgroundColor: "#fff",
                            color: "#111",
                            borderRadius: "10px",
                            textTransform: "none",
                            px: 3,
                            py: 1.6,
                            fontWeight: 600,
                            border: "1px solid #D9D9D9",
                            "&:hover": {
                                backgroundColor: "#f0f0f0",
                            },
                        }}
                    >
                        Download Brochure (PDF)
                    </Button>
                </Box>

                {/* RIGHT SIDE FORM */}
                <Paper
                    elevation={0}
                    sx={{
                        flex: 1,
                        p: { xs: 3, md: 4 },
                        borderRadius: "14px",
                        border: "1px solid #E5E5E5",
                        backgroundColor: "#fff",
                    }}
                >
                    <Stack spacing={3}>
                        <TextField
                            label="Full Name"
                            fullWidth
                            size="medium"
                            sx={{ background: "#fff", borderRadius: "8px" }}
                        />

                        <TextField
                            label="Email Address"
                            fullWidth
                            size="medium"
                            sx={{ background: "#fff", borderRadius: "8px" }}
                        />

                        <TextField
                            label="Subject"
                            fullWidth
                            size="medium"
                            sx={{ background: "#fff", borderRadius: "8px" }}
                        />

                        <TextField
                            label="Message"
                            fullWidth
                            multiline
                            rows={5}
                            sx={{ background: "#fff", borderRadius: "8px" }}
                        />

                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "#2B0A60",
                                py: 1.8,
                                textTransform: "none",
                                fontWeight: 600,
                                borderRadius: "8px",
                                fontSize: "1rem",
                                "&:hover": { backgroundColor: "#22084F" },
                            }}
                        >
                            Submit Enquiry
                        </Button>
                    </Stack>
                </Paper>
            </Box>
        </Box>
    );
};

export default ContactSection;
