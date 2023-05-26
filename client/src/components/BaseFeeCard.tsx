import { Card, CardBody, Skeleton, Text } from "@chakra-ui/react";
import React from "react";

type BaseFeeCardProps = {
  fee: number | string | undefined
}

export function BaseFeeCard({ fee }: BaseFeeCardProps): React.ReactElement {
  return (
    <Card variant="outline" size="sm" display="inline-block" bgGradient="linear(to-r, #6687e9 29.14%, #b082d5 53.97%, #ed7ec4 77.85%)" color="white">
      <CardBody>
        <Text fontSize={'xl'}>
          <Text as='span'>Base fee: </Text>&nbsp;<Skeleton as='span' minW='10px' isLoaded={fee !== undefined}><Text as="b">{fee}</Text></Skeleton>
        </Text>
      </CardBody>
    </Card>
  )
}