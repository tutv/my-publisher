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
	  --access, -a  

	Examples
	  $ publish -p . -m "release new version" --access public
`, {
    flags: {
        message: {
            type: 'string',
            alias: 'm'
        },
        path: {
            type: 'string',
            alias: 'p'
        },
        access: {
            type: 'string',
            alias: 'a',
            default: 'private'
        }
    }
})


myPublisher(cli.flags)
