import { describe, expect, test } from "vitest"

describe("expect", () => {
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

  test("test expect toBeCloseTo", () => {
    // 第二个参数是限制小数点后的检查位数 0.2 + 0.1 = 0.30000000000000004
    // 0.2 + 0.1 = 0.30000
    expect(0.1 + 0.2).toBeCloseTo(0.3, 5)
    // 后50位
    expect(0.1 + 0.2).not.toBeCloseTo(0.3, 50)
  })

  const getApples1 = () => 3
  const getApples2 = () => {
    let a = 1
  }
  test("test expect toBeDefined", () => {
    // 检查是否不等于undefined，也可以检查返回值
    expect(getApples1()).toBeDefined()
    expect(getApples2()).not.toBeDefined()
  })

  test("test expect toBeUndefined", () => {
    // 检查是否等于undefined，也可以用于检查返回值
    expect(getApples1()).not.toBeUndefined()
    expect(getApples2()).toBeUndefined()
  })

  test('test expect toBeTruthy', () => {
    // 检查是否等于true， 会将检查值转换为布尔值
    expect(true).toBeTruthy()
    expect(false).not.toBeTruthy()
  })

  test('test expect toBeFalsy', () => {
    // 检查是否等于false， 会将检查值转换为布尔值
    expect(false).toBeFalsy()
    expect(true).not.toBeFalsy()
  })

  test('test expect toBeNull', () => {
    function apples() {
      return null
    }
    // 检查是否等于null, 是.toBe(null)的别名
    expect(apples()).toBeNull()
  })

  test('test expect toBeNaN', () => {
    // 检查是否等于NaN 是.toBe(NaN)的别名
    expect(NaN).toBeNaN()
    expect(1).not.toBeNaN()
  })

  test('test expect toBeTypeOf', () => {
    // 检查是否等于指定的类型
    expect('123').toBeTypeOf('string')
    expect(123).toBeTypeOf('number')
    expect(true).toBeTypeOf('boolean')
    expect(undefined).toBeTypeOf('undefined')
    expect({}).toBeTypeOf('object')
    expect(() => {}).toBeTypeOf('function')
  })

  test('test expect toBeInstanceOf', () => {
    class Stocks {
      val: number
      constructor(val: number) {
        this.val = val
      }
    }

    const stock = new Stocks(3)
    // 用于检查值是否为接收的类的实例
    expect(stock).toBeInstanceOf(Stocks)
  })
})
