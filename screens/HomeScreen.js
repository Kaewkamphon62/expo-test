import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth, firestore} from '../firebase'

const HomeScreen = () => {

  const navigation = useNavigation()

  const nav_form = () => {
    navigation.navigate('Form');
  }

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={{padding:'2%'}}>Email: {auth.currentUser?.email}</Text>
        <Text style={{padding:'2%'}}>UserID: {auth.currentUser?.uid}</Text>
        <Text style={{padding:'2%'}}>Name: {auth.currentUser?.name}</Text>
        <Text style={{padding:'2%'}}>Lastname: </Text>
        <Text style={{padding:'2%'}}>อายุ: </Text>
        <Text style={{padding:'2%'}}>เพศ: </Text>
      </View>

      <View style={{alignItems:'center'}}>
        <TouchableOpacity 
          onPress={nav_form} style={styles.button}>
          <Text style={styles.buttonText}>Form</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleSignOut} style={[styles.button, styles.buttonOutline]}>
          <Text style={styles.buttonOutlineText}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    top: 15,
    flex: 1,
    padding:'2%'
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
  
})
