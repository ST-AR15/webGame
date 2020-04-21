let a = new Vue({
    el: '#container',
    data: {
        game: {
            blankNum: 100,
            transverse: 10,
            scale: 1,
            start: false,
            safe: 90,
            boom: 10,
            boomPlace: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            blankStatu: [],
            fail: false,
            time: 0,
        },
        controls: {
            activeControl: 'safe'
        }
    },
    methods: {
        randomBoom() {
            // 不仅是随机炸弹，还是游戏的初始化
            let that = this;
            // 先判断是否合法
            if(that.game.boom < that.game.blankNum) {
                function sortNumber(a, b) {
                    return a - b;//升序
                    //return b-a;//降序
                }
                //js实现随机选取10–100之间的10个数字，存入一个数组，并排序
                var iArray = [];
                function getRandom(iStart, iEnd) {
                    var iChoice = iStart - iEnd + 1;
                    return Math.abs(Math.floor(Math.random() * iChoice)) + iStart;
                }
                for (var i = 0; i < that.game.boom; i++) {
                    let a = getRandom(1, that.game.blankNum);
                    while(iArray.indexOf(a) !== -1) {
                        // 有重复就重新随机
                        a = getRandom(1, that.game.blankNum);
                    }
                    iArray.push(a);
                }
                iArray.sort(sortNumber);
                console.log(iArray);
                that.game.boomPlace = iArray;
                // copy from https://www.cnblogs.com/heyuheng/p/6807664.html
                that.game.blankStatu = [];
                for(let i=0;i<=that.game.blankNum;i++) {
                    that.game.blankStatu.push(true);
                }
            } else {
                alert('雷不能大于或等于总格子数');
                that.game.start = false;
            }
            
        },
        click(a) {
            let that = this;
            console.log(that.controls.activeControl + '点击了');
            // console.log(that.game.scale);
            // 要先判断状态
            if (game.start) {
                if (that.controls.activeControl === 'safe') {
                    // 现在是在翻
                    if (that.game.boomPlace.indexOf(a) !== -1) {
                        // 点到了雷，游戏结束
                    } else {

                    }
                }
            }


            console.log();
        }
    },

})
