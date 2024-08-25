/**
 * @type {import('@builder.io/mitosis').MitosisConfig}
 */
module.exports = {
  files: 'src/**',
  targets: [
    // 'alpine',
    'angular',
    // 'customElement',
    'html',
    // 'mitosis',
    // 'liquid',
    'react',
    'reactNative',
    'solid',
    'svelte',
    // 'swift',
    // 'template',
    // 'webcomponent',
    'vue',
    // 'stencil',
    'qwik',
    // 'marko',
    'preact',
    'lit',
    // 'rsc',
    // 'taro',
  ],
  dest: 'packages',
  commonOptions: {
    typescript: true,
  },
  options: {
    react: {
      stylesType: 'style-tag',
    },
    svelte: {},
    qwik: {},
  },
};