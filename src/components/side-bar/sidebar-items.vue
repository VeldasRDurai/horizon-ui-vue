<script setup>
    import PAGE_TYPES from '../../page-types';

    import sidebarItem from './sidebar-item.vue';
</script>

<template>
    <div id="sidebar-items" >
        <sidebarItem v-for="item in items" 
            :name=item.name 
            :icon=item.icon
            :type=item.type
            :selected="item.type===currentPage?true:false"
            @click="setCurrentPage(item.type)" />
    </div>
</template>

<script>
    export default {
        name: 'SidebarItems',
		components:{},
        props:[ 'currentPage','setCurrentPage' ],
        data(){
            return {
                items : [ 
                    { type: PAGE_TYPES.DASHBOARD, name: "Dashboard", icon: "fa-solid fa-house" },
                    { type: PAGE_TYPES.NFT_MARKETPLACE, name: "NFT Marketplace", icon: "fa-sharp fa-cart-shopping" },
                    { type: PAGE_TYPES.TABLES, name: "Tables", icon: "fa-solid fa-chart-simple" },
                    { type: PAGE_TYPES.KANBAN, name: "Kanban", icon: "fa-solid fa-cart-shopping" },
                    // {  type: PAGE_TYPES.KANBAN, name: "Kanban", icon: "fa-solid fa-objects-column" },
                    { type: PAGE_TYPES.PROFILE, name: "Profile", icon: "fa-solid fa-user" },
                    { type: PAGE_TYPES.SIGN_IN, name: "Sign In", icon: "fa-solid fa-lock" },
                ]
            }
        },
        methods:{}
    }
</script>

<style scoped>
    div#sidebar-items{
        font-family: 'DM Sans';
        font-weight: 700;
        font-size: 14px;
        color: #A3AED0;
    }
</style>