const core = require( '@actions/core' );

const branch = core.getInput( 'branch' ).replace( '/', '-' );
const diff = core.getInput( 'diff' );

const rx = new RegExp( `.*(?=\/changelog\/${ branch }).*`, 'gm' );

if ( ! rx.test( diff ) ) {
	console.log( 'no changelog detected' );
	process.exit( 1 );
}

const [ changelogFilePath ] = rx.exec( diff );
console.log( changelogFilePath );
