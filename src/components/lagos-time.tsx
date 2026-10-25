"use client"

import { useSyncExternalStore } from "react"

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Africa/Lagos",
  hour: "2-digit",
  minute: "2-digit",
})

function subscribe(onChange: () => void) {
  const interval = window.setInterval(onChange, 1000)
  return () => window.clearInterval(interval)
}

export function LagosTime() {
  const time = useSyncExternalStore(
    subscribe,
    () => formatter.format(new Date()),
    () => "--:--"
  )

  return <span className="tabular-nums">{time} in Lagos</span>
}
