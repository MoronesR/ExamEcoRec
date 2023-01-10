import { View, Text, StyleSheet, Button  } from 'react-native'
import React, {useState} from 'react'

import Selects from './components/selects'
import ModalBrand from './components/modalBrand'
import ModalModel from './components/modalModel'

const Index = () => {
  const [modalBrandVisible, setModalBrandVisible] = useState(false);
  const [modalModeloVisible, setModalModeloVisible] = useState(false);
  const [detallesCar, setDetallesCar] = useState([]);

  const carSelected = (marca, modelo) =>{
    if(modelo !== null && Object.entries(modelo).length !== 0){ 
      setDetallesCar(modelo[0])
    }  
  }

  return (
    <View style = {style.container}>
      <View style = {style.controls}>
        <View style={style.selects}>
          <Selects  getData = {carSelected} modelVisible={true}/>
        </View>
        <View style={style.buttons}>
          <Button 
            onPress={()=>setModalBrandVisible(true)}
            title="+"
            color="#333"
          />
          <Button 
            onPress={()=>setModalModeloVisible(true)}
            title="+"
            color="#333"
          />
        </View>
      </View>
      {detallesCar != "" ? (
        <View style={style.data}>
          <Text>
            <Text style={style.boldText}>Descripcion: </Text>
            {detallesCar.descripcion}
          </Text>
          <Text>
            <Text style={style.boldText}>Modelo: </Text>
            {detallesCar.modelo}
          </Text>
          <Text>
            <Text style={style.boldText}>Cilindros: </Text>
            {detallesCar.cilindros}
          </Text>
          <Text>
            <Text style={style.boldText}>Puertas: </Text>
            {detallesCar.puertas}
          </Text>
        </View>
      ):(
        <View style={style.data}>
          <Text style={{textAlign:'center', fontSize:16}}>Seleccione una Marca y un Modelo</Text>
        </View>
      )}
      <ModalBrand visible={modalBrandVisible} setModalVisible={setModalBrandVisible}/>
      <ModalModel visible={modalModeloVisible} setModalVisible={setModalModeloVisible}/>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    flex:1,
    padding:20
  },
  controls: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignContent:'center'
  },
  selects:{
    width:350,
  },
  buttons:{
    justifyContent:'space-between',
    margin:10,
  },
  data:{
    backgroundColor:'#fff',
    marginTop:50,
    borderRadius:10,
    padding:10
  },
  boldText:{
    fontWeight:'bold',
    fontSize:18,
  }
})

export default Index
















// modal 
