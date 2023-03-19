<template>

    <div id="history-row">
        <div id="row-img">
            <img :src="'images/marketplace/nft/nft-'+ collection.id +'.png'" />
        </div>
        <div id="name-n-author">
            <div id="name">{{ collection.name }}</div>
            <div id="author">{{ collection.author }}</div>
        </div>
        <div id="bid">
            {{ collection.currentBid }}ETH
        </div>
        <div id="time">
            30s ago
        </div>
    </div>

</template>
<script>
    export default {
        props:['collection']
    }
</script>
<style scoped>
    #history-row{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border-radius: 10px;
        cursor: pointer;
    }
    #history-row:hover{
        box-shadow: 0px 18px 40px rgba(112, 144, 176, 0.12);
    }
    #row-img{
        height: 70px;
        width: 70px;
        border-radius: 10px;
        overflow: hidden;
    }
    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    #name{
        font-family: 'DM Sans';
        font-weight: 700;
        font-size: 14px;
        color: #1B2559;
    }
    #author{
        font-family: 'DM Sans';
        font-weight: 400;
        font-size: 11px;
        color: #A3AED0;
    }
    #bid{
        font-family: 'DM Sans';
        font-weight: 700;
        font-size: 14px;
        color: #2B3674;
    }
    #time{
        font-family: 'DM Sans';
        font-weight: 400;
        font-size: 11px;
        color: #A3AED0;
    }
</style>