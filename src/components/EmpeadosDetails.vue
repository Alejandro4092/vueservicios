<template>
    <div style="width: 50%; margin: auto">
        <h1>Empleados details</h1>
        <form>
            <label>Seleccione un empleado</label>
            <select class="form-control" v-model="idEmpleado">
                <option v-for="emp in empleados" :key="emp"
                :value="emp.idEmpleado">
                    {{ emp.apellido }}
                </option>
            </select>
            <button v-on:click.prevent="findEmpleado()">
                Detalles
            </button>
        </form>
        <ul class="list-group" v-if="empleado">
            <li class="list-group-item">
                <b>{{ empleado.apellido }}</b>
            </li>
            <li class="list-group-item">
                Oficio {{ empleado.oficio }}
            </li>
            <li class="list-group-item">
                Salario: {{ empleado.salario }}
            </li>
            <li class="list-group-item">
                Departamento: {{ empleado.departamento }}
            </li>
        </ul>
    </div>
</template>

<script>
import ServiceEmpleados from './../services/ServiceEmpleados'
const service = new ServiceEmpleados()

    export default {
        name: "EmpleadosDetails", 
        methods: {
            findEmpleado(){
                service.findEmpleado(this.idEmpleado).then(result => {
                    this.empleado = result;
                })
            }
        }, 
        data() {
            return {
                empleados: [], 
                idEmpleado: 0, 
                empleado: null
            }
        }, mounted() {
            service.getEmpleados().then(result => {
                this.empleados = result;
            })
        }
    }
</script>