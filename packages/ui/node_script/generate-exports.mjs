import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath( import.meta.url )
const __dirname = path.dirname( __filename )

const distDir = path.resolve( __dirname, '../dist' )

// Создаем объект экспортов
const exportsField = {
	'.': {
		types: './dist/types/index.d.ts',
		import: './dist/index.es.js',
		require: './dist/index.umd.js',
	},
}

try {
	// Проверяем существование директории dist
	if ( !fs.existsSync( distDir ) ) {
		console.log( 'ℹ️ Директория dist не найдена, используются только основные экспорты' )
	} else {
		// Читаем папки в dist (компоненты)
		const components = fs
			.readdirSync( distDir, { withFileTypes: true } )
			.filter( ( dirent ) => dirent.isDirectory() )
			.map( ( dirent ) => dirent.name )

		for ( const comp of components ) {
			const compPath = `./${ comp }`
			const compDir = path.join( distDir, comp )

			// Ищем файлы компонента
			const files = fs.readdirSync( compDir )
			const jsFile = files.find( ( f ) => f.endsWith( '.js' ) && !f.endsWith( '.d.ts.js' ) )
			const dtsFile = files.find( ( f ) => f.endsWith( '.d.ts' ) )
			const cssFile = files.find( ( f ) => f.endsWith( '.module.css' ) || f.endsWith( '.css' ) )

			if ( !jsFile ) {
				console.warn( `⚠️ Пропускаем компонент ${ comp }: не найден JS файл` )
				continue
			}

			// Добавляем экспорт для компонента
			exportsField[ compPath ] = {
				types: dtsFile ? `./dist/${ comp }/${ dtsFile }` : undefined,
				import: `./dist/${ comp }/${ jsFile }`,
				...( cssFile ? { styles: `./dist/${ comp }/${ cssFile }` } : {} ),
			}
		}
	}

	// Обновляем package.json
	const pkgPath = path.resolve( __dirname, '../package.json' )
	const pkg = JSON.parse( await fs.promises.readFile( pkgPath, 'utf-8' ) )

	// Сохраняем оригинальные поля если они есть, и перезаписываем exports
	pkg.exports = {
		...exportsField,
		...( pkg.exports && typeof pkg.exports === 'object' ? pkg.exports : {} ),
	}

	await fs.promises.writeFile( pkgPath, JSON.stringify( pkg, null, 2 ) + '\n' )
	console.log( '✅ package.json exports успешно обновлены!' )
} catch ( error ) {
	console.error( '❌ Ошибка при генерации экспортов:', error )
	process.exit( 1 )
}
