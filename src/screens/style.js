import {StyleSheet} from 'react-native';
import colors from '../utils/colors';

const text = {
  color: colors.white,
};
export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
  },
  topContainer: {
    marginHorizontal: '8%',
    // backgroundColor: 'red',
  },
  logo: {
    backgroundColor: colors.button,
    width: '23%',
    paddingLeft: 10,
    borderRadius: 10,
  },
  mainText: {
    ...text,
    fontSize: 22,
    fontWeight: '700',
    paddingVertical: '1%',
    marginVertical: '5%',
  },
  description: {
    ...text,
    lineHeight: 20,
    fontWeight: '400',
  },
  midContainer: {
    height: '55%',
    marginVertical: '5%',
    // top: '9%',
    marginHorizontal: '8%',
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 90,
  },
  downContainer: {
    position: 'absolute',
    bottom: '0%',
    width: '100%',
  },
});
