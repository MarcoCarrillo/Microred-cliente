import React, {Fragment, useContext} from 'react'
import Tarea from '../tareas/Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const ListadoTareas = () => {

    //State del formulario
    const proyectosContext = useContext(proyectoContext);
    const {proyecto, eliminarProyecto} = proyectosContext;

    //Obtener las tareas del proyecto
    const tareasContext = useContext(tareaContext);
    const {tareasproyecto} = tareasContext;

    //Si no hay proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un proyecto</h2>

    //Array destructuring para extraer posicion proyecto actual
    const [proyectoActual] = proyecto; 

    //Elimina un proyecto
    const onClickEliminar = ()=>{
        eliminarProyecto(proyectoActual.id)
    }

    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className='listado-tareas'>
                {tareasproyecto.length === 0 ? (<li className='tarea'>No hay tareas</li>) 
                    : tareasproyecto.map(tarea =>(
                        <Tarea 
                            tarea={tarea}
                        />
                    )) 
                }
            </ul>
            <button
                type='button'
                className='btn btn-eliminar sombra'
                onClick={onClickEliminar}
            >Eliminar Proyecto &times;</button>
        </Fragment>
     );
}
 
export default ListadoTareas;