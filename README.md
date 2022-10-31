## Init

- yarn install
- cd ios && pod install

## Copy files

- /ios/techdayApp.xcodeproj/project.pbxproj.example copy rồi đổi tên thành project.pbxproj

## Style font weight

- Sử dụng font weight trong /App/Themes/Styles.js
- ~~Không sử dụng { fontWeight: '600' }~~
```
import styles from './App/Containers/Styles/common';

textSemiBold: {
  ...styles.fontSemiBold,
}
```

