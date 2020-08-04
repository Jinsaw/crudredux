import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';

import clienteAxios from '../config/axios';

//crear nuevos productos
export function crearNuevoProductoAction(producto) {
    return async (dispatch) => {
        dispatch(agregarProducto());
        try {
            //Insertar en la API
            await clienteAxios.post('/productoss', producto);
            //si todo sale bien, actualizar el state
            dispatch( agregarProductoExito(producto) );
        } catch (error) {
            console.log(error);
            //si hay un error, cambiar el state
            dispatch( agregarProductoError(true) );
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO
}) 

//Si el producto se guarda en la db
const agregarProductoExito = (producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

//Si hubo un error
const agregarProductoError = (estado) => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})