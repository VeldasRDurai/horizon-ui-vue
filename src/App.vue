<script setup>
	import PAGE_TYPES from './page-types';

	import Sidebar from './components/side-bar/Sidebar.vue';
	import ContentBar from './components/content-bar/ContentBar.vue'
</script>
<script>
	export default {
		name: "App",
		data(){
			return{
				currentPage : PAGE_TYPES.NFT_MARKETPLACE
			}
		},
		methods:{
			setCurrentPage(value){
				this.currentPage = value;
			}
		}
	}
</script>

<template>
	<Sidebar :currentPage="currentPage" 
		:setCurrentPage="setCurrentPage"  
		:class="{ hidden:currentPage===PAGE_TYPES.SIGN_IN }"/>
	<ContentBar :currentPage="currentPage" />
</template>


<style>
	div#app{
		display: flex;
	}
	div#app .hidden{
		display: none;
	}
</style>
