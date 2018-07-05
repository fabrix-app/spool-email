const Template = require('../../../../dist/Template').Template

module.exports = class Test extends Template {
  test(data) {
    return `<h1>This is a test. ${data.hello}</h1>`
  }

  testEjs(data) {
    return this.ejs('<h1>This is a test. <%= hello %> </h1>', data)
  }
}
