<script setup>
    import Collection from './Collection.vue';
</script>

<template>
    <div id="nft-collection">
        <div id="nft-heading">
            <div id="head">{{ collectionHeading }}</div>
            <div id="categories" v-if="showCategory">
                <div id="category" v-for="category in categories" >
                    {{ category }}
                </div>
            </div>
        </div>
        <div id="collections">
            <Collection  v-for="collection in collections" :collection="collection" />
        </div>
    </div>
</template>

<script>
    export default {
        props:['showCategory', 'collections', 'collectionHeading'],
        data(){
            return{
                categories:['Art', 'Music', 'Collectibles', 'Sports'],
            }
        }
    }
</script>

<style scoped>
    #nft-heading{
        display: flex;
        justify-content: space-between;
        padding: 10px;
        margin-top: 30px;
    }
    #head{
        font-family: 'DM Sans';
        font-weight: 700;
        font-size: 24px;
        color: #2B3674;
    }
    #categories{
        display: flex;
    }
    #category{
        font-family: 'DM Sans';
        font-weight: 500;
        font-size: 14px;
        color: #4318FF;
        margin-left: 20px;
        display: flex;
        align-items: center;
        padding: 0 10px;
        border-radius: 20px;
    }
    #category:hover{
        background-color: white;
    }
    #collections{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>