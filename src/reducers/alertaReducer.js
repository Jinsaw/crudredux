import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../types';

//cada reducer tiene su propio state
const initialState = {
    alerta: null
}

export default function(state = initialState, action) {
    console.log(action);
    switch(action.type) {
        default:
            return state;
    }
}