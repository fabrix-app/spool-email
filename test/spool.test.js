'use strict'

const assert = require('assert')

describe('Spool', () => {
  let pack
  before(() => {
    pack = global.app.spools['email']
  })
  it('should be loaded into the app.spools collection', () => {
    assert(pack)
  })
  describe('#validate', () => {
    it.skip('TODO test')
  })
  describe('#configure', () => {
    it.skip('TODO test')
  })
  describe('#initialize', () => {
    it.skip('TODO test')
  })
})
