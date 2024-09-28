import * as esbuild from 'esbuild';
import { stdin as input, stdout as output } from 'node:process';
import * as readline from 'node:readline';

const ctx = await esbuild.context({
  bundle: true,
  entryPoints: ['./src/index.ts'],
  outfile: 'dist/index.js',
  format: 'cjs',
  platform: 'node',
  plugins: [
    {
      name: 'rebuild-notify',
      setup(build) {
        build.onEnd((result) => {
          const now = `[${new Date().toLocaleTimeString()}]`;
          if (result.errors.length) {
            console.error(`${now} ${result.errors}`);
            return;
          }
          console.log('build.');
          if (result.warnings.length) {
            console.log(`${now} ${result.warnings}`);
          }
        });
      },
    },
  ],
});

const args = process.argv.slice(2);
const watch = args.includes('--watch');

if (watch) {
  await ctx.watch().catch((err) => {
    console.error(err);
    process.exit(1);
  });
  const rl = readline.createInterface({ input, output });
  rl.question('exit?: \n', (answer) => {
    if (answer.toLowerCase() === 'exit') {
      console.log('stop watch process.');
      ctx.dispose();
      rl.close();
    }
  });
} else {
  ctx.rebuild().catch((err) => {
    console.error(err);
    process.exit(1);
  });
  ctx.dispose();
}