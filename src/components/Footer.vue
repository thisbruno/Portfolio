<template>
  <v-footer dark height="auto"  >
    <v-card  class="flex" flat tile  >


      <v-card-actions class="grey lighten-2 justify-center">
     <div class="highlight" >&copy; {{ new Date().getFullYear() }}  - <strong >  brunokibura.com</strong> . </div>
       
      </v-card-actions>
    </v-card>
  </v-footer>
</template>


<script>
  export default {
    data: () => ({
      icons: [
        'fab fa-twitter',
        'fab fa-github',
        'fab fa-linkedin',
        'fab fa-instagram'
      ]
    })
  }
</script>