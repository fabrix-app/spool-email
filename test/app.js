'use strict'

const _ = require('lodash')
const smokesignals = require('smokesignals')

module.exports = _.defaultsDeep({
  pkg: {
    name: require('../package').name + '-test'
  },
  api: require('./fixtures/api/index'),
  config: {
    main: {
      spools: [
        require('@fabrix/spool-router').RouterSpool,
        require('../dist').EmailSpool
      ]
    },
    email: {}
  }
}, smokesignals.FailsafeConfig)


