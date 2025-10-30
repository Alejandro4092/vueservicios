<template>
  <div>
    <h1>Empleados</h1>
    <form>
      <label>Seleccione un empleado</label>
      <select class="form-control" v-model="idEmpleado">
        <option v-for="emp in empleados" :key="emp.idEmpleado" :value="emp.idEmpleado">
          {{ emp.apellido }}
        </option>
      </select>
      <button v-on:click.prevent="findEmpleado()">Detalles</button>
    </form>
    <ul class="list-group" v-if="empleado">
      <li class="list-group">
        {{ empleado.apellido }}
      </li>
      <li class="list-group">
        {{ empleado.oficio }}
      </li>
      <li class="list-group">
        {{ empleado.salario }}
      </li>
       <li class="list-group">
        {{ empleado.departamento }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import Global from "./../Global";
let urlApi = Global.urlApiEmpleados;
export default {
  name: "EmpleadosDetails",
  data() {
    return {
      empleados: [],
      idEmpleado: 0,
      empleado: null,
    };
  },
  methods: {
    findEmpleado() {
      var request = "api/Empleados/" + this.idEmpleado;
      let url = urlApi + request;
      axios.get(url).then((response) => {
        console.log("Buscando empleado");
        this.empleado = response.data;
      });
    },
  },
  mounted() {
    const request = "api/Empleados";
    var url = urlApi + request;
    axios.get(url).then((response) => {
      console.log("Leyendo empleados");
      this.empleados = response.data;
    });
  },
};
</script>

<style>
</style>