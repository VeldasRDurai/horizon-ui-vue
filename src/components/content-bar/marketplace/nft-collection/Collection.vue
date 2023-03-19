<template>
    <div id="collection">
        <div id="img">
            <img :src="'images/marketplace/nft/nft-'+ collection.id +'.png'" />
            <div id="heart">
                <img src="./like.png" />
            </div>
        </div>
        <div id="data">
            <div id="name-n-author">
                <div id="name">{{ collection.name }}</div>
                <div id="author">By {{ collection.author }}</div>
            </div>
            <div id="views">
                <img src="./views.png" />
            </div>
        </div>
        <div id="bid">
            <div id="current">Current Bid: {{ collection.currentBid }} ETH</div>
            <div id="place">Place bid</div>
        </div>
    </div>
</template>

<script>
export default {
    props:['collection']
}
</script>

<style scoped>
    #collection{
        margin-bottom: 10px;
        width: 32%;
        /* width: 300px; */
        background-color: white;
        padding: 20px;
        box-sizing: border-box;
        border-radius: 20px;
    }
    #collection:hover{
        box-shadow: 0px 18px 40px rgba(112, 144, 176, 0.12);
    }
    #heart{
        position: absolute;
        right: 10px;
        top: 10px;
    }
    #img{
        position: relative;
        height: 200px;
        overflow: hidden;
        background-position: right;
        border-radius: 10px;
    }
    #img img{
        height: 100%;
        width: 100%;
    }
    #data, #bid{
        display: flex;
        justify-content: space-between;
        height: 50px;
        align-items: center;
    }
    #name{
        font-family: 'DM Sans';
        font-weight: 700;
        font-size: 16px;
        color: #1B2559;
    }
    #author{
        font-family: 'DM Sans';
        font-weight: 400;
        font-size: 12px;
        color: #A3AED0;
    }
    #current{
        font-family: 'DM Sans';
        font-weight: 700;
        font-size: 13px;
        color: #4318FF;
        background-color: white;
    }
    #current:hover{
        text-decoration: underline;
    }
    #place:hover{
        border: 1px solid;
        color: #4318FF;
        cursor: pointer;
        background-color: white;
    }
    #place{
        font-family: 'DM Sans';
        font-weight: 400;
        font-size: 12px;
        background-color: #11047A;
        padding: 7px 15px;
        border-radius: 20px;
        color: white;
    }
</style>