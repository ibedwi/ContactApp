import { StyleSheet } from 'react-native'
import theme from '../../styles/theme.styles';

const styles = StyleSheet.create({
  overlay: { 
    padding: 0, 
    borderRadius: 10, 
    elevation: 18 
  },
  container: {
    backgroundColor: theme.COLOR.PURE_WHITE,
    padding: 20,
    // height: theme.DEVICE.HEIGHT * 0.20,
    // maxHeight: 100,
    width: theme.DEVICE.WIDTH * 0.7,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10
  },
  buttonContainer: {
    flexDirection: 'row' 
  },
  buttonGroupContainer: {
    height: 27, 
    borderWidth: 0,
    backgroundColor: 'rgba(52, 52, 52, 0)'
  },
  buttonGroup: { 
    margin: 0,
    borderWidth: 0,
  },
  buttonGroupInnerBorder: {
    width: 0
  },
  messageText: {
    paddingHorizontal: 5,
    textAlign: 'center',
    fontSize: theme.FONT.SIZE.BODY1,
    color: theme.COLOR.PURE_BLACK,
    marginBottom: 10
  }
})

export default styles;