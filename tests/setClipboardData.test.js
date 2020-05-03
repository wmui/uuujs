test('uuu.setClipboardData()', async function () {
    await page.goto('http://0.0.0.0:8300/setClipboardData')
    var test = await page.$('#test', el => el.innerHTML)
    expect(test === 'test');
  });
