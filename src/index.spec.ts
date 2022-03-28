import { test, describe, expect, assert } from 'vitest'
// 
describe('test', () => {
  test("should work as expected", () => {
    expect(Math.sqrt(4)).toBe(2)
  })
  // 跳过测试
  test.skip("skipped test", () => {
    // 跳过测试，没有错误
    assert.equal(Math.sqrt(4), 3)
  })
  // 只运行这个测试
  test.only("only test", () => {
    assert.equal(Math.sqrt(4), 2)
  })
  // 并发测试
  test("serial test", async () => {})
  test.concurrent("concurrent test 1", async () => {})
  test.concurrent("concurrent test 2", async () => {})

  test.todo("unimplemented test")
  // 表示断言将显式失败。
  const myAsyncFunction = () => new Promise((resolve) => resolve(1))
  test.fails('fail test', () => {
    expect(myAsyncFunction()).rejects.toBe(1)
  })

  test.each([
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3],
  ])('add(%i, %i) => %i', (a, b, expected) => {
    expect(a + b).toBe(expected)
  })
}) 



