import { configureStore } from '@reduxjs/toolkit'
import modelosReducer from './modeloSlice';
import marcasReducer from './marcasSlice';

export default configureStore({
    reducer: {
        modelos: modelosReducer,
        marcas: marcasReducer
      },
})