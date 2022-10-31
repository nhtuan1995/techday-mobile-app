module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "react-native-reanimated/plugin",
      {
        globals: ['__scanCodes'],
      },
    ],
    [
      'module-resolver',
      {
        // root: ['./App'],
        alias: {
          Common: './App/Common',
          Components: './App/Components',
          Config: './App/Config',
          Containers: './App/Containers',
          Images: './App/Images',
          Services: './App/Services',
          Styles: './App/Styles',
          Themes: './App/Themes',
        },
      },
    ],
  ],
};
