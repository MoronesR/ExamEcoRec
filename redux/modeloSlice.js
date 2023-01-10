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
        descripcion: "Xterra",
        cilindros: 6,
        modelo: 2002,
        puertas: 4,
        marca: 2
      },
      {
        identificador: 3,
        descripcion: "Camaro",
        cilindros: 8,
        modelo: 2008,
        puertas: 2,
        marca: 3
      },
      {
        identificador: 4,
        descripcion: "Camry",
        cilindros: 4,
        modelo: 2000,
        puertas: 4,
        marca: 4
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