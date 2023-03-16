<script setup>
</script>

<template>
    <div class="sidebar-item" :class="selected&&'selected'" 
        @click="$emit('changeCurrentPage')" >
        <font-awesome-icon :icon=icon />
        <div class="sidebar-item-text">
            {{ name }}
        </div>
        <div class="sidebar-item-highlighted"></div>
    </div>
</template>
<script>
    export default {
        name: 'SidebarItem',
        props:['name', 'icon','type', 'selected'],
		components:{},
        data(){},
        methods:{}
    }
</script>
<style scoped>
    div.sidebar-item{
        display: flex;
        align-items: center;
        height: 40px;
        margin-left: 25px;
        position: relative;
        cursor: pointer;
    }
    div.sidebar-item .sidebar-item-text{
        margin-left: 15px;
    }
    div.sidebar-item.selected, div.sidebar-item:hover{
        color: black;
    }
    /* div.sidebar-item:hover .sidebar-item-highlighted */
    div.sidebar-item.selected .sidebar-item-highlighted{
        height: 70%;
        width: 3px;
        position: absolute;
        border-radius: 2px;
        right: 0;
        background: #4318FF;
    }
    div.sidebar-item.selected 
    svg{
        color: #4318FF;
    }
</style>