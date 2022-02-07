import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://ron.my.id/">
        Roni Ardiyanto
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      maxWidth="md"
      component="footer"
      align="center"
      sx={{
        mt: 8,
        py: [3, 6],
        position: "static",
        bottom: 0,
      }}
    >
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
