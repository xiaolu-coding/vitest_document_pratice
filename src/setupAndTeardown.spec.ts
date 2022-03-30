import { describe, expect, test, beforeEach, afterEach } from "vitest"

describe('test setup and teardown', () => {
  test('test beforeEach', () => {
    // 注册一个回调,在当前上下文中的每个测试运行之前被调用
    beforeEach(() => {
      console.log("beforeEach")
    })
  })

  test('test afterEach', () => {
    // 注册一个回调,在当前上下文中的每个测试运行之后被调用
    afterEach(() => {
      console.log("afterEach")
    })
  })
})
