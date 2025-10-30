<template>
  <div>
    <h1>Customers</h1>
    <form>
      <label>Id Customer</label>
      <input type="text" v-model="idCustomer" />
      <button v-on:click.prevent="buscarCustomer()">Buscar cliente</button>
    </form>
    <div v-if="customer">
      <h3>{{ customer.ContactTitle }}</h3>
      <h2>{{ customer.Country }}</h2>
      <h2>{{ customer.Address }}</h2>
    </div>
    <table border="1">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Empresa</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in clientes" :key="customer">
          <td>{{ customer.CustomerID }}</td>
          <td>{{ customer.ContactName }}</td>
          <td>{{ customer.CompanyName }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template> 

<script>
import axios from "axios";
import Global from "./../Global";
let urlApi = Global.urlApiCustomers;
export default {
  name: "CustomersComponent",
  data() {
    return {
      clientes: [],
      idCustomer: "",
      customer: null,
    };
  },
  mounted() {
    let request = "customers";
    let url = urlApi + request;
    axios.get(url).then((response) => {
      console.log("Leyendo customers");
      this.clientes = response.data.value;
    });
  },
  methods: {
    buscarCustomer() {
      //BUCLE RECORRIENDO TODOS LOS CUSTOMERS
      //COMPARAMOS EL idCustomer DE DATA CON
      //CustomerID DEL OBJETO
      for (var cliente of this.clientes) {
        if (cliente.CustomerID.toLowerCase() == this.idCustomer.toLowerCase()) {
          this.customer = cliente;
          break;
        }
      }
    },
  },
};
</script> 

<style scoped>
:root{
  --xmas-green: #0b6623;
  --xmas-red: #b91c1c;
  --xmas-gold: #d4af37;
  --xmas-cream: #fffaf0;
}

/* Style the component root (first div in template) */
div {
  background: linear-gradient(180deg, #072b12 0%, #2b0b0b 60%);
  padding: 22px;
  border-radius: 12px;
  color: var(--xmas-cream);
  box-shadow: 0 12px 40px rgba(2,6,23,0.6);
}

h1 {
  color: var(--xmas-gold);
  margin: 0 0 14px 0;
  text-shadow: 0 3px 10px rgba(0,0,0,0.6);
}

form{ display:flex; gap:10px; align-items:center; margin-bottom:14px }
label{ color:var(--xmas-cream); font-weight:600 }
input[type="text"]{
  padding:8px 10px; border-radius:8px; border:1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.03); color:var(--xmas-cream); min-width:180px;
}
button{ padding:8px 12px; border-radius:8px; border:none; cursor:pointer; background:var(--xmas-red); color:var(--xmas-cream); font-weight:700 }

table{ width:100%; border-collapse:collapse; background: rgba(255,255,255,0.02); border-radius:8px; overflow:hidden }
th, td{ padding:10px 12px; text-align:left }
th{ background: linear-gradient(90deg,var(--xmas-green), #0f5132); color:var(--xmas-cream); font-weight:800 }
tbody tr:nth-child(odd){ background: rgba(255,255,255,0.01) }
tbody tr:hover{ background: rgba(212,175,55,0.06) }
td{ color:var(--xmas-cream) }

.notice{ margin:8px 0; color:var(--xmas-cream) }

/* Ornament on the header */
th::after{ content: '★'; margin-left:8px; color:var(--xmas-gold); font-size:0.9em }

@media (max-width:600px){
  form{ flex-direction:column; align-items:stretch }
  input[type="text"]{ width:100% }
}
</style>