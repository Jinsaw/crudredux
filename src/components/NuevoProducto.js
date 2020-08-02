import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//Actions de Redux
import { crearNuevoProductoAction } from '../actions/productoActions'

const NuevoProducto = () => {

    //utiliza useDispatch y te crea o retorna una funcion que toma
    //como parametro las funciones del actions
    const dispatch = useDispatch();

    const agregarProducto = () => dispatch( crearNuevoProductoAction() );
    
    //cuando el usuario haga submit
    const submitNuevoProducto = (e) => {
        e.preventDefault();

        //Validar formulario

        //si no hay errores

        //crear el nuevo producto
        agregarProducto();
    }
    
    return ( 
        <div className= "row justify-content-center">
            <div className= "col-md-8">
                <div className= "card">
                    <div className="card-body">
                        <h2 className= "text-center mb-4 font-weight-bolt">
                            Agregar Nuevo Producto
                        </h2>
                        <form
                            onSubmit= {submitNuevoProducto}
                        >
                            <div className= "form-group">
                                <label>Nombre Producto</label>
                                <input
                                    type= "text"
                                    className= "form-control"
                                    placeholder= "Ingrese el nombre del producto"
                                    name= "nombre"
                                />
                            </div>
                            <div className= "form-group">
                                <label>Precio Producto</label>
                                <input
                                    type= "number"
                                    className= "form-control"
                                    placeholder= "Ingrese el nombre del producto"
                                    name= "precio"
                                />
                            </div>
                            <button
                                type= "submit"
                                className= "btn btn-primary font-weight-bolt text-uppercase d-block w-100"
                            >
                                Agregar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NuevoProducto;