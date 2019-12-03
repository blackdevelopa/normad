import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
    width: '100%',
    borderRadius: 10,
  },
  imageCon: {
    height: '100%',
    width: '20%',
    alignSelf: 'center',
    marginLeft: 10,
    alignItems: 'flex-end',
  },
  image: {
    height: 120,
    width: 100,
  },
  content: {
    width: '60%',
    marginHorizontal: '3%',
    height: '100%',
    paddingVertical: 10,
  },
  text: {
    fontSize: 20,
    paddingVertical: 1,
  },
  title: {
    fontWeight: '600',
  },
});
