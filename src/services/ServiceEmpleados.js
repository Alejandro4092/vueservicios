import axios from "axios"
import Global from './../Global';

export default class ServiceEmpleados {
    getEmpleados() {
        return new Promise(function(resolve) {
            let request = "api/empleados";
            let url = Global.urlApiEmpleados + request;
            axios.get(url).then(response => {
                resolve(response.data);
            })            
        })
    }

    findEmpleado(idEmpleado) {
        return new Promise(function(resolve) {
            let request = "api/empleados/" + idEmpleado;
            let url = Global.urlApiEmpleados + request;
            axios.get(url).then(response => {
                resolve(response.data);
            })            
        })
    }

    getEmpleadosOficio(oficio) {
        return new Promise(function(resolve) {
            let request = "api/empleados/empleadosoficio/" + oficio;
            let url = Global.urlApiEmpleados + request;
            axios.get(url).then(response => {
                resolve(response.data);
            })            
        })
    }    
    
    getOficios() {
        return new Promise(function(resolve) {
            let request = "api/empleados/oficios";
            let url = Global.urlApiEmpleados + request;
            axios.get(url).then(response => {
                resolve(response.data);
            })            
        })
    }     
}