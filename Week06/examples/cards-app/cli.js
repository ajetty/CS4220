const
    app = require('./app'),
    yargs = require('yargs')


const flags = yargs.usage('$0: Usage <cmd> [options]')
    .command({
        command: 'draw',
        desc: 'draws a card from the deck',
        builder: (yargs) => {
            return yargs.option('s', {
                alias: 'shuffle',
                describe: 'shuffle the deck before drawing'
            })
        },
        handler: (argv) => { app.draw(argv.shuffle) }
    })
    .help('help')
    .argv