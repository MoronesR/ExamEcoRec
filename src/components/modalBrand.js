import { View, Modal, StyleSheet, Button } from 'react-native'
import React from 'react';
import TabsBrands from './tabsBrands';

const ModalBrand = props => {
  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={props.visible}
  >
    <View style={style.backModal}>  
      <View style={style.mainModal}>      
        <TabsBrands closeModal={props.setModalVisible}/>
        <View style={style.button}>
          <Button
            title='Cerrar'
            color='#333'
            onPress={() => props.setModalVisible(!props.visible)}
          >
          </Button>
        </View>    
      </View>   
    </View>
  </Modal>
  )
}

const style = StyleSheet.create({
  backModal:{
    backgroundColor:'#3335',
    flex:1
  },
  mainModal:{
    backgroundColor:'#fff',
    margin:20,
    padding: 20,
    marginTop:200,
    borderRadius:10
  },
  button:{
    marginTop:20
  }
})

export default ModalBrand