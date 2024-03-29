const { getData } = require('../fetch')
const axios = require('axios')

// mock 函数的作用，就是为了有效孤立函数，实现真正的单元测试
jest.mock('axios');

it('fetch', async () => {
  // 模拟第一次接收到的数据
  axios.get.mockResolvedValueOnce('123');
  // 模拟每一次接收到的数据
  axios.get.mockResolvedValue('456');

  const response1 = await getData();
  const response2 = await getData();

  // 验证返回的data属性
  expect(response1).toBe('123');
  expect(response2).toBe('456');
});

/**
 * jest.fn()
 */
test('测试jest.fn()调用', () => {
  let mockFn = jest.fn() // 默认返回 undefined
  let result = mockFn(1, 2, 3)

  // 断言 mockFn 的执行后返回 undefined
  expect(result).toBeUndefined()
  // 断言 mockFn 被调用
  expect(mockFn).toBeCalled()
  // 断言 mockFn 被调用了 1次
  expect(mockFn).toBeCalledTimes(1)
  // 断言 mockFn 传入的参数为 1，2，3
  expect(mockFn).toHaveBeenCalledWith(1, 2, 3)
})


