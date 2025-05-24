import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Form from '../components/form'
import {addMarca, editMarca, removeMarca} from '../../redux/marcasSlice'
import Selects from './selects'

const inputs = [
  {
    id: 1,
    name: 'Descripcion'
  },
]

const tabsBrands = props => {
    const disparch = useDispatch();
    const marcasState = useSelector((state) => state.marcas)
    const [currentTab, setCurrentTab] = useState(0);
    const [selectEdit, setSelectEdit] = useState(1);

    const onSubmitAdd = (data) =>{
      // formateo los datos
      let newBrand = {
        identificador: marcasState.length + 1,
        descripcion: data.Descripcion,
      } 
      disparch(addMarca(newBrand));
      props.closeModal(false);
    };

    const onSubmitEdit = (data) =>{
      // formateo los datos
      let newBrand = {
        identificador: selectEdit,
        descripcion: data.Descripcion,
      }
      disparch(editMarca(newBrand));
      props.closeModal(false);
    };

    const handleDelete = () =>{
      disparch(removeMarca(selectEdit));
      props.closeModal(false);
    };

    const selected = (e) =>{
      setSelectEdit(e)
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
          <Pressable onPress={() => setCurrentTab(2)}>
            <Text>Eliminar</Text>
          </Pressable>
        </View>
        {currentTab === 0 && (
          <View>
            <Form inputs={inputs} handle={onSubmitAdd}/>
          </View>
        )}
        {currentTab === 1 && (
          <View>
            <Selects getData={selected} modelVisible={false}/>
            <Form inputs={inputs} handle={onSubmitEdit}/>
          </View>
        )}
        {currentTab === 2 && (
          <View>
            <Selects getData={selected} modelVisible={false}/>
            <Pressable style={tab.deleteBtn} onPress={handleDelete}>
              <Text>Eliminar Marca</Text>
            </Pressable>
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
  deleteBtn:{
    backgroundColor:'#fcc',
    padding:10,
    alignItems:'center',
    borderRadius:5,
    marginTop:10
  }
})

export default tabsBrands