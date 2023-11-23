import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStoreMaestroPokemon = defineStore('maestroPokemon', {
  state: () => (
    {
      nombre: ref(""),
      password: ref(""),
      esAdmin: ref(false),
      tuTurno: ref(true),
      pokemons: ref({}),
      pokemonEnArena: ref({}),
      numeroJugador: ref(2)
    }),
  actions: {
    setter(objetoParam) {
      let objeto = objetoParam.value
      this.nombre = objeto.nombre;
      this.password = objeto.password;
      this.esAdmin = objetoParam.esAdmin;
      this.pokemons.value = objeto.pokemons;
      this.pokemonEnArena = this.pokemons.value[0];
    },
  },

})
