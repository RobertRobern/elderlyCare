import { StyleSheet } from "react-native";

export const textStyle = StyleSheet.create({
    h1: { fontSize: 58, fontWeight: '300', lineHeight: 80  },
    h2: { fontSize: 46, fontWeight: '300', lineHeight: 64 },
    h3: { fontSize: 34, fontWeight: '300', lineHeight: 50 },
    h4: { fontSize: 22, fontWeight: '300', lineHeight: 36 },
    h5: { fontSize: 18, fontWeight: '300', lineHeight: 22 },
  });

  export const componentStyles = StyleSheet.create({
    rowContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection:'row',
      padding: 8,
    },
    columnContainer: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 8,
    },
    
});

export const cardStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
});

export const dashboardStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  userContainer: {
    flex: .6,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    padding: 5
  },
  userMetrics: {
    flex: 1,
    // backgroundColor: 'red',
    alignItems: 'flex-start',
    flexDirection: 'column',
    width: '100%',
    height: 'auto',
    margin: 4,
    padding: 8
  },
  userBio: {
    flex: .4,
    flexDirection: 'row',
    // backgroundColor: 'red',
    width: '100%',
  },
  healthScore: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'pink',
    width: '100%',

  },
  username: {
    flex: .8,
    alignItems: 'flex-start',
    justifyContent: 'center',
    // backgroundColor: 'red',
    paddingLeft: 10,
  },
  avatar: {
    flex: .5,
    // backgroundColor: 'red',    
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
  },

});