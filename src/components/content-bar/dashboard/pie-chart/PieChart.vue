<template>
    <div id="pie-chart">
        <div id="pie-head">
            <div id="pie-head-1">Your Pie Chart</div>
            <div id="pie-head-2">Monthly</div>
        </div>
        <div id="pie">
            <Pie :data="data" :options="options" />
        </div>
        <div id="legends">
            <div class="legend">
                <div class="legend-head">
                    <div class="legend-head-color purple"></div>
                    <div class="legend-head-text" >Your files</div>
                </div>
                <div class="legend-data">63%</div>
            </div>
            <div class="legend">
                <div class="legend-head">
                    <div class="legend-head-color blue"></div>
                    <div class="legend-head-text" >System</div>
                </div>
                <div class="legend-data">63%</div>
            </div>
        </div>
    </div>
</template>
  
<script>
    import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'
    import { Pie } from 'vue-chartjs'
    import * as chartConfig from './chartConfig.js'

    ChartJS.register(ArcElement, Tooltip);

    export default {
        name: 'App',
        components: {
            Pie
        },
        data() {
            return chartConfig
        }
    }
</script>

<style scoped>
    #pie{
        height: 150px;
        width: 150px;
    }
    #pie-chart{
        height: 300px;
        width: 300px;
        background-color: white;
        border-radius: 10px;
        padding: 20px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    #pie-head{
        align-self: stretch;
        display: flex;
        justify-content: space-between;
        font-family: 'DM Sans';
        font-weight: 700;
    }
    #pie-head-1{
        font-size: 16px;
        color: #2B3674;
    }
    #pie-head-2{
        font-size: 14px;
        color:  #A3AED0;
    }
    #legends{
        display: flex;
        height:50px;
        width: 200px;
        justify-content: space-around;
        border-radius: 10px;
        box-shadow: 0px 18px 40px rgba(112, 144, 176, 0.12);
    }
    .legend-head{
        display: flex;
    }
    .legend-head > div{
        margin-right: 5px;
    }
    .legend-head-color{
        height: 10px;
        width: 10px;
        border-radius: 10px;
        align-self: center;
    }
    .purple{
        background-color: #4318FF;
    }
    .blue{
        background-color: #6AD2FF;
    }
    .legend-head-text{
        font-family: 'DM Sans';
        font-weight: 500;
        font-size: 12px;
        color: #A3AED0;
    }
    .legend-data{
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'DM Sans';
        font-weight: 700;
        font-size: 18px;
        color: #2B3674;
    }
</style>
  