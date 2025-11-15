import { Box, Typography } from "@mui/material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

export default function MapSection() {
    return (
        <Box
            sx={{
                width: "100%",
              //  maxWidth: "1200px",
                mx: "auto",
                px: { xs: 2, md: 6 },
                py: { xs: 4, md: 2 },
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    borderRadius: "12px",
                    border: "1px solid #E6E8EC",
                    overflow: "hidden",
                    p: { xs: 5, md: 5 },
                    backgroundColor: "rgba(240, 244, 248, 0.5)",
                }}
            >
                {/* Map Image */}
                <Box
                    component="img"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAykCgagqZ6Mr3kh83JQZBsrpcWDdeOvtd6V5sXsbKxcKdfslbuWBDvmtBMTcaa4wyPO52nU4SUKPdUKqCk2Z_Pg9DoIhlV44YKPkFWHNI8dLqyeUlB2tGo5_O0jO9KuMj5nqp7UJHKc8oarNum7esu_XMfP4hG54U3kBiNYNFtShgvBvAP4Q-TCrSTS_xBwTpnY023X6xVZ6PeB3HFAUrdSZqW26nXa6gTQsdHIG2Nj19P-1qHA_OJx8bw3pRiRUUriR3ZIxBNZQ"
                    alt="India Map"
                    sx={{
                        width: "100%",
                        height: "auto",
                        opacity: 0.25,
                        display: "block",
                        mx: "auto",
                        userSelect: "none",
                    }}
                />

                {/* Center Icon + Text */}
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                    }}
                >
                    <TravelExploreIcon
                        sx={{
                            fontSize: { xs: 40, md: 60 },
                            color: "#3B0A6A",
                        }}
                    />
                    <Typography
                        sx={{
                            mt: 1,
                            fontSize: { xs: "14px", md: "16px" },
                            fontWeight: 600,
                            color: "#424B5C",
                        }}
                    >
                        Interactive Map Coming Soon
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
