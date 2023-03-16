<script setup>
</script>

<template>
    <div id="content-head">
        <div id="head-n-sub-head">
            <div id="sub-head">Pages / {{ head }}</div>
            <div id="head">{{ head }}</div>
        </div>
        <div id="search">
            <div id="searchbox" contenteditable>
                Search
            </div>
            <font-awesome-icon icon="fa-sharp fa-bell" />
            <font-awesome-icon icon="fa-sharp fa-moon" />
            <font-awesome-icon icon="fa-solid fa-circle-info" />
            <img src="./Avatar.png" alt="AVATAR" />
        </div>
    </div>
</template>

<script>
export default {
    props:['head']
}
</script>

<style scoped>
    #content-head{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        margin-bottom:30px;
    }
    #sub-head{
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 11px;
        color: #707EAE;
    }
    #head{
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        color: #2B3674;
    }
    #search{
        height: 35px;
        background-color: white;
        color: #8F9BBA;
        display: flex;
        width: 30%;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border-radius: 50px;
        font-size: 20px;
    }
    #search > *:hover{
        cursor: pointer;
        color: black;
    }
    #searchbox{
        width: 50%;
        background-color: #F4F7FE ;
        display: flex;
        padding-left: 20px;
        align-items: center;
        align-self: stretch;
        border-radius: 50px;

        font-family: 'DM Sans';
        font-weight: 400;
        font-size: 14px;
    }
    img{
        height: 100%;
        object-fit: contain;
    }
</style>
