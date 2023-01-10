import { View, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import { useSelector, useDispatch } from 'react-redux'

const selects = (props) => {
    const marcasState = useSelector((state) => state.marcas)
    const modelosState = useSelector((state) => state.modelos)
    const [marcas,setMarcas] = useState([]);
    const [model,setModel] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState([]);
    const [selectedCar,setSelectedCar] = useState([]);
    
    const changeCarBrand = () =>{
      let cars = modelosState.filter(modelo => modelo.marca === selectedBrand);
      setModel(mapData(cars));
      props.getData(selectedBrand, null)
    }

    const changeCar = () =>{
      props.getData(selectedBrand,modelosState.filter(modelo => modelo.identificador === selectedCar));
    }
    
    const mapData = (data) =>{
        return newArray = data.map((item) => {
         return {key: item.identificador, value: item.descripcion}
       })
   };
 
   useEffect(()=>{
    setMarcas(mapData(marcasState));
   },[marcasState,modelosState]);

  return (
    <View>
      <SelectList boxStyles={style.item} setSelected={setSelectedBrand} data={marcas} search={false} onSelect={changeCarBrand}  placeholder="Selecciona la Marca"/>
      {props.modelVisible && (
        <SelectList boxStyles={style.item} setSelected={setSelectedCar} data={model} search={false} onSelect={changeCar} placeholder="Selecciona la Modelo"/>
      )}
    </View>
  )
}

const style = StyleSheet.create({
  item:{
    margin:5,
    with:100,
    borderColor:'gray'
  }
});

export default selects