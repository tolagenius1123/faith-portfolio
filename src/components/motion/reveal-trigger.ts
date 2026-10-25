export function revealTrigger(trigger: Element, intro: boolean) {
  if (intro) return undefined
  return { trigger, start: "top 88%", once: true }
}
