<script setup>
</script>

<template>
    <div id="capsule">
        <div id="icon">
            <img :src="'/icons/dashboard/capsule/icon-'+capsule.id+'.png'" 
                onerror="this.style.display='none';"/>
        </div>
        <div id="data">
            <div id="head">{{ capsule.head }}</div>
            <div id="sub-head">{{ capsule.subHead }}</div>
            <div id="sub-sub-head">{{ capsule.subSubHead }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props:['capsule']
}
</script>

<style scoped>
    #capsule{
        height: 70px;
        display: flex;
        width: 200px;
        background-color: white;
        border-radius: 10px;
        align-items: center;
        justify-content: flex-start;
    }
    #capsule>div{
        margin-left: 10px;
    }
    #icon img{
        height: 40px;
        width: 40px;
    }
    #head{
        font-family: 'DM Sans';
        font-weight: 500;
        font-size: 10px;
        color: #A3AED0;
    }
    #sub-head{
        font-family: 'DM Sans';
        font-weight: 700;
        font-size: 15px;
        color: #2B3674;
    }
    #sub-sub-head{
        font-family: 'DM Sans';
        font-weight: 400;
        font-size: 8px;
        color: #05CD99;
    }


</style>
