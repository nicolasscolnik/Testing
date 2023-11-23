<script setup>
import { ref, onMounted } from 'vue'
import { useStoreMaestroPokemon } from '/stores/storeMaestroPokemon'
import { useStoreArena } from '../../stores/storeArena';

const storeMaestro = useStoreMaestroPokemon();
const storeArena = useStoreArena();

const buscarArena = async () => {
  try {
    debugger
    await waitForNombre();
    const apiUrl = "http://localhost:8080/api/salas/salaAvailable/";
    const response = await fetch(apiUrl, {
      method: 'GET',
    });

    if (response.ok) {
      const responseBody = await response.text();

      if (responseBody.trim() === "") {
        await crearNuevaSala();
      } else {
        const salaLibre = JSON.parse(responseBody);
        console.log("ID sala libre: " + salaLibre.id);
        await asignarUsuarioASalaExistente(salaLibre.id);
      }
    } else {
      console.error("Error al buscar sala:", response.statusText);
    }
  } catch (error) {
    console.error("Error al buscar sala:", error);
  }
};

const crearNuevaSala = async () => {
  try {
    const nuevaSalaResponse = await fetch("http://localhost:8080/api/salas/", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idUser1: storeMaestro.nombre }),
    });
    const nuevaSala = await nuevaSalaResponse.json();
    await esperarSalaCompleta(nuevaSala.id);
  } catch (error) {
    console.error("Error al crear nueva sala:", error);
  }
};

const asignarUsuarioASalaExistente = async (salaId) => {
  try {
    await fetch(`http://localhost:8080/api/salas/${salaId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idUser2: storeMaestro.nombre }),
    });
  } catch (error) {
    console.error("Error al asignar usuario a sala existente:", error);
  }
};

const esperarSalaCompleta = async (salaId) => {
};

const waitForNombre = () => new Promise(resolve => {
  debugger
  const checkNombre = () => {
    if (storeMaestro.nombre.value !== "") {
      resolve();
    } else {
      setTimeout(checkNombre, 10);
    }
  };

  checkNombre();
});
buscarArena();
onMounted(() => {
  debugger
  console.log("NOMBREstoreMaestro: " + storeMaestro.nombre)
  console.log("storeArena: " + storeArena)

})

const sonidoDesactivado = ref(false);
const toggleSonido = () => {
  sonidoDesactivado.value = !sonidoDesactivado.value;
};

</script>



<template>
  <div>{{ storeMaestro.nombre }}</div>

  <audio class="audio" :autoplay="!sonidoDesactivado" loop :muted="sonidoDesactivado"
    src="/src/components/Media/Audio/Professor Oak.mp3"></audio>


  <video autoplay loop muted class="video-background">
    <source src="/src/components/Media/Video/Pikachu Pixel Animated Loop.mp4" type="video/mp4">
  </video>

  <img class="icono-sonido"
    :src="sonidoDesactivado ? '/src/components/Media/Imagenes/musicOff.png' : '/src/components/Media/Imagenes/musicOn.jpg'"
    alt="Icono Sonido" @click="toggleSonido" />

  <h1 class="cargando-mensaje"> CARGANDO</h1>

  <div class="wrapper">
    <div class="space">
      <div class="loading"></div>
    </div>
  </div>

</template>

<style>
* {
  font-family: 'Press Start 2P', cursive;
}

.video-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}


.cargando-mensaje {
  text-align: center;
  margin-top: 200px;
  color: rgb(0, 0, 0);
}

@keyframes loading {
  0% {
    left: -100%;
  }

  100% {
    left: 100%;
  }
}

.wrapper {

  border: 20px ridge #1754c5;
  padding: 4px;
  width: 500px;
  height: 75px;
  margin: 50px auto 50px auto;
  background: whitesmoke;
}

.space {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.loading {
  position: absolute;
  background-color: rgb(247, 204, 10);
  width: 100%;
  height: 100%;
  animation: loading 5s steps(40) infinite;
}

.icono-sonido {
  width: 30px;
  height: 30px;
  cursor: pointer;
  position: fixed;
  top: 75px;
  left: 10px;
  z-index: 1000;
  border-radius: 5px;
}
</style>