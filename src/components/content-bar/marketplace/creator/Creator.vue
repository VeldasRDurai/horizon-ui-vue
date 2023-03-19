<template>
    <div id="table-struct">
        <div id="table-head">
            <div id="head">Top Creators </div>
            <div id="options"> See all</div>
        </div>
        <div id="table-content">
            <div class="table-row table-title-row">
                <div>Name</div>
                <div>Artworks</div>
                <div>Rating</div>
            </div>
            <div class="table-row" v-for="creator in creators">
                <div>
                    <img src="/images/marketplace/profile/profile.png" />
                    {{ creator.name }}
                </div>
                <div>{{ creator.artworks }}</div>
                <div>
                    {{ creator.rating + "% " }}
                    <div id="progress">
                        <div :style="{ width : creator.rating + '%' }" ></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['creators'],
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
    .table-row{
        display: flex;
        justify-content: space-between;
        
    }
    .table-row > div {
        width: 20%;
        display: flex;
        align-items: center;
    }
    .table-title-row{
        font-size: 11px;
        color: #A3AED0;
    }
    .table-title-row>div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #table-content{
        font-family: 'DM Sans';
        font-weight: 700;
        font-size: 12px;
        color: #2B3674;
    }
    #table-content > div{
        margin-bottom: 15px;
    }
    #progress{
        height: 7px;
        width: 60%;
        border-radius: 5px;
        background-color: #EFF4FB;
        position: relative;
    }
    #progress div{
        height: 100%;
        width: val(--progress-width);
        border-radius: 5px;
        background-color: #4318FF;
        position: absolute;
        left: 0;
    }
    
    img{
        height: 20px;
        width: 20px;
        margin-right: 5px;
    }
</style>
