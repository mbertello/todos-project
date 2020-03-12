import React from 'react'
import TodosList from '../components/TodosList'
import Filters from '../components/Filters'

class Todos extends React.Component {

    urlApi = 'http://localhost:5000/'
    urlTodoItems = this.urlApi + 'TodoItems/'
    urlSeparator = '/'

    constructor(props) {
        super(props)
        this.state = {
            filter: '',
            busqueda: '',
            mostrarTareasCompletadas: false,
            todos: []
        }
        this.handleFilterChange = this.handleFilterChange.bind(this)
        this.handleBusquedaChange = this.handleBusquedaChange.bind(this)
        this.handleMostrarTareasCompletadas = this.handleMostrarTareasCompletadas.bind(this)
    }

    componentDidMount() {
        this.fetchTodos(this.urlTodoItems)
    }

    fetchFilteredTodos = target => {
        let filtro = null;
        let valor = null;
        if (target.name === 'cbFiltros') {
            filtro = target.options[target.selectedIndex].value
            valor = this.state.busqueda
        }
        else if (target.name === 'txtBusqueda') {
            filtro = this.state.filter
            valor = target.value
        }
        let estadoTarea = this.state.mostrarTareasCompletadas
        let filterUrl = this.urlTodoItems + estadoTarea +
            this.urlSeparator + filtro + this.urlSeparator + valor
        console.log(filterUrl)
        this.fetchTodos(filterUrl)
    }

    fetchCompletedTodos = e => {

        let filtro = this.state.filter
        let valor = this.state.busqueda
        let estadoTarea = e.target.checked
        let completedTodosUrl = this.urlTodoItems + estadoTarea

        if (filtro !== '') {
            completedTodosUrl += this.urlSeparator + filtro + this.urlSeparator + valor
        }

        this.fetchTodos(completedTodosUrl)
    }

    handleFilterChange = e => {

        let txtBusqueda = e.target.parentElement.parentElement.querySelector("#txtBusqueda")

        if (e.target.options[e.target.selectedIndex].value !== "" &&
            e.target.options[0].value === "") {
            /*Quita el item 'Seleccionar'*/
            e.target.options.remove(0)
            /*Habilita el ingreso de la busqueda*/
            txtBusqueda.disabled = false
        }
        txtBusqueda.focus()
        this.setState({ filter: e.target.options[e.target.selectedIndex].value })
        this.fillTodosList(e.target)
    }

    handleBusquedaChange = e => {
        this.setState({ busqueda: e.target.value })
        this.fillTodosList(e.target)
    }

    fillTodosList = (target) => {
        this.fetchFilteredTodos(target)
    }

    handleEstadoClick = e => {

        if (e.target.checked) {

            /* Llamar a la API para dar por completada la tarea */
            let todoId = e.target.dataset.id;

            var formData = new FormData();
            formData.append("id", todoId)

            fetch(this.urlTodoItems, {
                method: 'PUT',
                body: formData
            })
                .then(function (response) {
                    return response.ok;
                })
                .then(isOk => {
                    if (isOk) {
                        alert("Tarea resuelta..")
                    }
                    else {
                        alert("No se pudo dar por resuelta la tarea")
                    }
                })
                .catch(error => console.error('Error:', error))
        }
        else {
            alert("Operacion no permitida");
        }
    }

    handleMostrarTareasCompletadas = e => {

        this.setState({ mostrarTareasCompletadas: e.target.checked })
        this.fetchCompletedTodos(e)
    }

    fetchTodos = url => {
        try {

            fetch(url)
                .then(response => response.json())
                .catch(error => console.error('Error:', error))
                .then(data => {
                    this.setState({ todos: data })
                })
        }
        catch{
            this.setState({ todos: null })
        }
    }

    render() {
        return (
            <div>
                <Filters onFilterTypeChange={this.handleFilterChange}
                    onBusquedaChange={this.handleBusquedaChange}
                    onMostrarTareasCompletadasClick={this.handleMostrarTareasCompletadas} />

                <TodosList todos={this.state.todos} onEstadoClick={this.handleEstadoClick} />
            </div>
        )
    }
}
export default Todos