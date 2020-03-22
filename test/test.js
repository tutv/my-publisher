const _getNewVersion = require('../src/core/_getNewVersion')

setImmediate(async () => {

    const x = await _getNewVersion('10.9.9', 'patch')
    console.log(x)
})

