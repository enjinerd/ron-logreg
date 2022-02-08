import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import ConfirmModal from "../ui/Modal";

export default function ProfileCard({ data }) {
  const { name, email, gender, dob } = JSON.parse(data);
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    navigate("/login");
  };
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Profile Card
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {email}
        </Typography>
        <Typography variant="body2">
          <p>Gender : {gender}</p>
          <p>Birthdate: {new Date(dob).toLocaleDateString("id-ID")}</p>
        </Typography>
      </CardContent>
      <CardActions>
        <ConfirmModal
          title="Are u sure wanna logout?"
          body="Click confirm to prooced"
          btnTitle="Logout"
          action={handleLogout}
        />{" "}
      </CardActions>
    </Card>
  );
}
