<script setup>
    import HistoryRow from "./HistoryRow.vue"
</script>

<template>
    <div id="table-struct">
        <div id="table-head">
            <div id="head">History </div>
            <div id="options"> See all</div>
        </div>
        <HistoryRow v-for="collection in collections" 
            :collection="collection" />
    </div>
</template>

<script>
    export default {
        props:['collections'],
    }
</script>

<style scoped>
    #table-struct{
        background-color: white;
        padding: 20px;
        box-sizing: border-box;
        margin-bottom: 20px;
        border-radius: 20px;
    }
    #table-head{
        display: flex;
        justify-content: space-between;
        height: 40px;

        font-family: 'DM Sans';
        font-weight: 700;
        font-size: 21px;
        color: #2B3674;
        margin-bottom: 20px;
    }
    #options{
        background-color: #F4F7FE;
        color: #4318FF;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        border-radius: 20px;
        padding: 0px 10px;
    }
    
</style>
