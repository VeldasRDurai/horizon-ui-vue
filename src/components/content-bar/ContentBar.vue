<script setup>
	import PAGE_TYPES from '../../page-types';

	import Dashboard from './dashboard/Dashboard.vue';
	import MarketPlace from './marketplace/MarketPlace.vue';
	import Kanban from './kanban/Kanban.vue';
	import Tables from "./tables/Tables.vue";
	import Profile from './profile/Profile.vue';
	import SignIn from './sign-in/SignIn.vue';
</script>

<template>
	<div id="content-bar">
		<Dashboard        v-if="isCurrentPage(PAGE_TYPES.DASHBOARD)" />
		<MarketPlace v-else-if="isCurrentPage(PAGE_TYPES.NFT_MARKETPLACE)" />
		<Kanban      v-else-if="isCurrentPage(PAGE_TYPES.KANBAN)" />
		<Tables      v-else-if="isCurrentPage(PAGE_TYPES.TABLES)" />
		<Profile     v-else-if="isCurrentPage(PAGE_TYPES.PROFILE)" />
		<SignIn      v-else />
	</div>
</template>

<script>
	export default {
		name:"ContentBar",
		props: ['currentPage'],
		methods:{
			isCurrentPage(pageType){ return this.currentPage===pageType; }
		}
	}
</script>

<style>
	div#content-bar{
		padding: 40px 10px;
		width: calc(100% - 250px);
	}
</style>
