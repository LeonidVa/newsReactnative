import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {gStyles} from "./styles/style";
import * as Font from 'expo-font'
import {useCallback, useEffect, useState} from "react";
import * as SplashScreen from 'expo-splash-screen';






export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);


  useEffect(() => {
    async function prepare() {
      try {

        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          'mt-bold' : require(`./assets/fonts/Montserrat-Bold.ttf`),
          'mt-light' : require(`./assets/fonts/Montserrat-Light.ttf`)
        });
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {

    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

    return (
        <View style={gStyles.main}>
          <Text style={gStyles.title}>vdxvsdxvsdvsdvsdvds</Text>

        </View>
    );



}

const styles = StyleSheet.create({

});
