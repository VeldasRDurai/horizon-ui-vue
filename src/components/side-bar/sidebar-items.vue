<script setup>
    import sidebarItem from './sidebar-item.vue';
</script>

<template>
    <div id="sidebar-items" >
        <sidebarItem v-for="item in items" 
            :name=item.name 
            :icon=item.icon
            :selected=item.selected />
    </div>
</template>

<script>
    export default {
        name: 'SidebarItems',
		components:{},
        data(){
            return {
                items : [ 
                    { name: "Dashboard", icon: "fa-solid fa-house", selected:true },
                    { name: "NFT Marketplace", icon: "fa-sharp fa-cart-shopping" },
                    { name: "Tables", icon: "fa-solid fa-chart-simple" },
                    { name: "Kanban", icon: "fa-solid fa-objects-column" },
                    { name: "Profile", icon: "fa-solid fa-user" },
                    { name: "Sign In", icon: "fa-solid fa-lock" },
                ]
            }
        },
        methods:{}
    }
</script>

<style scoped>
    div#sidebar-items{
        font-family: 'DM Sans';
        font-weight: 500;
        font-size: 14px;
        color: #A3AED0;
    }
</style>