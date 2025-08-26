import { assert } from 'chai'
import Renderer from '../lib/renderer.mjs'

describe('Renderer', function () {
  it('should skip attributes with unsafe names', function () {
    const r = new Renderer()
    const token = { attrs: [['onload=alert(1) foo', 'bar'], ['title', 'ok']] }

    assert.strictEqual(r.renderAttrs(token), ' title="ok"')
  })
})
