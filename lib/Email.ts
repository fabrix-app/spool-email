import { FabrixApp } from '@fabrix/fabrix'
import { FabrixGeneric } from '@fabrix/fabrix/dist/common'
import * as stripTags from 'striptags'

export class Email extends FabrixGeneric {
  methods
  compose

  constructor (app: FabrixApp) {
    super(app)

    Object.defineProperties(this, {
      app: {
        enumerable: false,
        value: app
      },
      /**
       * If the Email is now immutable
       */
      immutable: {
        enumerable: false,
        value: false,
        writable: true
      },
      /**
       * Freezes the immutability of the email
       */
      freeze: {
        enumerable: false,
        value: function () {
          this.immutable = true
        },
        writable: true
      },
      /**
       * Unfreezes the immutability of the email
       */
      unfreeze: {
        enumerable: false,
        value: function() {
          this.immutable = false
        },
        writable: true
      },
      /**
       * Compose an Email
       */
      compose: {
        enumerable: false,
        value: function(method, subject, data, send) {
          return Promise.resolve()
            .then(() => {
              if (!this.app.templates[this.name] && !this.app.templates[this.name][this.method]) {
                throw new Error(`Template ${this.name}.${method} not found`)
              }
              // Get the Email HTML
              const html = this.app.templates[this.name][method](data)
              // Return
              return {
                subject: subject,
                html: html,
                text: stripTags(html),
                type: `${this.name}.${method}`,
                send_email: send || true
              }
            })
        },
        writable: true
      }
    })
  }

  /**
   * Return the id of this email class
   */
  get id () {
    return this.constructor.name.replace(/(\w+)Email/, '$1').toLowerCase()
  }

  /**
   * Get's the name of the email class
   */
  get name() {
    return this.constructor.name
  }

  /**
   * Get a list of eligible emails on this email class
   * @returns {Array}
   */
  get emails() {
    const notAllowed = ['compose', 'freeze', 'unfreeze']
    const emails = []
    if (this.methods) {
      this.methods.forEach(method => {
        if (notAllowed.indexOf(method) === -1) {
          emails.push(`${this.name}.${method}`)
        }
      })
    }
    return emails
  }

}
