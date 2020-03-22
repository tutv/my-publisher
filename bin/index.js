#!/usr/bin/env node
'use strict'

const meow = require('meow')
const myPublisher = require('../src/index')


const cli = meow(`
	Usage
	  $ publish

	Options
	  --path, -p
	  --message, -m  
	  --access, -a public or private
	  --release, -r Release type: auto, patch, minor, major

	Examples
	  $ publish
	  $ publish -p . -m "release new version" --access public
	  $ publish -p . -m "release new version" --access private --release minor
`, {
    flags: {
        message: {
            type: 'string',
            alias: 'm',
            default: 'Increase new version'
        },
        path: {
            type: 'string',
            alias: 'p',
        },
        access: {
            type: 'string',
            alias: 'a',
            default: 'private'
        },
        release: {
            type: 'string',
            alias: 'r',
            default: 'auto'
        }
    }
})


myPublisher(cli.flags)
