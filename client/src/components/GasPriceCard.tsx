import { Card, CardBody, CardHeader, Stat, StatNumber, StatHelpText, CardFooter, Text, Badge, BadgeProps, Skeleton, SkeletonText } from "@chakra-ui/react";

type GasPriceCardProps = {
  label: string
  price: number | string | undefined
  priorityFee: number | string | undefined
  usdPrice: number | string | undefined
  color: string
  badgeColor: BadgeProps['colorScheme']
}

export function GasPriceCard({ label, price, priorityFee, usdPrice, color, badgeColor }: GasPriceCardProps): React.ReactElement {

  return (
    <Card flex={1} size={['sm', 'sm', 'md']} color='#454545'>
      <CardBody>
        <Badge colorScheme={badgeColor} borderRadius={4} p={1}>{label}</Badge>
      </CardBody>
      <CardHeader p={[2, 8]}>
        <SkeletonText noOfLines={2} isLoaded={price !== undefined || usdPrice !== undefined}>
          <Stat>
            <StatNumber textAlign='center' fontSize={['5xl', '6xl']} color={color}>{price}</StatNumber>
            <StatHelpText textAlign='center' fontSize='xl'>${usdPrice}</StatHelpText>
          </Stat>
        </SkeletonText>
      </CardHeader >
      <CardFooter>
        <Text size={'sm'}>Priority fee: </Text>&nbsp;<Skeleton as='span' isLoaded={priorityFee !== undefined} minW='50px'><Text size={'sm'} as='b'>{priorityFee}</Text></Skeleton>
      </CardFooter>
    </Card >
  )
}