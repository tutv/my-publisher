#!/usr/bin/env node
'use strict'

const meow = require('meow')
const myPublisher = require('../src/index')

const cli = meow(`
	Usage
	  $ publish

	Options
	  --message, -m  

	Examples
	  $ publish -m "release new version"
`, {
    flags: {
        message: {
            type: 'string',
            alias: 'm'
        }
    }
})


myPublisher(cli.flags)
