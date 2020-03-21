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

	Examples
	  $ publish -p . -m "release new version"
`, {
    flags: {
        message: {
            type: 'string',
            alias: 'm'
        },
        path: {
            type: 'string',
            alias: 'p'
        }
    }
})


myPublisher(cli.flags)
