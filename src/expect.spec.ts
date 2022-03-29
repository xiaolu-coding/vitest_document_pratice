import { describe, expect, test, vi } from "vitest"

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

  test("test expect toBeTruthy", () => {
    // 检查是否等于true， 会将检查值转换为布尔值
    expect(true).toBeTruthy()
    expect(false).not.toBeTruthy()
  })

  test("test expect toBeFalsy", () => {
    // 检查是否等于false， 会将检查值转换为布尔值
    expect(false).toBeFalsy()
    expect(true).not.toBeFalsy()
  })

  test("test expect toBeNull", () => {
    function apples() {
      return null
    }
    // 检查是否等于null, 是.toBe(null)的别名
    expect(apples()).toBeNull()
  })

  test("test expect toBeNaN", () => {
    // 检查是否等于NaN 是.toBe(NaN)的别名
    expect(NaN).toBeNaN()
    expect(1).not.toBeNaN()
  })

  test("test expect toBeTypeOf", () => {
    // 检查是否等于指定的类型
    expect("123").toBeTypeOf("string")
    expect(123).toBeTypeOf("number")
    expect(true).toBeTypeOf("boolean")
    expect(undefined).toBeTypeOf("undefined")
    expect({}).toBeTypeOf("object")
    expect(() => {}).toBeTypeOf("function")
  })

  test("test expect toBeInstanceOf", () => {
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

  test("test expect toBeGreaterThan", () => {
    // 用于检查值是否大于接收值，相等和小于都无法通过测试
    expect(3).toBeGreaterThan(2)
    expect(2).not.toBeGreaterThan(3)
    expect(2).not.toBeGreaterThan(2)
  })

  test("test expect toBeGreaterThanOrEqual", () => {
    // 用于检查值是否大于等于接收值
    expect(3).toBeGreaterThanOrEqual(2)
    expect(3).toBeGreaterThanOrEqual(3)
    expect(3).not.toBeGreaterThanOrEqual(4)
  })

  test("test expect toBeLessThan", () => {
    // 用于检查值是否小于接收值，如果相等和大于都无法通过测试
    expect(2).toBeLessThan(3)
    expect(2).not.toBeLessThan(2)
    expect(3).not.toBeLessThan(2)
  })

  test("test expect toBeLessThanOrEqual", () => {
    expect(2).toBeLessThanOrEqual(3)
    expect(2).toBeLessThanOrEqual(2)
    expect(3).not.toBeLessThanOrEqual(2)
  })

  test("test expect toEqual", () => {
    const stockBill = {
      type: "apples",
      count: 13,
    }

    const stockMary = {
      type: "apples",
      count: 13,
    }
    // 检查值是否等于接收值，或者是同样的结构，如果是对象类型（将会使用递归的方法进行比较）
    expect(stockBill).toEqual(stockMary)
    expect(1).toEqual(1)
  })

  test("test expect toStrictEqual", () => {
    class Stock {
      type: string
      constructor(type) {
        this.type = type
      }
    }
    // 严格相等 如果是对象类型（将会使用递归的方法进行比较），并且会比较它们是否是相同的类型。
    expect(new Stock("apples")).toEqual({ type: "apples" })
    expect(new Stock("apples")).not.toStrictEqual({ type: "apples" })
  })

  test("test expect toContain", () => {
    // 用于检查数组和字符串中是否包含接收值
    expect("xiaolu").toContain("xiao")
    expect([1, 2, 3]).toContain(2)
  })

  test("test expect toContainEqual", () => {
    // 用于检查数组中是否包含具有特定结构和值的元素
    // 它就像对每个元素进行 toEqual 操作。
    const stock = [
      {
        fruit: "apples",
        count: 5,
      },
    ]
    expect([1, 2, 3]).toContainEqual(2)
    expect(stock).not.toContainEqual({ fruit: "apples" })
    expect(stock).toContainEqual({ fruit: "apples", count: 5 })
  })

  test("test expect toHaveLength", () => {
    //  用于断言一个对象是否具有 .length 属性，并且它被设置为某个数值。
    expect("abc").toHaveLength(3)
    expect([1, 2, 3]).toHaveLength(3)
    expect({ length: 3 }).toHaveLength(3)
    // length值不是3
    expect([1, 2, 3, 4]).not.toHaveLength(3)
  })

  test("test expect toHaveProperty", () => {
    const invoice = {
      isActive: true,
      customer: {
        first_name: "John",
        last_name: "Doe",
        location: "China",
      },
      total_amount: 5000,
      items: [
        {
          type: "apples",
          quantity: 10,
        },
        {
          type: "oranges",
          quantity: 5,
        },
      ],
    }
    expect(invoice).toHaveProperty("isActive") // 断言密钥存在
    expect(invoice).toHaveProperty("total_amount", 5000) //断言 key 存在且值相等
    expect(invoice).not.toHaveProperty("account") //断言这个 key 不存在
  })

  test("test expect toMatch", () => {
    // 用于断言字符串是否匹配某个模式
    expect("top fruits include apple, orange and grape").toMatch(/apple/)
    expect("applefruits").toMatch("fruit") // toMatch 也可以是一个字符串
  })

  test("test expect toMatchObject", () => {
    const john1 = {
      customer: {
        name: "John",
      },
    }
    const john2 = {
      customer: {
        name: "John",
      },
    }
    // 用于断言对象是否匹配指定的对象属性的子集。
    expect(john1).toMatchObject(john2)
    // 断言对象数组是否匹配
    expect([{ foo: "bar" }]).toMatchObject([{ foo: "bar" }])
  })

  // 用于断言函数在调用时是否抛出错误。
  test("test expect toThrowError", () => {
    function getFruitStock(type) {
      if (type === "pineapples") {
        throw new Error("No pineapples in stock")
      }
    }
    // 你必须将代码包装在一个函数中，否则将无法捕获错误并且断言将会失败
    expect(() => getFruitStock("pineapples")).toThrowError(
      "No pineapples in stock"
    )
  })
  const market = {
    buy(subject: string, amount: number) {
      // ...
    },
    add(a: number, b: number) {
      a + b
    },
  }
  // 监听函数
  const addSpy = vi.spyOn(market, "add")
  test("test expect toHaveBeenCalled", () => {
    market.add(1, 2)

    expect(addSpy).toHaveBeenCalled()
  })
  test("test expect toHaveBeenCalledTimes", () => {
    market.add(1, 2)
    expect(addSpy).toHaveBeenCalledTimes(2)
  })
})
