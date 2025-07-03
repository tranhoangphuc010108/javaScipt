<script>
export default {
    props: {
        name: {
        type:String,
        required: true,
        default: 'Guest',
        },
        age: {
type: Number,
required: true,
default: 0,
        },
    }
}
</script>


<template>
    <div>
        <h1>Hello {{ name }}</h1>
 <p>You are {{ age }} years old</p>
 </div>
</template>
<style scoped>
</style>