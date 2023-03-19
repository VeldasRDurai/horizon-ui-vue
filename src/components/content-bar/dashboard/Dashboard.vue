<script setup>
    import ContentHead from '../content-head/ContentHead.vue';
    import ContentFoot from '../content-foot/ContentFoot.vue';

    import Capsule from './capsule/Capsule.vue';
    import PieChart from './pie-chart/PieChart.vue'
</script>

<template>
    <ContentHead head="Dashboard"/>
    <div id="dashboard">
        <div id="capsules">
            <Capsule v-for="capsule in capsules"
                :capsule="capsule" />
        </div>
        <PieChart />
    </div>
    <ContentFoot />
</template>

<script>
export default {
    data(){
        return{
            capsules: [
                {
                    id : 1,
                    head: "Earnings",
                    subHead: "$350.4",
                },{
                    id : 2,
                    head: "Spend this month",
                    subHead: "$642.39",
                },{
                    id : 3,
                    head: "Sales",
                    subHead: "$574.34",
                    subSubHead : "+23% since last month"
                },{
                    id : 4,
                    head: "Your Balance",
                    subHead: "$1000",
                },{
                    id : 5,
                    head: "New Task",
                    subHead: "154",
                },{
                    id : 6,
                    head: "Total Projects",
                    subHead: "2935",
                },
            ]
        }
    }
}
</script>

<style scoped>
    #capsules{
        margin: 10px 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>
