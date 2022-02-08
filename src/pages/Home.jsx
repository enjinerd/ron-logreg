import * as React from "react";
import Typography from "@mui/material/Typography";
import ProfileCard from "../components/home/ProfileCard";

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
        {JSON.parse(userData)?.name ? (
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="info.main"
            gutterBottom
          >
            {JSON.parse(userData)?.name}
          </Typography>
        ) : (
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.secondary"
            gutterBottom
          >
            Pengunjung
          </Typography>
        )}
      </Typography>
      {JSON.parse(userData) ? (
        <ProfileCard data={userData} />
      ) : (
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          Silahkan login/register untuk menikmati akses terbatas
        </Typography>
      )}
    </>
  );
}
