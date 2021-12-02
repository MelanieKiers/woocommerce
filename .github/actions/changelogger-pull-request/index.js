const core = require( '@actions/core' );

const branch = core.getInput( 'branch' );
const diff = core.getInput( 'diff' );

const rxString = `.*(?=\/changelog\/${ branch }).*`;
const rx = new RegExp( rxString, 'gm' );

console.log( rxString );

if ( ! rx.test( diff ) ) {
	console.log( 'no changelog detected' );
	process.exit( 1 );
}

const [ changelogFilePath ] = rx.exec( diff );
console.log( changelogFilePath );
