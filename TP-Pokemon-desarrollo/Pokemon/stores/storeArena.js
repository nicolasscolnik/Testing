import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useStoreArena = defineStore('arenaBatalla', {
  state: () => (
    {
      url: "",
      maestro1: ref({
        nombre: ref(""),
        password: ref(""),
        esAdmin: ref(false),
        tuTurno: ref(true),
        pokemons: ref([]),
        pokemonEnArena: ref({}),
        numeroJugador: ref(1)
      }),
      maestro2: ref({
        nombre: ref(""),
        password: ref(""),
        esAdmin: ref(false),
        tuTurno: ref(true),
        pokemons: ref([]),
        pokemonEnArena: ref({}),
        numeroJugador: ref(2)
      }),
    }),
  actions: {
    setter(objetoParam, numJugador) {
      let objeto = objetoParam.value
      if (numJugador === 1) {
        this.maestro1.nombre = objeto.nombre;
        this.maestro1.password = objeto.password;
        this.maestro1.esAdmin = objetoParam.esAdmin;
        this.maestro1.pokemons = objeto.pokemons;
        this.maestro1.pokemonEnArena = objeto.pokemons[0];
      } else {
        this.maestro2.nombre = "Ash Ketchup";
        this.maestro2.pokemons = objeto.pokemons;
        this.maestro2.pokemonEnArena = objeto.pokemons[0];
      }
    },
  },

})
