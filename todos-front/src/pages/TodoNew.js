import React from 'react'
import { Redirect, Link } from 'react-router-dom'

class TodoNew extends React.Component {

    urlApi = 'http://localhost:5000/'

    constructor(props) {
        super(props)
        this.state = {
            descri: '',
            adjunto: '',
            toDashboard: false
        }
    }

    handleDescriChange = e => {
        this.setState({ descri: e.target.value })
    }

    handleAdjuntoChange = e => {
        let fileName = e.target.value.replace('C:\\fakepath\\', '')
        this.setState({ adjunto: fileName })

        /*Subir archivo al servidor*/
        
        var fileField = document.querySelector("#fAdjunto");

        var formData = new FormData();
        formData.append('files', fileField.files[0]);

        let urlFileUpload = this.urlApi + 'FileUpload'

        fetch(urlFileUpload, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                if(response.resultOk){
                    alert("Recurso subido al servidor -> " + response.resultValue)
                }
                else{
                    alert(response.resultValue)
                    fileField.value = ""
                }
            });
    }

    handleRegistrarClick = e => {

        e.preventDefault()

        /*Alta de tarea*/

        var formData = new FormData();

        formData.append('descripcion', this.state.descri);
        formData.append('adjunto', this.state.adjunto);

        let urlRegistrar = this.urlApi + 'TodoItems'

        fetch(urlRegistrar, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                alert("Tarea registrada con exito..")
                this.setState({ toDashboard: true })
            });
    }

    render() {
        if (this.state.toDashboard === true) {
            return <Redirect to='/todos' />
        }
        return (
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-8">
                        <form id="frmTodos" name="frmTodos" className="d-flex flex-column form">
                            <div className="mx-auto w-75">
                                <div>
                                    <label htmlFor="txtDescripcion">Descripcion</label>
                                    <textarea name="txtDescripcion" cols="50" rows="5"
                                        onChange={this.handleDescriChange}
                                        className="d-block overflow-auto pl-2 pr-2 pt-1 w-100" />
                                </div>
                                <div className="mt-2" style={{overflow: "auto"}}>
                                    <label htmlFor="fAdjunto" className="mr-3">Adjunto</label>
                                    <input type="file" id="fAdjunto" name="fAdjunto"
                                        onChange={this.handleAdjuntoChange}
                                        className="d-block">
                                    </input>
                                </div>
                                <div className="d-flex flex-row mt-4">
                                    <button id="btnRegistrar" name="btnRegistrar"
                                        onClick={this.handleRegistrarClick}
                                        className="btn btn-success w-75">
                                        Registrar
                                        </button>
                                    <Link to="/todos" className="w-25 ml-1">
                                        <button className="btn btn-info w-100">Volver</button>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoNew