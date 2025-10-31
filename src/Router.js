import { createWebHistory,createRouter } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import EmpleadosDetails from "./components/EmpeadosDetails.vue";
import CustomersComponent from "./components/CustomersComponent.vue";
import CochesComponent from "./components/CochesComponent.vue";
import EmpleadosOficios from "./components/EmpleadosOficios.vue";
const myRoutes = [
    {path:"/",component:HomeComponent},
    {path:"/coches",component:CochesComponent},
    {path:"/empleadosdetails",component:EmpleadosDetails},
    {path:"/customers",component:CustomersComponent},
    {path:"/empeadosoficio/:oficio",component:EmpleadosOficios},
    
];
const router = createRouter({
    history:createWebHistory(),
    routes:myRoutes
});
export default router;