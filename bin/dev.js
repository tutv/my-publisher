#!/usr/bin/env node
'use strict'

const path = require('path')
const dotenv = require('dotenv')
const myPublisher = require('../src/index')

dotenv.config({
    path: path.join(__dirname, '../dev.env')
})

const {CURRENT_DIR} = process.env

myPublisher({
    path: CURRENT_DIR,
    message: 'my message',
    access: 'public'
})


