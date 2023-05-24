import { Container, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { GasPriceCard } from "./components";

export function App(): React.ReactElement {
  return <Container maxW='6xl' pt={8} pb={8}>
    <Heading as='h1' mb={8} bgClip='text' bgGradient='linear(to-r, #6687e9 10%, #b082d5 30%, #ed7ec4 50%)' size={['2xl', '3xl']}>ETH Gas Tracker</Heading>

    <Stack direction={['column', 'column', 'row']} spacing={8} flex={1} justifyContent='center'>
      <GasPriceCard
        label="⚡ Instant"
        price="50"
        priorityFee="2"
        usdPrice="1.87"
        color="#6687e9"
        badgeColor="green"
      />
      <GasPriceCard
        label="🏃 Fast"
        price="48"
        priorityFee="1"
        usdPrice="1.09"
        color="#b082d5"
        badgeColor="orange"
      />
      <GasPriceCard
        label="🐢 Standard"
        price="47"
        priorityFee="0"
        usdPrice="0.77"
        color="#ed7ec4"
        badgeColor="red"
      />
    </Stack>
  </Container>;
}