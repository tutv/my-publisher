const _getNewVersion = require('../src/core/_getNewVersion')

setImmediate(async () => {

    const x = _getNewVersion('10.9.9')
    console.log(x)
})

