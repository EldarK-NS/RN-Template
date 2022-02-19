import {resolve} from 'path';
export default function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          extensions: [
            '.js',
            '.ts',
            '.ios.js',
            '.ios.ts',
            '.android.js',
            '.android.ts',
            '.json',
            '.tsx',
          ],
          alias: {
            atoms: resolve(__dirname, './src/components/atoms'),
            molecules: resolve(__dirname, './src/components/molecules'),
            organisms: resolve(__dirname, './src/components/organisms'),
            templates: resolve(__dirname, './src/components/templates'),
            context: resolve(__dirname, './src/context'),
            modules: resolve(__dirname, './src/state/modules/index.ts'),
            models: resolve(__dirname, './src/state/models'),
            repositories: resolve(__dirname, './src/state/repositories'),
            services: resolve(__dirname, './src/state/services'),
            store: resolve(__dirname, './src/state/store'),
            theme: resolve(__dirname, './src/theme'),
            hooks: resolve(__dirname, './src/hooks'),
            nav: resolve(__dirname, './src/views/navigation'),
            navTypes: resolve(__dirname, './src/navigation/types.ts'),
            screens: resolve(__dirname, './src/screens'),
          },
        },
      ],
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          blacklist: null,
          whitelist: [''],
          safe: false,
          allowUndefined: true,
        },
      ],
    ],
  };
}
