import { describe, expect, test } from "vitest"

describe('expect', () => {
  test("test expect", () => {
    const input = Math.sqrt(4)
    expect(input).toBe(2) // Jest API
    expect(input).to.equal(2) // chai API
  })

  test("test expect not", () => {
    const input = Math.sqrt(16)
    expect(input).not.toBe(3) // Jest API
    expect(input).not.to.equal(3) // chai API
  })
  // 可用于断言基础对象是否相等，或者对象是否共享相同的引用
  test("test expect toBe", () => {
    const stock = {
      type: "apples",
      count: 13,
    }
    
    expect(stock.type).toBe("apples")
    expect(stock.count).toBe(13)
    // 相同的引用
    const refStock = stock
    expect(stock).toBe(refStock)
    // 尽量不要将 toBe 与浮点数一起使用
    expect(0.1 + 0.2).not.toBe(0.3)
  })
})
