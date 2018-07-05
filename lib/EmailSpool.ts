import { Spool } from '@fabrix/fabrix/dist/common'

import { Validator } from './validator'

import * as config from './config/index'
import * as pkg from '../package.json'
import * as api  from './api/index'

export class EmailSpool extends Spool {

  constructor(app) {
    super(app, {
      config: config,
      pkg: pkg,
      api: api
    })
  }

  /**
   * Validates Configs
   */
  async validate () {
    // const requiredSpools = []
    // const spools = Object.keys(this.app.spools)
    //
    // if (!spools.some(v => requiredSpools.indexOf(v) >= 0)) {
    //   return Promise.reject(new Error(`spool-email requires spools: ${ requiredSpools.join(', ') }!`))
    // }

    if (!this.app.config.get('email')) {
      return Promise.reject(new Error('No configuration found at config.email!'))
    }

    return Promise.all([
      Validator.validateEmailConfig(this.app.config.get('email'))
    ])
  }

  /**
   * Adds generics' APIs to fabrix api, Adds generics' routes to app.routes
   */
  configure () {
    // this.app.api.emails = this.app.api.emails || {}
    // this.app.api.templates = this.app.api.templates || {}
  }
}
