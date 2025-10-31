<template>
    <div class="coches-wrap">
        <h1 class="title">Coches</h1>

        <div class="grid">
            <div class="card" v-for="(car, index) in coches" :key="index">
                <div class="media">
                    <img :src="car.imagen" :alt="car.marca + ' ' + car.modelo" class="car-img"/>
                </div>
                <div class="info">
                    <h3 class="car-title">{{ car.marca }} <span class="car-model">{{ car.modelo }}</span></h3>
                    <p class="car-driver"><strong>Conductor:</strong> {{ car.conductor || '—' }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


import ServiceCoches from './../services/ServiceCoches'
const service=new ServiceCoches();



export default {
    name: 'CochesComponent',
    data() {
        return {
            coches: []
        }
    },
    mounted() {
        //UNA PROMESA NO ES UN METODO, ES UN OBJETO
       service.getCoches.then(result=>{
        this.coches=result;
       })
    }
}
</script>

<style scoped>
:root{
    --bg: #f5f7fb;
    --card: #ffffff;
    --muted: #6b7280;
    --accent: #2563eb;
    --shadow: 0 6px 18px rgba(16,24,40,0.08);
}

.coches-wrap{
    padding: 24px;
    background: linear-gradient(180deg, var(--bg), #ffffff 60%);
    min-height: 100%;
}
.title{
    margin: 0 0 16px 0;
    font-size: 1.6rem;
    color: #0f172a;
    letter-spacing: -0.4px;
}

.grid{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 16px;
}

.card{
    background: var(--card);
    border-radius: 12px;
    box-shadow: var(--shadow);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform .18s ease, box-shadow .18s ease;
    border: 1px solid rgba(15,23,42,0.04);
}
.card:hover{
    transform: translateY(-6px);
    box-shadow: 0 12px 30px rgba(16,24,40,0.12);
}

.media{
    width: 100%;
    height: 140px;
    background: linear-gradient(90deg,#eef2ff,#f0f9ff);
    display: flex;
    align-items: center;
    justify-content: center;
}
.car-img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.info{
    padding: 12px 14px;
}
.car-title{
    margin: 0 0 6px 0;
    font-size: 1.05rem;
    color: #0f172a;
}
.car-model{
    color: var(--accent);
    font-weight: 600;
    margin-left: 6px;
}
.car-driver{
    margin: 0;
    color: var(--muted);
    font-size: 0.9rem;
}

@media (max-width: 520px){
    .media{height: 120px}
    .title{font-size: 1.25rem}
}
</style>