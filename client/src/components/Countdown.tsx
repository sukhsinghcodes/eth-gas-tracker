import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { useEffect, useState } from "react";

type CountdownProps = {
  seconds: number
  onComplete: () => void
}

export function Countdown({ seconds, onComplete }: CountdownProps): React.ReactElement {
  const [time, setTime] = useState(seconds)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time => time - 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (time === 0) {
      setTime(seconds)
      onComplete()
    }
  }, [onComplete, seconds, time])

  const progress = 100 - (time / seconds * 100)

  return <CircularProgress value={progress}>
    <CircularProgressLabel>{time}</CircularProgressLabel>
  </CircularProgress>

}