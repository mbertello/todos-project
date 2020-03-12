import React from 'react'
import './styles/TodoList.css'

class TodoList extends React.Component {

    render() {
        const { todos, onEstadoClick } = this.props
        if (todos !== null && todos !== undefined && todos.length > 0) {
            return (
                <div className="container">
                    <div className="row center">
                        <div className="col-10 mx-auto">
                            {
                                <table className="table table-striped table-bordered mt-3">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th>Id</th>
                                            <th>Descripcion</th>
                                            <th>Estado</th>
                                            <th>Adjunto</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {todos.map((todo) => {
                                            return (<tr key={todo.id}>
                                                <td>{todo.id}</td>
                                                <td><div className="overflowDescripcion">{todo.descripcion}</div></td>
                                                <td style={{ textAlign: "center" }}>
                                                    <input type="checkbox" data-id={todo.id} onClick={onEstadoClick} defaultChecked={todo.estado} />
                                                </td>
                                                <td><div className="overflowAdjunto">{todo.adjunto}</div></td>
                                            </tr>)
                                        })}
                                    </tbody>
                                </table>
                            }
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="container">
                    <div className="row center">
                        <div className="col-10 mx-auto">
                            {
                                <table className="table table-striped table-bordered mt-5">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th>Id</th>
                                            <th>Descripcion</th>
                                            <th>Estado</th>
                                            <th>Adjunto</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="center">
                                            <td colSpan="4">Sin Resultados</td>
                                        </tr>
                                    </tbody>
                                </table>
                            }
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default TodoList