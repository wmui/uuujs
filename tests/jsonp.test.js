

test('uuu.jsonp()',  async () => {
    await page.goto('http://0.0.0.0:8300/jsonp')
    await page.waitFor(1000)
    var name = await page.$('#test')
    expect(name === 'uuujs')
  });
