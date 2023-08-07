import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {},
  closeButton: {
    marginTop: 5,
    width: 35,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
    backgroundColor: '#00000077',
    position: 'absolute',
    right: 10,
  },
  closeText: {
    lineHeight: 22,
    fontSize: 19,
    textAlign: 'center',
    color: '#FFF',
    includeFontPadding: false,
  },
  numberLabel: {
    color: 'white',
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: '500',
  },
  headerContainer: {
    paddingVertical: 10,
    alignItems: 'center',
  },
});
