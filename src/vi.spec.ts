import { describe, test, expect, vi } from "vitest"

describe('test vi', () => {
  test("test vi advanceTimersByTime", () => {
    let i = 0
    setInterval(() => console.log(++i), 50)
    vi.useFakeTimers()
    vi.advanceTimersByTime(150)
  })
})
