import React from 'react'
import AddButton from '../components/AddButton'
import './styles/Filters.css'

class Filters extends React.Component {

    render() {
        const { onFilterTypeChange, onBusquedaChange, onMostrarTareasCompletadasClick } = this.props
        return (
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <div className="d-flex flex-row">
                            <div className="d-flex flex-row">
                                <div>
                                    <span>Filtros</span>
                                    <select name="cbFiltros" onChange={onFilterTypeChange} className="d-block form-control">
                                        <option value="" defaultValue>Seleccionar</option>
                                        <option value="Id">Id</option>
                                        <option value="Descri">Descripcion</option>
                                    </select>
                                </div>
                                <div className="ml-4">
                                    <span>Busqueda</span>
                                    <input type="text" id="txtBusqueda" name="txtBusqueda"
                                        onChange={onBusquedaChange} className="d-block form-control"
                                        disabled={true} />
                                </div>
                                <div className="ml-4">
                                    <input type="checkbox" name="chkCompleted"
                                        onClick={onMostrarTareasCompletadasClick}
                                        className="mt-4" />
                                    <span className="ml-2">Mostrar tareas completadas</span>
                                </div>
                            </div>
                            <div className="d-flex flex-column">
                                <div className="AddButtonBox">
                                    <AddButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Filters