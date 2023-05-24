import { Card, CardBody } from "@chakra-ui/react";
import React from "react";

type BaseFeeCardProps = {
  fee: string
}

export function BaseFeeCard({ fee }: BaseFeeCardProps): React.ReactElement {
  return (
    <Card mb={4} variant="outline" size="sm" display="inline-block" bgGradient="linear(to-r, #6687e9 29.14%, #b082d5 53.97%, #ed7ec4 77.85%)" color="white">
      <CardBody pt={1} pb={1}>
        Base fee: <strong>{fee}</strong>
      </CardBody>
    </Card>
  )
}