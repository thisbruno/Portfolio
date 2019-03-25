<template>
    <v-container fluid fill-height class="home-hero" style="max-height: 110vh;">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black white--text text-xs-center">Full-Stack Web Developer </div>

                <v-flex   text-xs-center>
        <v-btn to='/about' large class="orange lighten-3 red--text"> Explore my work  <v-icon right>person</v-icon></v-btn>
        <v-btn to='/contact' large class="orange lighten-3 red--text"> Hire Me  <v-icon right>person</v-icon></v-btn>
      </v-flex>





            <v-btn fab class="mt-5 brown darken-4" to='/about'>
            <v-icon large color="white" >expand_more</v-icon>
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    
};
</script>

<style scoped>
.home-hero {
    background: url("../assets/back.jpg");
    background-size: cover;
    width: 100%;
    height: 90%;
}
</style>