import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        404 | Page Not Found
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="text.secondary"
        component="p"
      >
        <Link to="/"> Back to Home</Link>
      </Typography>
    </div>
  );
}
