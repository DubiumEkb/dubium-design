import fs from 'fs'
import path from 'path'

const updateExports = () => {
	const componentsDir = path.join( process.cwd(), 'src/components' )
	const distDir = path.join( process.cwd(), 'dist' )
	const pkgPath = path.join( process.cwd(), 'package.json' )

	try {
		const components = fs.readdirSync( componentsDir )
			.filter( name => fs.statSync( path.join( componentsDir, name ) ).isDirectory() )

		const pkg = JSON.parse( fs.readFileSync( pkgPath, 'utf-8' ) )

		// 1. Основной файл экспорта
		const mainExports = components.map( comp =>
			`export * from './components/${ comp }/index.js';`
		).join( '\n' )

		fs.writeFileSync(
			path.join( distDir, 'index.js' ),
			mainExports,
			'utf-8'
		)

		// 2. Обновляем package.json
		pkg.exports = {
			".": {
				"types": "./dist/index.d.ts",
				"import": "./dist/index.js"
			},
			"./*": {
				"types": "./dist/components/*/index.d.ts",
				"import": "./dist/components/*/index.js",
				"style": "./dist/components/*/*.css"
			}
		}

		fs.writeFileSync( pkgPath, JSON.stringify( pkg, null, 2 ), 'utf-8' )
		console.log( '✅ Exports updated successfully!' )
	} catch ( error ) {
		console.error( '❌ Error updating exports:', error )
		process.exit( 1 )
	}
}

updateExports()