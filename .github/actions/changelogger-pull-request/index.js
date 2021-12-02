const core = require( '@actions/core' );

const branch = core.getInput( 'branch' );
const diff = core.getInput( 'branch' );

console.log( branch );
console.log( diff );
