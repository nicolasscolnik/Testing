<template>
    <div>
      <h2>Crear Sala de Batalla</h2>
      <form @submit.prevent="crearSala">  // esto es para que no recargue la pagina al "submit"
        <label for="nombreSala">Nombre de la Sala:</label>
        <input type="text" id="nombreSala" v-model="nombreSala" required>
        
        <label for="maxParticipantes">Máximo de Participantes:</label>
        <input type="number" id="maxParticipantes" v-model="maxParticipantes" required>
        
        <button type="submit">Crear Sala</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nombreSala: '',
        maxParticipantes: 2, // Establece un valor predeterminado
      };
    },
    methods: {
      crearSala() {
        // Aquí puedes realizar acciones como enviar la información al servidor
        // para crear una sala y redirigir a los jugadores a esa sala.
        // También puedes gestionar la lógica de validación aquí.
        
        // Ejemplo de acción:
        // this.$router.push({ name: 'sala', params: { nombreSala: this.nombreSala } });
      },
    },
  };
  </script>
  