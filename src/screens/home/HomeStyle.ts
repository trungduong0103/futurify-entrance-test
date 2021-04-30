import {StyleSheet} from 'react-native';
import {Platform, NativeModules} from 'react-native';
const {StatusBarManager} = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    paddingTop: STATUSBAR_HEIGHT + 10,
    flex: 0.5,
  },
  foodListWrapper: {
    flex: 5,
  },
  navigationWrapper: {
    flex: 0.5,
  },
});