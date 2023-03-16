<script setup>
    import ContentHead from '../content-head/ContentHead.vue';
    import ContentFoot from '../content-foot/ContentFoot.vue';

    import TableStruct from './TableStruct.vue';
</script>

<template>
    <ContentHead head="Tables"/>
    <div id="table">

        <TableStruct :noOfRows='11' />
        <TableStruct :noOfRows='11' />
        <TableStruct :noOfRows='5' />
        <TableStruct :noOfRows='5' />
        <!-- <TableStruct />
        <TableStruct /> -->

    </div>
    <ContentFoot />
</template>

<script>
</script>

<style scoped>
    #table{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    
    /* @media screen and (max-width:1200px) {
        #table{
            flex-direction: column;
            align-items: stretch;
        }
    } */
</style>
