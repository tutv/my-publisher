const ora = require('ora')

const spinner = ora('Loading unicorns').start()

setTimeout(() => {
    spinner.color = 'yellow';
    spinner.text = 'Loading rainbows';
}, 1000)

setTimeout(() => {
    spinner.succeed()
    spinner.stop()
}, 5000)