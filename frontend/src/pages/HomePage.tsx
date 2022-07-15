import * as React from "react";
import { Typography, Container, Grid } from "@mui/material";
import { useMoralis } from "react-moralis";
import { StyledPaper } from "../components/ui/StyledPaper";

export const HomePage = () => {
  const { isAuthenticated } = useMoralis();
  const color = isAuthenticated ? "primary.dark" : "primary.light";
  return (
    <Container disableGutters maxWidth="lg" component="main" sx={{ py: 5 }}>
      <Typography
        component="h1"
        variant="h2"
        color={color}
        gutterBottom
      >
        Welcome to Greener!
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <Typography component="p" color={color} sx={{ mb: 2 }}>
            WHAT'S POSSIBLE?
            <p>Greener is an enivironmental fund-raiser dapp. our mission is a greener earth</p>
            <ol>
              <li>
                <strong>one-time fundraiser</strong> where the organizer describes the goal of the fundraiser and
                optional the goal amount (in USD) and end date. Donors may choose to fund a one-time fundraiser as long
                as it's in open status and they have funds in their wallet.
              </li>
              <li>
                <strong>recurring fundraiser</strong> where donors may pledge to donate a set amount at a given interval
                - this can be used for RECURRING DONATIONS.
              </li>
            </ol>
          </Typography>
          <Typography component="p" color={color} sx={{ mb: 2 }}>
            Underlying Techs
            <ul>
              <li>
                <strong>Chainlink price feeds</strong> are used to securely convert donations made in crypto to fiat
                goals, e.g. ETH &rarr; USD.
              </li>
              <li>
                <strong>Chainlink Keepers</strong> are used to automate recurring payments made from donors to
                fundraisers.
              </li>
              <li>
                <strong>Moralis</strong> is used for smooth web3 experience.
              </li>
              <li>
                <strong>Web3.Storage powered by Filecoin</strong> is used to store fundraiser descriptions and images in
                a decentralized manner without the cost of on-chain storage.
              </li>
            </ul>
            
          </Typography>
        </Grid>
        
      </Grid>
    </Container>
  );
};
