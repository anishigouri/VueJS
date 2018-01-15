<template>
  <div>
    <h1>{{ titulo }}</h1>
    <ul>
      <li :key="foto.titulo" v-for="foto of fotos">
        <img :src="foto.url" :alt="foto.titulo" />
      </li>
    </ul>

  </div>
</template>

<script>
export default {

  data() {
    return {
      titulo: 'Alurapic',
      fotos: [
        {
          url: 'https://meusanimais.com.br/wp-content/uploads/2015/05/gato.jpg',
          titulo: 'Gato'
        },
        {
          url: 'https://meusanimais.com.br/wp-content/uploads/2015/05/gato.jpg',
          titulo: 'Gatao'
        }
      ]
    }
  }
  
}
</script>

<style>

</style>
