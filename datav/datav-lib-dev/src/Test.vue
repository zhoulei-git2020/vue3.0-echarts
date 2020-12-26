<template>
    <div class="test">{{message}}</div>
</template>

<script>
export default {
    name:'Test',
    setup(){
        const message = 'hello world'
        return{
            message
        }
    }
}
</script>

<style lang="scss" scoped>
    .test{
       color:red 
    }
</style>

