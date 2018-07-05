const Email = require('../../../../dist/Email').Email

module.exports = class Test extends Email {
  /**
   *
   * @param data
   * @param options
   * @returns {Promise.<{type: string, subject: string, text: string, html:string, send_email:boolean}>}
   */
  test(data, options) {
    data = data || {}
    options = options || {}

    const subject = data.subject || 'Test'
    const sendEmail = data.send_email || true

    // return Promise.resolve({
    //   type: 'test',
    //   subject: subject,
    //   text: text,
    //   html: html,
    //   send_email: sendEmail
    // })
    return this.compose('test', subject, data, sendEmail)
  }
}
