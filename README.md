# spool-email

[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build Status][ci-image]][ci-url]
[![Test Coverage][coverage-image]][coverage-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Follow @FabrixApp on Twitter][twitter-image]][twitter-url]

## An email template builder for Fabrix

## Install

```sh
$ npm install --save @fabrix/spool-email
```

## Configure

```js
// config/main.ts
import { EmailSpool } from '@fabrix/spool-email'

export const main = {
  spools: [
    // ... other spools
    EmailSpool
  ]
}
```

```js
// config/email.ts
export const email = {
  
}
```

## Usage
Many different modules Fabrix will use an email to notify users. This composes the emails using either custom/ejs Templates, or Database emails.


## Contributing
We love contributions! Please check out our [Contributor's Guide](https://github.com/fabrix-app/fabrix/blob/master/.github/CONTRIBUTING.md) for more
information on how our projects are organized and how to get started.

## License
[MIT](https://github.com/fabrix-app/spool-email/blob/master/LICENSE)

[fabrix-image]: http://i.imgur.com/zfT2NEv.png
[fabrix-url]: http://fabrix.app
[npm-image]: https://img.shields.io/npm/v/@fabrix/spool-email.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@fabrix/spool-email
[ci-image]: https://img.shields.io/circleci/project/github/fabrix-app/spool-email/master.svg
[ci-url]: https://circleci.com/gh/fabrix-app/spool-email/tree/master
[daviddm-image]: http://img.shields.io/david/fabrix-app/spool-email.svg?style=flat-square
[daviddm-url]: https://david-dm.org/fabrix-app/spool-email
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/fabrix-app/Lobby
[twitter-image]: https://img.shields.io/twitter/follow/FabrixApp.svg?style=social
[twitter-url]: https://twitter.com/FabrixApp
[coverage-image]: https://img.shields.io/codeclimate/coverage/github/fabrix-app/spool-email.svg?style=flat-square
[coverage-url]: https://codeclimate.com/github/fabrix-app/spool-email/coverage
