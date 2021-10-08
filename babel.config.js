module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@app/routes/*': './src/routes/*',
          '@app/screens': './src/screens',
          '@app/components': './app/components',
          '@app/styles': './src/styles',
          '@app/assets': './src/assets',
          '@app/redux': './src/redux',
          '@app/views': './src/views',
        },
      },
    ],
  ],
};
