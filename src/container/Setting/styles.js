import {Dimensions} from 'react-native';
export default {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'space-between',    
    backgroundColor: "#F5FCFF",
    padding: 50
  },
  image: {
    margin: 30,
    width: Dimensions.get("window").width - 100,
    height: 365 * (Dimensions.get("window").width - 100) / 651,
  },
  messages: {
    marginTop: 30,
    textAlign: "center",
  },
  restartToggleButton: {
    fontSize: 17
  },
  syncButton: {
    fontSize: 17
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 20
  },
}