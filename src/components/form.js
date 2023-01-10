import { View, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'
import { useController, useForm } from 'react-hook-form';
import Selects from './selects'

const Input = ({name, control, type = 'default'}) =>{
  const {field} = useController({
    control,
    defaultValue: '',
    name,
  });
  return(
    <TextInput
      style={form.inpuText}
      keyboardType={type}
      value={field.value}
      placeholder={field.name}
      onChangeText={field.onChange}
    />
  )
}

const Form = (props) => {
  const {control, handleSubmit} = useForm();
  const selected = e =>{
    props.selectValue(e);
  }
  return (
    <View>
      {props.inputs.map((input)=>{
        return <Input key={input.id} type={input.type} name={input.name} control ={control} />
      })}
      { props.selectVisible &&(
        <Selects getData={selected} modelVisible={false}/>  
      )}      
      <View style={form.button}>
        <Button title="Guardar" onPress={handleSubmit(props.handle)} ></Button>
      </View>
    </View>
  )
}

const form = StyleSheet.create({
  inpuText:{
    height: 40,
    margin: 5,
    borderWidth: .3,
    padding: 10,
    borderRadius:5
  },
  button:{
    marginTop:20
  }
})

export default Form