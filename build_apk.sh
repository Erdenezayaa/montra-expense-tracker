#!/bin/bash
rm -rf android/app/src/main/res/drawable-*
rm -rf android/app/src/main/res/raw/*
cd android
./gradlew clean
./gradlew app:assembleRelease --stacktrace 
cd ../
npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
open android/app/build/outputs/apk/release/