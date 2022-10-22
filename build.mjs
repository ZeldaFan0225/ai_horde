import esbuild from 'esbuild'

esbuild.buildSync({
    absWorkingDir: process.cwd(),
    entryPoints: ['index.ts'],
    minifyIdentifiers: true,
    minifyWhitespace: true,
    minifySyntax: false,
    outfile: 'index.js',
    platform: 'node',
    keepNames: true,
    format: 'cjs',
    bundle: true
})