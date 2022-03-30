import { describe, test, expect, vi } from "vitest"

describe('test vi', () => {
  let i = 0
  setInterval(() => console.log(++i), 50)
  test("test vi advanceTimersByTime", () => {
    
    vi.useFakeTimers()
    vi.advanceTimersByTime(150)
  })

  test("test vi advanceTimersToNextTimer", () => {
    vi.advanceTimersToNextTimer()
      .advanceTimersToNextTimer()
      .advanceTimersToNextTimer()
  })
})
