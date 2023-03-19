<template>
    <div id="banner">
        <div id="content">
            <div id="head">Discover, collect, and sell extraordinary NFTs</div>
            <div id="data">Enter in this creative world. Discover now the latest NFTs or start creating your own!</div>
            <div id="button">
                <div id="button-1">Discover now</div>
                <div id="button-2">Watch video</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #banner{
        background: url('./banner.png');
        background-position: right;
        height: 350px;
        border-radius: 10px;
        overflow: hidden;
    }
    #content{
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 40%;
        justify-content: center;
        align-items: flex-start;
        margin-left: 40px;
    }
    #head{
        font-family: 'DM Sans';
        font-weight: 700;
        font-size: 30px;
        display: flex;
        align-items: center;
        color: #FFFFFF;
    }
    #data{
        font-family: 'DM Sans';
        font-weight: 500;
        font-size: 14px;
        color: #E3DAFF;
    }
    #button{
        display: flex;
        margin-top: 40px;
        align-items: center;
        font-family: 'DM Sans';
        font-weight: 500;
        font-size: 11px;
        color: #E9E3FF;
    }
    #button-1{
        background-color: white;
        padding: 10px 20px;
        color: black;
        border-radius: 10px;
    }
    #button-2{
        color: white;
        margin-left: 40px;
    }
</style>