import { Container, HStack, Heading, Stack, Text, useToast } from "@chakra-ui/react";
import React, { useCallback, useEffect } from "react";
import { BaseFeeCard, Countdown, GasPriceCard } from "./components";
import { useQuery } from "@tanstack/react-query";
import { PriceType, getEthUsdPrice, getGasPriceEstimate } from "./api";
import { gweiToUsd } from "./utils";

const gasPriceCardsProps = {
  instant: {
    label: "⚡ Instant",
    price: undefined,
    priorityFee: undefined,
    usdPrice: undefined,
    color: "#6687e9",
    badgeColor: "green",
  },
  fast: {
    label: "🏃 Fast",
    price: undefined,
    priorityFee: undefined,
    usdPrice: undefined,
    color: "#b082d5",
    badgeColor: "orange",
  },
  standard: {
    label: "🐢 Standard",
    price: undefined,
    priorityFee: undefined,
    usdPrice: undefined,
    color: "#ed7ec4",
    badgeColor: "red",
  },
}


export function App(): React.ReactElement {
  const toast = useToast()
  const [timestamp, setTimestamp] = React.useState<Date | undefined>()

  const { data: gasPriceEstimates, isError: gasError, refetch: refetchGasPrices } = useQuery(['gasPriceEstimates'], getGasPriceEstimate)
  const { data: ethUsd, isError: usdError, refetch: refetchUsdsPrices } = useQuery(['ethUsd'], getEthUsdPrice)

  const refetch = useCallback(() => {
    refetchGasPrices()
    refetchUsdsPrices()
    setTimestamp(new Date())
  }, [refetchGasPrices, refetchUsdsPrices])

  useEffect(() => {
    if (gasError) {
      toast({
        description: "There was an error fetching gas price estimates.",
        status: 'error',
        duration: 5000,
      })
    }

    if (usdError) {
      toast({
        description: "There was an error fetching USD price of ETH.",
        status: 'error',
        duration: 5000,
      })
    }

  }, [gasError, toast, usdError])

  return <Container maxW='6xl' pt={8} pb={8}>
    <Heading as='h1' mb={8} bgClip='text' bgGradient='linear(to-r, #6687e9 10%, #b082d5 30%, #ed7ec4 50%)' size={['2xl', '3xl']}>ETH Gas Tracker</Heading>
    <HStack justifyContent='space-between' mb={8}>
      <BaseFeeCard fee={gasPriceEstimates?.nextBaseFee} />
      <Countdown seconds={30} onComplete={refetch} />
    </HStack>
    <Stack direction={['column', 'column', 'row']} spacing={8} flex={1} justifyContent='center'>
      {Object.entries(gasPriceCardsProps).map(([key, props]) => {

        const property = key as keyof PriceType

        const price = gasPriceEstimates?.nextBaseFee !== undefined && gasPriceEstimates?.priorityFee[property] !== undefined ? gasPriceEstimates?.nextBaseFee + gasPriceEstimates?.priorityFee[property] : undefined
        const usdPrice = gweiToUsd(price, ethUsd?.ethereum.usd)

        const hydratedProps = {
          ...props,
          price: price,
          priorityFee: gasPriceEstimates?.priorityFee[property],
          usdPrice: usdPrice,
        }
        return (<GasPriceCard key={key} {...hydratedProps} />)
      })}
    </Stack>
    <HStack justifyContent='space-between' mt={8}>

      <Text fontSize='sm' color='gray.500'>* All fee price units are in GWEI unless specified otherwise.</Text>
      {timestamp && <Text fontSize='sm' color='gray.500'>Prices last updated: <Text as='b'>{timestamp.toLocaleString()}</Text></Text>}

    </HStack>

  </Container>;
}