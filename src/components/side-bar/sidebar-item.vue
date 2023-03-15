<script setup>
</script>

<template>
    <div class="sidebar-item" :class="selected&&'selected'" >
        <font-awesome-icon :icon=icon />
        {{ name }}
    </div>
</template>
<script>
    export default {
        name: 'SidebarItem',
        props:['name', 'icon', 'selected'],
		components:{},
        data(){},
        methods:{}
    }
</script>
<style scoped>
    div.sidebar-item{
        margin-left: 20px;
    }
    div.sidebar-item.selected{
        color: #4318FF;
    }
</style>