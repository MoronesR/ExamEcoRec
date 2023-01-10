import { createSlice } from "@reduxjs/toolkit";

export const marcaSlice =createSlice({
    name: 'marcas',
    initialState: [
        {
            identificador: 1,
            descripcion: 'Ford'
        },
        {
            identificador: 2,
            descripcion: 'Nissan'
        },
        {
            identificador: 3,
            descripcion: 'Chevrolet'
        },
        {
            identificador: 4,
            descripcion: 'Toyota'
        }
    ],
    reducers:{
        addMarca: (state, action) => {
            state.push(action.payload);
        }, 
        editMarca: (state, action) => {
            const {identificador, descripcion} = action.payload;

            const foundMarca = state.find(marca => marca.identificador === identificador)
            if(foundMarca){
                foundMarca.descripcion = descripcion;
            }
        }
    }
});

export const { addMarca, editMarca } = marcaSlice.actions;

export default marcaSlice.reducer;