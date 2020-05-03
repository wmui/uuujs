beforeAll(async () => {
  await page.goto('http://0.0.0.0:8300/formatDate')
})

test('uuu.formatDate() should return a date', async () => {
  var val = await page.$('#test1', el => el.innerHTML)
    expect(val === '2019-08-08 00:00:00')
});

test('uuu.formatDate() should return a date', async () => {
  var val = await page.$('#test2', el => el.innerHTML)
    expect(val === '2019-08-08')
});

test('uuu.formatDate() should return a date', async () => {
  var val = await page.$('#test3', el => el.innerHTML)
    expect(val === '2019-8-8')
});
