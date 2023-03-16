<script setup>
    import sidebarHead from './sidebar-head.vue';
    import sidebarItems from './sidebar-items.vue';
    import sidebarUpgrade from './sidebar-upgrade.vue';
</script>

<template>
    <div id="sidebar">
        <div id="top">
            <sidebarHead />
            <sidebarItems :currentPage="currentPage" :setCurrentPage="setCurrentPage"  />
        </div>
        <div id="bottom">
            <sidebarUpgrade />
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Sidebar',
        props:[ 'currentPage','setCurrentPage' ],
        data(){ return{} },
        methods:{}
    }
</script>
<style scoped>
    div#sidebar{
        width: 250px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: white;
        box-sizing: border-box;
        padding-bottom: 10px;
    }
    div#sidebar #bottom{
        align-self: center;
        width: 75%;
    }
</style>