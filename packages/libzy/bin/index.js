#!/usr/bin/env node

'use strict';
/**
 * Require dependencies
 *
 */
const program = require('commander')
const
  create = require('./commands/create').default,
  version = require('./commands/version').default;

/*****************************************************************************************************************/
/** 
 * commands
 */

program
  .command('create')
  .option('-d, --dir <dir>', 'Directory', process.cwd())
  .action((options) => {
    create(options);
  });


program.command("version").action(() => { version(); });

/*****************************************************************************************************************/

program.parse(process.argv);
// if program was called with no arguments, show help.
if (program.args.length === 0) program.help();