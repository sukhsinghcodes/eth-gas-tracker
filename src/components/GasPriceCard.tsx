import { Card, CardBody, CardHeader, Stat, StatNumber, StatHelpText, CardFooter, Text } from "@chakra-ui/react";

type GasPriceCardProps = {
  label: string
  price: string
  priorityFee: string
  usdPrice: string
}

export function GasPriceCard({ label, price, priorityFee, usdPrice }: GasPriceCardProps): React.ReactElement {
  return (
    <Card flex={1}>
      <CardBody>
        <Text align='left'>{label}</Text>
      </CardBody>
      <CardHeader>
        <Stat>
          <StatNumber textAlign='center' fontSize='5xl'>{price}</StatNumber>
          <StatHelpText textAlign='center'>${usdPrice}</StatHelpText>
        </Stat>
      </CardHeader>
      <CardFooter>
        <Text size={'sm'} textAlign='center'>Priority fee: <strong>{priorityFee}</strong></Text>
      </CardFooter>
    </Card>
  )
}