'use strict'
/* global describe, it */
const assert = require('assert')

describe('#Test Email', () => {
  let Test
  it('should exist', () => {
    assert(global.app.api.emails['Test'])
    Test = global.app.emails.Test
  })
  it('should get Test Email Class id', (done) => {
    assert.equal(Test.id, 'test')
    done()
  })
  it('should get Test Email Class name', (done) => {
    assert.equal(Test.name, 'Test')
    done()
  })
  it('should get eligible emails', (done) => {
    assert.equal(Test.emails.length, 1)
    done()
  })
  it('should raw send a test email', (done) => {
    Test.test({hello: 'hello'})
      .then(email => {
        assert.equal(email.type, 'Test.test')
        assert.equal(email.subject, 'Test')
        assert.equal(email.text, 'This is a test. hello')
        assert.equal(email.html, '<h1>This is a test. hello</h1>')
        assert.equal(email.send_email, true)
        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it('should compose a test email', (done) => {
    Test.compose('test', 'test subject', {hello: 'hello'})
      .then(email => {
        assert.equal(email.type, 'Test.test')
        assert.equal(email.subject, 'test subject')
        assert.equal(email.text, 'This is a test. hello')
        assert.equal(email.html, '<h1>This is a test. hello</h1>')
        assert.equal(email.send_email, true)
        done()
      })
      .catch(err => {
        done(err)
      })
  })
})
