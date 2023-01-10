import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Form from '../components/form'
import {addModel, editModelo} from '../../redux/modeloSlice'
import Selects from './selects'

const inputs = [
  {
    id: 1,
    name: 'Descripcion'
  },
  {
    id: 2,
    name: 'Cilindros',
    type: 'numeric'
  },
  {
    id: 3,
    name: 'Modelo',
    type: 'numeric'
  },
  {
    id: 4,
    name: 'Puertas',
    type: 'numeric'
  },
]

const TabsModel = props => {
  const disparch = useDispatch();
  const modelState = useSelector((state) => state.modelos)
  const [currentTab, setCurrentTab] = useState(0);
  const [selectEdit, setSelectEdit] = useState(1);
  const [modelSelect, setModelSelect] = useState(1);
  
  const onSubmitAdd = (data) =>{
    // formateo los datos
    let newCar = {
      identificador: modelState.length + 1,
      descripcion: data.Descripcion,
      cilindros: parseInt(data.Cilindros),
      modelo: parseInt(data.Modelo),
      puertas: parseInt(data.Puertas),
      marca: parseInt(modelSelect)
    } 
    // almacenamos en el estado global
    disparch(addModel(newCar))
    props.closeModal(false)
  };

  const onSubmitEdit = (data) =>{
    // formateo los datos
    let newCar = {
      identificador: selectEdit,
      descripcion: data.Descripcion,
      cilindros: parseInt(data.Cilindros),
      modelo: parseInt(data.Modelo),
      puertas: parseInt(data.Puertas),
      marca: parseInt(modelSelect)
    } 
    // almacenamos en el estado global
    disparch(editModelo(newCar))
    props.closeModal(false)
  };

  const selected = (marca, modelo) =>{
    if(modelo !== null && Object.entries(modelo).length !== 0){ 
      setSelectEdit(modelo[0].identificador)
    }    
  }

  return (
    <View>
      <View style={tab.main}>
        <Pressable onPress={() => setCurrentTab(0)}>
          <Text>Agregar</Text>
        </Pressable>
        <Pressable onPress={() => setCurrentTab(1)}>
          <Text>Editar</Text>
        </Pressable>
      </View>
      {currentTab === 0 && (
        <View>
          <Form inputs={inputs} handle={onSubmitAdd} selectValue={setModelSelect} selectVisible={true}/>
        </View>
      )}
      {currentTab === 1 && (
        <View>
          <Selects getData={selected} modelVisible={true}/>  
          <Form inputs={inputs} handle={onSubmitEdit} selectValue={setModelSelect} selectVisible={true}/>
        </View>
      )}
    </View>
  )
}

const tab = StyleSheet.create({
  main:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignContent:'center',backgroundColor:'#f2f2f2',
    padding:15,borderRadius:5,
    marginBottom:20
  },
})

export default TabsModel