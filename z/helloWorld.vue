<script setup>
defineProps({
msg: {
    type:String,
    required:true,
},
})
</script>

<template>
    <div class="greeting">
        <h1 class="green">{{ msg }}</h1>
        <h3>
            Welcome to Vue.js! This is a simple greeting component.
            <a href="https://vite.dev/" target="_blank"  rel="noopener">vite</a>
            <a href="https://vuejs.org" target="_blank"  rel="noopener">Vue.js Official</a>
           
        </h3>

       
    </div>
</template>

<style scoped>
h1{
    font-weight: 500;

}
</style>


