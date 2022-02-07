import * as React from "react";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";

export function Home() {
  const userData = localStorage.getItem("loggedUser");

  return (
    <>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Halo, Selamat Datang{" "}
        {JSON.parse(userData)?.name ? JSON.parse(userData)?.name : "Pengunjung"}
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="text.secondary"
        component="p"
      >
        Silahkan login/register untuk menikmati akses terbatas
      </Typography>
    </>
  );
}
