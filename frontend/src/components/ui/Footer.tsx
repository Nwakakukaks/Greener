import { Box, Container } from "@mui/material";
import Typography from "@mui/material/Typography";

export const Footer = () => {
  return (
    <footer style={{ marginTop: 100 }}>
      <Box
        sx={{
          width: "100%",
          height: "150px",
          bgcolor: "primary.dark",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Container>
          <Typography component="div" variant="subtitle1" color="primary.light" gutterBottom>
            Greener; our mission is a greener earth.
          </Typography>
        </Container>
      </Box>
    </footer>
  );
};
