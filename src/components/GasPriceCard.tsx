import { Card, CardBody, CardHeader, Stat, StatNumber, StatHelpText, CardFooter, Text, Badge, BadgeProps } from "@chakra-ui/react";

type GasPriceCardProps = {
  label: string
  price: string
  priorityFee: string
  usdPrice: string
  color: string
  badgeColor: BadgeProps['colorScheme']
}

export function GasPriceCard({ label, price, priorityFee, usdPrice, color, badgeColor }: GasPriceCardProps): React.ReactElement {

  return (
    <Card flex={1} size={['sm', 'sm', 'md']} color='#454545'>
      <CardBody>
        <Badge colorScheme={badgeColor} borderRadius={4} p={1}>{label}</Badge>
      </CardBody>
      <CardHeader p={[0, 8]}>
        <Stat>
          <StatNumber textAlign='center' fontSize={['5xl', '6xl']} color={color}>{price}</StatNumber>
          <StatHelpText textAlign='center' fontSize='xl'>${usdPrice}</StatHelpText>
        </Stat>
      </CardHeader >
      <CardFooter>
        <Text size={'sm'} textAlign='center'>Priority fee: <strong>{priorityFee}</strong></Text>
      </CardFooter>
    </Card >
  )
}