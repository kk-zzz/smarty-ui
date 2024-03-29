const generateDiv = require('../dom')

describe('DOM 测试', () => {
  test('测试 dom 操作', () => {
    generateDiv()
    expect(document.getElementsByClassName('c1').length).toBe(1)
  })
})