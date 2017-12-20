var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
router.get('/list', function (req, res, next) {
    var product = {
        all: {
            pc: {
                title: 'PC端产品',
                list:
                    [
                        {
                            name: '数据统计',
                            url: 'http://starcraft.com'
                        },
                        {
                            name: '数据预测',
                            url: 'http://warcraft.com'
                        },
                        {
                            name: '流量分析',
                            url: 'http://overwatch.com',
                            hot: true
                        },
                        {
                            name: '广告发布',
                            url: 'http://hearstone.com'
                        }
                    ]
            },
            mobile: {
                title: '手机应用类',
                last: true,
                list:
                    [
                        {
                            name: '91助手',
                            url: 'http://weixin.com'
                        },
                        {
                            name: '产品助手',
                            url: 'http://twitter.com',
                            hot: true
                        },
                        {
                            name: '智能地图',
                            url: 'http://maps.com'
                        },
                        {
                            name: '团队语音',
                            url: 'http://phone.com'
                        }]
            }
        },
        news: [
            {
                name: '断了的弦',
                url: 'http://starcraft.com'
            },
            {
                name: '浮夸爱情',
                url: 'http://warcraft.com'
            },
            {
                name: '曾经的你曾经的你曾经的你曾经的你曾经的你曾经的你',
                url: 'http://overwatch.com',
                hot: true
            },
            {
                name: '仗剑走天1',
                url: 'http://hearstone.com'
            },
            {
                name: '仗剑走天2',
                url: 'http://hearstone.com'
            },
            {
                name: '仗剑走天3',
                url: 'http://hearstone.com'
            },
            {
                name: '仗剑走天4',
                url: 'http://hearstone.com'
            },
            {
                name: '浮夸爱情1',
                url: 'http://warcraft.com'
            },
            {
                name: '浮夸爱情2浮夸爱情2浮夸爱情2浮夸爱情2',
                url: 'http://warcraft.com'
            },
            {
                name: '浮夸爱情3',
                url: 'http://warcraft.com'
            },
            {
                name: '浮夸爱情4',
                url: 'http://warcraft.com'
            }
        ],
        desc: [
            {
                title: '开放产品',
                description: '开放产品是一款供大众使用的产品',
                id: 'car',
                toKey: 'analysis',
                saleout: false,
                bg: "http://localhost:3000/images/1.png"

            },
            {
                title: '品牌营销',
                description: '品牌营销帮助你的产品更好地找到定位',
                id: 'earth',
                toKey: 'count',
                saleout: false,
                bg: "http://localhost:3000/images/2.png"
            },
            {
                title: '使命必达',
                description: '使命必达快速迭代永远保持最前端的速度',
                id: 'loud',
                toKey: 'forecast',
                saleout: true,
                bg: "http://localhost:3000/images/3.png"
            },
            {
                title: '勇攀高峰',
                description: '帮你勇闯高峰，到达事业的顶峰',
                id: 'hill',
                toKey: 'publish',
                saleout: false,
                bg: "http://localhost:3000/images/4.png"
            }
        ]
    };
    res.send(JSON.stringify(product))
});
router.get('/user', function (req, res, next) {
    var login = {
        username: 'xianhe@126',
        userId: 123456
    };
    res.send(JSON.stringify(login))
});
router.get('/detail', function (req, res, next) {
    var info = {
        products: [
            {
                name: '数据统计',
                path: 'count'

            },
            {
                name: '数据预测',
                path: 'forecast'

            },
            {
                name: '流量分析',
                path: 'analyse'
            },
            {
                name: '广告发布',
                path: 'publish'
            }
        ],
        imgMap: {
            '/detail/count': "http://localhost:3000/images/1.png",
            '/detail/forecast': "http://localhost:3000/images/2.png",
            '/detail/analyse': "http://localhost:3000/images/3.png",
            '/detail/publish': "http://localhost:3000/images/4.png"
        }
    };
    res.send(JSON.stringify(info))
});


module.exports = router;
