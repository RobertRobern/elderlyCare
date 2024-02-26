import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

export default function Profile() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [gender, setGender] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [isValid, setIsValid] = useState(true);

  const onLogin = async () => {

    const data = [
      {
        email: "Jerry@gmail.com",
        password: "1234567"
      },
      {
        email: "Hammond@gmail.com",
        password: "1234567"
      }
    ]

    const anonymous = {};

    function LoginAnonymously() {
      if ((email == data.email || email == data.email) && password == data.password) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }

    }

    // step 18 createUserWithEmailAndPassword to signInWithEmailAndPassword
    if (email && password) {
      try {
        
      } catch (error) {
        console.log(error)
        console.log("Oops, Create an account!")
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     // ..
        //     console.log("errorCode: " + errorCode)
        //     console.log("errorMessage: " + errorMessage)
      }
    }

    if (email.length == 0 || password.length == 0) {
      setIsValid({ bool: true, boolSnack: true, message: "Please fill out everything" })
      return;
    }

  }

  return (
    <View style={styles.container}>
      <View></View>
      <View style={styles.form}>
        <TextInput
          style={form.textInput}
          placeholder="First Name"
          onChangeText={(fname) => setFname(fname)}
        />
        <TextInput
          style={form.textInput}
          placeholder="Last Name"
          onChangeText={(lname) => setLname(lname)}
        />
        <TextInput
          style={form.textInput}
          placeholder="Username"
          onChangeText={(username) => setUsername(username)}
        />
        <TextInput
          style={form.textInput}
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          style={form.textInput}
          placeholder="Gender"
          onChangeText={(gender) => setGender(gender)}
        />
        <TextInput
          style={form.textInput}
          placeholder="Date of Birth"
          onChangeText={(birthDate) => setBirthDate(birthDate)}
        />
        <TextInput
          style={form.textInput}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
        <Button
          style={form.button}
          onPress={() => onLogin()}
          title="Save"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  form: {
    margin: 25,
  }
});

const form = StyleSheet.create({
  textInput: {
    marginBottom: 10,
    borderColor: 'gray',
    backgroundColor: 'whitesmoke',
    padding: 10,
    borderWidth: 1,
    borderRadius: 8
  },
  bottomButton: {
    alignContent: 'center',
    borderTopColor: 'gray',
    borderTopWidth: 1,
    padding: 10,
    textAlign: 'center',
  },
  roundImage: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2
  }

})
