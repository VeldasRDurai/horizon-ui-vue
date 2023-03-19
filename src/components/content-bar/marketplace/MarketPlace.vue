<script setup>
    import ContentHead from '../content-head/ContentHead.vue';
    import ContentFoot from '../content-foot/ContentFoot.vue';

    import Banner from './banner/Banner.vue';
    import NFTCollection from './nft-collection/NFTCollection.vue';
    import Creator from './creator/Creator.vue';
    import History from './history/History.vue';
</script>

<template>
    <ContentHead head="NFT Marketplace"/>
    <div id="marketplace">
        <div id="nft">
            <Banner />
            <NFTCollection :showCategory=true 
                :collections="collections.slice(0,3)"
                collectionHeading="Trending NFTs" />
            <NFTCollection :showCategory=false 
                :collections="collections.slice(3,6)"
                collectionHeading="Recently Added" />
        </div>
        <div id="creator-n-history">
            <Creator :creators=creators />
            <History :collections="collections" />
        </div>
    </div>
    <ContentFoot />
</template>

<script>
    export default {
        data(){
            return{
                collections:[
                    {
                        id:1,
                        name:"Abstract Colors",
                        author:"Mark Benjamin",
                        currentBid:4.53,
                    },
                    {
                        id:2,
                        name:"ETH AI Brain",
                        author:"Nick Wilson",
                        currentBid:2.11,
                    },
                    {
                        id:3,
                        name:"Mesh Gradients",
                        author:"Will Smith",
                        currentBid:0.45,
                    },
                    {
                        id:4,
                        name:"Swipe Circles",
                        author:"Peter Will",
                        currentBid:6.98,
                    },
                    {
                        id:5,
                        name:"Colorful Heaven",
                        author:"Veldas Durai",
                        currentBid:8.91,
                    },
                    {
                        id:6,
                        name:"3D Cubes Art",
                        author:"Manny Gates",
                        currentBid:3.47,
                    },
                ],
                creators:[
                    {
                        id:1,
                        name:'@maddison_c21',
                        artworks:123,
                        rating:75
                    },{
                        id:2,
                        name:'@karl.will02',
                        artworks:234,
                        rating:70
                    },{
                        id:3,
                        name:'@andreea.1z',
                        artworks:345,
                        rating:65
                    },{
                        id:4,
                        name:'@maddison_c21',
                        artworks:123,
                        rating:55
                    },{
                        id:5,
                        name:'@karl.will02',
                        artworks:234,
                        rating:40
                    },{
                        id:6,
                        name:'@andreea.1z',
                        artworks:345,
                        rating:15
                    },{
                        id:7,
                        name:'@maddison_c21',
                        artworks:123,
                        rating:85
                    },{
                        id:8,
                        name:'@karl.will02',
                        artworks:234,
                        rating:40
                    },{
                        id:9,
                        name:'@andreea.1z',
                        artworks:345,
                        rating:65
                    },
                ]
            }
        }
    }
</script>

<style>
#marketplace{
    display: flex;
    justify-content: space-between;
}
#nft{
    width: 70%;
    display: flex;
    flex-direction: column;
}
#creator-n-history{
    width: 28%;
    display: flex;
    flex-direction: column;
}


</style>
