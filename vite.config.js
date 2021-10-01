import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { visualizer } from 'rollup-plugin-visualizer';

// export default () => {
//   // console.log('mode: ', mode);
//   // process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

//   // // import.meta.env.VITE_NAME available here with: process.env.VITE_NAME
//   // console.log('process.env.VITE_NAME: ', process.env.VITE_NAME);
//   return defineConfig({
//     plugins: [vue()],

//     // server: {
//     //   port: process.env.VITE_PORT,
//     // },
//   });
// }

// import { defineConfig, loadEnv } from 'vite';
// import vue from '@vitejs/plugin-vue';
// // import visualizer from 'rollup-plugin-visualizer';


export default defineConfig(({ mode }) => {
  console.log('mode: ', mode);
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  // import.meta.env.VITE_NAME available here with: process.env.VITE_NAME
  console.log('process.env.VITE_NAME: ', process.env.VITE_NAME);
  console.log('process.env.VITE_PORT: ', process.env.VITE_PORT);
  return {
    plugins: [vue(), visualizer()],
    // plugins: [vue()],

    // server: {
    //   port: process.env.VITE_PORT,
    // },
  };
});