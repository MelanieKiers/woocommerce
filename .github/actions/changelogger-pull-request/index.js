const core = require( '@actions/core' );

const branch = core.getInput( 'branch' );
const diff = core.getInput( 'diff' );

const rxString = `.*(?=\/changelog\/${ branch }).*`;
const rx = new RegExp( rxString, 'gm' );

if ( rx.test( diff ) ) {
	const [ changelogFilePath ] = rx.exec( diff );
	console.log( changelogFilePath );
}
