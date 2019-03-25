<template>
 <div class="cyan" style="margin: 27px 13% 1px">
     <v-footer dark height="auto"  >
    <v-card  class="flex cyan text-xs-center" flat tile  >
         <v-card-actions class="justify-center">        
     <div class="title" >&copy; {{ new Date().getFullYear() }}  - <span class="headline"> brunokibura.com</span>  </div>       
      </v-card-actions>
    </v-card>
  </v-footer>
 </div>
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