## Init

- yarn install
- cd ios && pod install

## Copy files

- /ios/techdayApp.xcodeproj/project.pbxproj.example copy rồi đổi tên thành project.pbxproj

## Issue

### Lỗi 'value' is unavailable: introduced in iOS 12.0

- Sửa file /ios/build/generated/ios/React-Codegen.podspec.json

```
"platforms":{"ios":"11.0"} --> "platforms":{"ios":"12.0"}
```

- Sửa file /node_modules/react-native/scripts/react_native_pods.rb

```
line 283: đổi 11.0 -> 12.0

should_upgrade = deployment_target < 12.0 && deployment_target != 0.0
if should_upgrade
  config.build_settings['IPHONEOS_DEPLOYMENT_TARGET'] = '12.0'
end
```

