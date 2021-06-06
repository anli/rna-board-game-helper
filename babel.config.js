module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
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
          '@games': './src/games',
          '@store': './src/store',
          '@themes': './src/themes',
          '@test': './src/test',
          '@hooks': './src/hooks',
          '@ui': './src/ui',
          '@api': './src/api',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
        },
      },
    ],
  ],
};
