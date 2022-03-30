import { describe, expect, test, beforeEach } from "vitest"

describe('test beforeEach', () => {
  test('test beforeEach', () => {
    // 注册一个回调,在当前上下文中的每个测试运行之前被调用
    beforeEach(() => {
      console.log("beforeEach")
    })
  })
})
