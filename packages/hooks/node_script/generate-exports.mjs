import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath( import.meta.url )
const __dirname = path.dirname( __filename )

const distDir = path.resolve( __dirname, '../dist' )

// Базовые экспорты
const exportsField = {
	".": {
		"types": "./dist/index.d.ts",
		"import": "./dist/index.js"
	}
}

try {
	// Проверяем существование директории dist/hooks
	const hooksDir = path.join( distDir, 'hooks' )
	if ( !fs.existsSync( hooksDir ) ) {
		console.log( 'ℹ️ Директория dist/hooks не найдена, используются только основные экспорты' )
	} else {
		// Читаем файлы хуков
		const hookFiles = fs.readdirSync( hooksDir )
			.filter( file => file.endsWith( '.js' ) && !file.endsWith( '.d.ts.js' ) )
			.map( file => file.replace( '.js', '' ) )

		for ( const hook of hookFiles ) {
			const hookPath = `./${ hook }`
			const hookBasePath = `./dist/hooks/${ hook }`

			// Добавляем экспорт для каждого хука
			exportsField[ hookPath ] = {
				"types": `${ hookBasePath }.d.ts`,
				"import": `${ hookBasePath }.js`
			}
		}
	}

	// Обновляем package.json
	const pkgPath = path.resolve( __dirname, '../package.json' )
	const pkg = JSON.parse( fs.readFileSync( pkgPath, 'utf-8' ) )

	// Сохраняем только необходимые экспорты (перезаписываем полностью)
	pkg.exports = exportsField

	fs.writeFileSync( pkgPath, JSON.stringify( pkg, null, 2 ) + '\n' )
	console.log( '✅ package.json exports успешно обновлены!' )
} catch ( error ) {
	console.error( '❌ Ошибка при генерации экспортов:', error )
	process.exit( 1 )
}