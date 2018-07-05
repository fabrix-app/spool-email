import { EventEmitter } from 'events'
import { FabrixApp } from '@fabrix/fabrix'
import { FabrixGeneric } from '@fabrix/fabrix/dist/common'

// https://www.npmjs.com/package/ejs
import * as ejs from 'ejs'

export class Template extends FabrixGeneric {
  private _app: FabrixApp
  public ejs

  constructor (app: FabrixApp) {
    if (!(app instanceof EventEmitter)) {
      throw new Error('The "app" argument must be of type EventEmitter')
    }
    super(app)
    this._app = app

    Object.defineProperties(this, {
      ejs: {
        enumerable: false,
        value: function (input, data, options) {
          input = input || ''
          data = data || {}
          options = options || {}
          return ejs.render(input, data, options)
        },
        writable: true
      }
    })

    this.app.emit(`controller:${this.id}:constructed`, this)
  }

  /**
   * Reference to i18n
   */
  get __ () {
    if (this.app.__) {
      return this.app.__
    }
    else {
      throw new Error('Missing spool-i18n, make sure it is included in app.main.spools')
    }
  }

  /**
   * Get the Fabrix App Instance that Template was constructed with
   */
  get app(): FabrixApp {
    return this._app
  }

  /**
   * Return the id of this template class
   */
  get id () {
    return this.constructor.name.replace(/(\w+)Template/, '$1').toLowerCase()
  }

  /**
   * Get's the name of the template class
   */
  get name() {
    return this.constructor.name
  }

  /**
   * Get a list of eligible templates on this template class
   * @returns {Array}
   */
  get templates() {
    const notAllowed = ['ejs']
    const templates = []
    if (this.methods) {
      this.methods.forEach(method => {
        if (notAllowed.indexOf(method) === -1) {
          templates.push(`${this.name}.${method}`)
        }
      })
    }
    return templates
  }
}
