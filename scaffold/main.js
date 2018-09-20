#!/usr/bin/env node
var yargs = require('yargs');
var argv = yargs
    .usage('Usage: $0 <cmd> [args]')
    .command(require('./new.js'))
    .command(
        'add <item>',
        'add a new [contract|function]',
        function() {
            return yargs
                .usage('Usage: $0 add <item> [args]')
                .command(require('./add_contract.js'))
                .command(require('./add_function.js'))
                .command(require('./add_test.js'))
                .alias('h', 'help')
        }
    )
    .command(require('./compile.js'))
    .command(require('./test.js'))
    .alias('h', 'help')
    .argv;