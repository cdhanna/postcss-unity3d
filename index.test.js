const postcss = require('postcss')

const plugin = require('./')

async function run (input, output, opts = { }) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

it('Adds a Button.unity-button selector', async () => {
  await run('Button { color: red; }', 'Button, Button.unity-button { color: red; }', { })
})
it('Does not add a unity-button selector if no Button exists', async () => {
  await run('a { color: red; }', 'a { color: red; }', { })
})
it('Does not add a unity-button selector if it is already accounted for', async () => {
  await run('Button, Button.unity-button { color: red; }', 'Button, Button.unity-button { color: red; }', { })
})
it('Does not add a unity-button selector if skip is enabled', async () => {
  await run('Button { color: red; }', 'Button { color: red; }', { skipUnityButton: true })
})
