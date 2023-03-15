<script setup>
    import sidebarHead from './sidebar-head.vue';
    import sidebarItems from './sidebar-items.vue';
</script>

<template>
    <div id="sidebar">
        <div id="top">
            <sidebarHead />
            <sidebarItems />
        </div>
        <div id="bottom">
            bottom
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Sidebar',
		components:{},
        data(){ return{} },
        methods:{}
    }
</script>
<style scoped>
    div#sidebar{
        width: 15vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>