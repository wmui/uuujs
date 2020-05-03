describe('#addClass()', function () {
  beforeAll(async () => {
    await page.goto('http://0.0.0.0:8300/class')
  })
  test('uuu.addClass("$el", "test")', async () => {
    var name = await page.$('#test1', el => el.className)
    expect(name === 'test')
  });

  test('uuu.removeClass()', async function () {
    var name = await page.$('#test2', el => el.className)
    expect(name === 'test')
  })

  test('uuu.hasClass()', async () => {
    var val = await page.$('#test3', el => el.innerHTML)
    expect(val === 'true')
  })
});
