## Code setup

1. Vs code version -- 1.7.1
2. node version --- v16.9.1
3. React-native --- 0.70.6
4. Please open code in Vs code
5. Install npm packages using vs code terminal using command-
   npm install
6. clean gradlew by hitting -
   1. cd android
   2. ./gradlew clean
   3. cd..
7. run command in terminal -
   1. android -
      npx react-native run-android
   2. for ios -
      cd ios 
      pod install
      npx react-native run-ios


        buildToolsVersion = "31.0.0"
        minSdkVersion = 21
        compileSdkVersion = 31
        targetSdkVersion = 31
