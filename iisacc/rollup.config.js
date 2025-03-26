import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';

const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/App.svelte',
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        file: 'public/bundle.js',
        globals: {
            'svelte/internal': 'svelte'
        }
    },
    plugins: [
        svelte({
            compilerOptions: {
                dev: !production
            },
            emitCss: true
        }),
        css({ output: 'bundle.css' }),
        resolve({
            browser: true,
            dedupe: ['svelte'],
            exportConditions: ['svelte']
        }),
        !production && livereload('public'),
        production && terser()
    ],
    watch: {
        clearScreen: false
    }
};