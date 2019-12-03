import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  content: {
    marginTop: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  text: {
    color: 'black',
  },
  spinner: {
    marginBottom: 50,
  },
  input: {
    color: 'white',
    backgroundColor: colors.textInput,
    marginHorizontal: '4%',
    borderRadius: 10,
    paddingVertical: '4%',
  },
});
