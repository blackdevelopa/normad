import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  btn: {
    padding: '3%',
    marginVertical: '5%',
    borderRadius: 10,
    marginHorizontal: '10%',
    backgroundColor: colors.button,
  },
  btn_text: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 18,
    fontWeight: '500',
  },
});
