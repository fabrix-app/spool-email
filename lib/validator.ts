import * as joi from 'joi'
import { emailConfig } from './schemas/emailConfig'

export const Validator = {
  validateEmailConfig (config) {
    return new Promise((resolve, reject) => {
      joi.validate(config, emailConfig, (err, value) => {
        if (err) {
          return reject(new TypeError('config.email: ' + err))
        }
        return resolve(value)
      })
    })
  }
}
