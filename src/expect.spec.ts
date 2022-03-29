import { describe, expect, test } from "vitest"

describe('expect', () => {
  test('test expect', () => {
    const input = Math.sqrt(4)
    expect(input).toBe(2)  // Jest API
    expect(input).to.equal(2) // chai API
  })

  test("test expect not", () => {
    const input = Math.sqrt(16)
    expect(input).not.toBe(4) // Jest API
    expect(input).not.to.equal(4) // chai API
  })
})
