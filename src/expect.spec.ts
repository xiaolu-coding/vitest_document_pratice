import { describe, expect, test } from "vitest"

describe('expect', () => {
  test('test expect', () => {
    const input = Math.sqrt(4)
    expect(input).toBe(2)  // Jest API
    expect(input).to.equal(2) // chai API
  })
})
