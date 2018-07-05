/**
 * Spool Configuration
 *
 * @see {@link http://fabrixjs.io/doc/spool/config
 */
export const spool = {
  type: 'extension',

  provides: {
    resources: ['emails', 'templates'],
    config: ['email']
  },
  /**
   * Configure the lifecycle of this pack; that is, how it boots up, and which
   * order it loads relative to other spools.
   */
  lifecycle: {
    configure: {
      /**
       * List of events that must be fired before the configure lifecycle
       * method is invoked on this Spool
       */
      listen: [],

      /**
       * List of events emitted by the configure lifecycle method
       */
      emit: ['spool:generics:configured']
    },
    initialize: {
      listen: [],
      emit: ['spool:generics:initialized']
    }
  }
}

