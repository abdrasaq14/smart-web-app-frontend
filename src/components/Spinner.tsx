import {Box, CircularProgress} from "@mui/material";
import React from "react";

export function Spinner() {
    return <Box sx={{display: "flex", width: "100%", height: "100%", justifyContent: "center", alignItems: "center"}}>
        <CircularProgress/>
    </Box>;
}