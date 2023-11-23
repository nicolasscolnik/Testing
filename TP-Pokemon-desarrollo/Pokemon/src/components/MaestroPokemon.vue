<script setup>
import { ref, defineEmits, onMounted } from 'vue';
import { useStoreMaestroPokemon } from '/stores/storeMaestroPokemon'

const storeMaestro = useStoreMaestroPokemon();

const maestroPokemon = defineProps({
  nombre: ref(""),
  tuTurno: ref(true),
  pokemons: ref([]),
  pokemonEnArena: ref({}),
  numeroJugador: ref(0),
  botonera :ref(true)
})

const emit = defineEmits();

const emitLastimar = () => {
  emit('lastimar');
};

const emitCurar = () => {
  emit('curar');
};

const mandarArena = (item) => {
  emit('horadeluchar', item);
}

const reproducirSonido1 = () => {
  const audioElement = document.getElementById('audioElement1');
  audioElement.play();
}


const reproducirSonido2 = () => {
  const audioElement = document.getElementById('audioElement2');
  audioElement.play();
}

</script>

<template>
  <audio id="audioElement1" src="/src/components/Media/Audio/Double Kick 1hit.mp3"></audio>
  <audio id="audioElement2" src="/src/components/Media/Audio/Petal Dance part 1.mp3"></audio>


  <div class="card">
    <h3 class="card-title">{{ nombre }}</h3>
    <img class="foto" v-if="pokemonEnArena" :src="pokemonEnArena.foto" alt="No leyo la imagen">
    <div class="card-body">
      <h5 class="card-title">{{ pokemonEnArena.nombre+":" }}{{  pokemonEnArena.vida }}</h5>
      <div class="panel-acciones">
        <label class="aviso-turno" v-if="tuTurno">
          <h6>Tu turno: PELEA!!!</h6>
          <div class="container" v-if="botonera">
            <button class="btn btn-danger"  @click="() => { emitLastimar(); reproducirSonido1(); }">Ataca!</button>
            <div class="espacio"> <img src="/src/components/Media/Imagenes/pokebola.png" alt=""></div> <!-- Espacio entre los botones -->
            <button class="btn btn-success" @click="() => { emitCurar(); reproducirSonido2(); }">Curate!</button>
          </div>
        </label>

        <div>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Pokemon</th>
                <th>Vida</th>
                <th>Arena</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in pokemons" :key="index">
                <td>{{ item.nombre }}</td>
                <td>{{ item.vida }}</td>
                <td>
                  <button class="btn btn-dark" @click="mandarArena(item)" v-if="tuTurno && botonera">Elegir</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  </div>
</template>
  
<style scoped>
.card{
  border: 20px ridge #462d72;
  width: 30rem;
  color: black;
}
.card-title{
  width: 100%;
  padding: 15px;
  text-align: center;
  text-decoration: underline;
}


.foto {
  
  height: 210px;
  width: 300px;
  margin: 0 auto;
  padding: 5px;
  display: block;
  border: 6px inset  #a3a3a3;
}

.panel-acciones{
  text-align: center;
}


.aviso-turno h6{
  margin: 5px 20px 5px 20px ;
  padding: 4px;
  border: 4px outset  #21e1e3; 

}

.container{
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 10px;
}

.espacio {
  margin: 5px;
  height: auto;
  display: inline-block;
}
.espacio img {
  width: 30px;
  height: 30px;
}

.table{
  border: 7px inset  #a3a3a3;
}

tbody{
  border: 7px inset  #a3a3a3;
}



</style>