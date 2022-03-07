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
    backgroundColor: 'rgb(61, 61, 172)',
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'rgb(121, 121, 156)',
    marginHorizontal: 5,
    width: 100,
    borderRadius: 70,
    display: 'flex',
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    color: 'white',
    fontSize: 16,
    marginRight: 2,
  },

  purpleRed: {
    backgroundColor: '#862f15',
    width: 150,
    height: 150,
  },
});
