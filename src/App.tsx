import { Container, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { GasPriceCard } from "./components";

export function App(): React.ReactElement {
  return <Container maxW='6xl' mt={8}>
    <Heading mb={8}>ETH Gas Tracker</Heading>

    <Stack direction={['column', 'column', 'row']} spacing={8} flex={1} justifyContent='center'>
      <GasPriceCard
        label="⚡ Instant"
        price="50"
        priorityFee="2"
        usdPrice="1.87"
      />
      <GasPriceCard
        label="🏃 Fast"
        price="48"
        priorityFee="1"
        usdPrice="1.09"
      />
      <GasPriceCard
        label="🐢 Standard"
        price="47"
        priorityFee="0"
        usdPrice="0.77"
      />
    </Stack>
  </Container>;
}