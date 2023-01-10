import { createSlice } from "@reduxjs/toolkit";

export const modeloSlice =createSlice({
    name: 'modelos',
    initialState: [{
        identificador: 1,
        descripcion: "Focus",
        cilindros: 4,
        modelo: 1995,
        puertas: 4,
        marca: 1
      },
      {
        identificador: 2,
        descripcion: "Versa",
        cilindros: 4,
        modelo: 2014,
        puertas: 4,
        marca: 2
      },
      {
        identificador: 3,
        descripcion: "Fusion",
        cilindros: 4,
        modelo: 2002,
        puertas: 4,
        marca: 1
      }],
    reducers:{
        addModel: (state, action) => {
            state.push(action.payload);
        },
        editModelo: (state, action) => {
          const {identificador, descripcion,cilindros,modelo,puertas,marca} = action.payload;

          const foundModelo = state.find(modelo => modelo.identificador === identificador)
          if(foundModelo){
              foundModelo.descripcion = descripcion;
              foundModelo.cilindros = cilindros;
              foundModelo.modelo = modelo;
              foundModelo.puertas = puertas;
              foundModelo.marca = marca;
          }
      }
    }
});

export const { addModel, editModelo } = modeloSlice.actions;

export default modeloSlice.reducer;