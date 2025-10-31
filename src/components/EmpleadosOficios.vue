<template>
  <div>
    <h1>Empleados oficios</h1>
    <table>
        <thead>
            <tr>
                <th>Apellidos</th>
                <th>Oficio</th>
                <th>Salario</th>
                <th>Departamento</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="emp in empleados" :key="emp">
                <td>{{emp.apellido}}</td>
                <td>{{emp.oficio}}</td>
                <td>{{emp.salario}}</td>
                <td>{{emp.departamento}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import Global from '@/Global';
export default {
    name:"EmpleadosOficios",
    data(){
        return{
            empleados:[]
        }
    },methods:{
         loadEmpledos(){
            let oficio=this.$route.params.oficio;
            let request="api/empleados/empleadosoficio/"+oficio;
            let url=Global.urlApiEmpleados+request;
            axios.get(url).then(response=>{
                console.log("lyendo empleados oficio");
                this.empleados=response.data
            })

    }

    },mounted(){
        this.loadEmpledos();
    },
    watch:{
        '$route.params.oficio' (nextVal,oldVal){
            if(nextVal !=oldVal){
                this.loadEmpledos();
            }
            
        }

    }
   

}
</script>

<style>

</style>