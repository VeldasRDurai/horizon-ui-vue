<script setup>
    import ContentHead from '../content-head/ContentHead.vue';
    import ContentFoot from '../content-foot/ContentFoot.vue';

    import TableStruct from './TableStruct.vue';
    import DevTable from './DevTable.vue';
    import ComplexTable from './complexTable.vue';
</script>

<template>
    <ContentHead head="Tables"/>
    <div id="table">

        <DevTable :tData=this.devTable />
        <TableStruct :noOfRows='11' />
        <TableStruct :noOfRows='5' />
        <ComplexTable :tData=this.complexTable />

    </div>
    <ContentFoot />
</template>

<script>
export default {
    data(){
        return {
            devTable : [
                {
                    id : 1,
                    data1 : 'Marketplace',
                    data2 : {
                        isApple : true,
                        isAndroid : true,
                        isWindows : true
                    },
                    data3 : '12.Jan.2021',
                    data4 : '75.5'
                },
                {
                    id : 2,
                    data1 : 'Venus DB PRO',
                    data2 : {
                        isApple : true,
                    },
                    data3 : '21.Feb.2021',
                    data4 : '35.4'
                },
                {
                    id : 3,
                    data1 : 'Venus DS',
                    data2 : {
                        isApple : true,
                        isAndroid : true,
                        isWindows : true
                    },
                    data3 : '13.Mar.2021',
                    data4 : '25'
                },
                {
                    id : 4,
                    data1 : 'Venus 3D Asset',
                    data2 : {
                        isApple : true,
                        isWindows : true
                    },
                    data3 : '24.Jan.2021',
                    data4 : '100'
                },
                {
                    id : 5,
                    data1 : 'Uranus',
                    data2 : {
                        isAndroid : true,
                        isWindows : true
                    },
                    data3 : '21.Sep.2021',
                    data4 : '12.2'
                },
                {
                    id : 6,
                    data1 : 'Uranus',
                    data2 : {
                        isAndroid : true,
                        isWindows : true
                    },
                    data3 : '21.Sep.2021',
                    data4 : '12.2'
                },
                {
                    id : 7,
                    data1 : 'Uranus',
                    data2 : {
                        isAndroid : true,
                        isWindows : true
                    },
                    data3 : '21.Sep.2021',
                    data4 : '12.2'
                },
                {
                    id : 8,
                    data1 : 'Uranus',
                    data2 : {
                        isAndroid : true,
                        isWindows : true
                    },
                    data3 : '21.Sep.2021',
                    data4 : '12.2'
                },
                {
                    id : 9,
                    data1 : 'Uranus',
                    data2 : {
                        isAndroid : true,
                        isWindows : true
                    },
                    data3 : '21.Sep.2021',
                    data4 : '12.2'
                },
                {
                    id : 10,
                    data1 : 'Uranus',
                    data2 : {
                        isAndroid : true,
                        isWindows : true
                    },
                    data3 : '21.Sep.2021',
                    data4 : '12.2'
                },
                {
                    id : 11,
                    data1 : 'Uranus',
                    data2 : {
                        isAndroid : true,
                        isWindows : true
                    },
                    data3 : '21.Sep.2021',
                    data4 : '12.2'
                },
            ],
            checkTable : [
                {
                    id : 1,
                    data1 : 'Marketplace',
                    data2 : '17.5',
                    data3 : '2.458',
                    data4 : '24.Jan.2021'
                },
                {
                    id : 2,
                    data1 : 'Venus DB PRO',
                    data2 : '10.8',
                    data3 : '35.4',
                    data4 : '21.Feb.2021',
                },
                {
                    id : 3,
                    data1 : 'Venus DS',
                    data2 : '21.3',
                    data3 : '25',
                    data4 : '13.Mar.2021',
                },
                {
                    id : 4,
                    data1 : 'Venus 3D Asset',
                    data2 : '31.5',
                    data3 : '100',
                    data4 : '24.Jan.2021',
                },
                {
                    id : 5,
                    data1 : 'Venus 3D Asset',
                    data2 : '31.5',
                    data3 : '100',
                    data4 : '24.Jan.2021',
                },
                {
                    id : 6,
                    data1 : 'Venus 3D Asset',
                    data2 : '31.5',
                    data3 : '100',
                    data4 : '24.Jan.2021',
                },
                {
                    id : 7,
                    data1 : 'Venus 3D Asset',
                    data2 : '31.5',
                    data3 : '100',
                    data4 : '24.Jan.2021',
                },
                {
                    id : 8,
                    data1 : 'Venus 3D Asset',
                    data2 : '31.5',
                    data3 : '100',
                    data4 : '24.Jan.2021',
                },
                {
                    id : 9,
                    data1 : 'Venus 3D Asset',
                    data2 : '31.5',
                    data3 : '100',
                    data4 : '24.Jan.2021',
                },
                {
                    id : 10,
                    data1 : 'Venus 3D Asset',
                    data2 : '31.5',
                    data3 : '100',
                    data4 : '24.Jan.2021',
                },
                {
                    id : 11,
                    data1 : 'Venus 3D Asset',
                    data2 : '31.5',
                    data3 : '100',
                    data4 : '24.Jan.2021',
                },
            ],
            complexTable : [
                {
                    id : 1,
                    data1 : 'Marketplace',
                    data2 : {
                        isApproved : true,
                    },
                    data3 : '12.Jan.2021',
                    data4 : '75.5'
                },
                {
                    id : 2,
                    data1 : 'Venus Dashboard Builder',
                    data2 : {
                        isDisabled : true,
                    },
                    data3 : '12.Jan.2021',
                    data4 : '75.5'
                },
                {
                    id : 3,
                    data1 : 'Venus Design System',
                    data2 : {
                        isError : true,
                    },
                    data3 : '12.Jan.2021',
                    data4 : '75.5'
                },
                {
                    id : 4,
                    data1 : 'Uranus',
                    data2 : {
                        isApproved : true,
                    },
                    data3 : '12.Jan.2021',
                    data4 : '75.5'
                },
            ]
        }
    }
}
</script>

<style scoped>
    #table{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    
    /* @media screen and (max-width:1200px) {
        #table{
            flex-direction: column;
            align-items: stretch;
        }
    } */
</style>
