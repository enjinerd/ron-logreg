import * as React from "react";
import Typography from "@mui/material/Typography";

export function Home() {
  return (
    <>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Halo, Selamat Datang
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
