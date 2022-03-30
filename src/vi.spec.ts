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

  test("test vi clearAllTimers", () => {
    // 清除所有运行的计时器
    vi.clearAllTimers()
  })

  test('test vi fn', () => {
    const getApples = vi.fn(() => 0)

    getApples()

    expect(getApples).toHaveBeenCalled()
    expect(getApples).toHaveReturnedWith(0)
  })

  test('test vi getMockedSystemTime', () => {
    // 返回使用 setSystemTime 设置的模拟的当前日期。如果日期没有被模拟，将返回 null。
    const mockedDate = vi.getMockedSystemTime()
    expect(mockedDate).toBe(null)
  })

  test("test vi getRealSystemTime", () => {
    // 返回当前的真实日期。
    const realDate = vi.getRealSystemTime()
    expect(realDate).toBeDefined()
  })
})
