import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
  },
});

export const homeStyles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
  },
  separator: {
    borderBottomWidth: 1,
    opacity: 0.4,
    marginVertical: 8,
  },
});

export const animationStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
  },
  purpleRed: {
    backgroundColor: '#862f15',
    width: 150,
    height: 150,
  },
});
