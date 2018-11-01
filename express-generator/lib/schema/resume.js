const {mongoose} = require('../mongo/db')
const { HOST } = require('../../config') // 引入模块

module.exports = mongoose.model('resumes', new mongoose.Schema({
    title: {
        type: String,
        default: 'Hello i\'m charles'
    },
    dusc: {
        type: String,
        default: 'MLGB(My Life Getting Better)'
    },
    email: {
        type: String,
        default: 'only_tigerhu@163.com'
    },
    resume: {
        type: String,
        default: `您好，，23岁， 坐标北京。 
       目前就职于北京中钰医生。不浮躁，喜欢前端，执行力，学习能力都棒棒哒！
       目前，能做点粗糙设计（比如本网站）。
   `
    },
    echarts: {
        type: Object,
        default: {
            data: ['JS', 'ES6', 'NODE', 'CSS3', 'WEBPACK', 'HTML5', 'JAVA'],
            year: [2015, 2016, 2017, 2018],
            series: [{
                    type: 'bar',
                    animation: false,
                    name: 'JAVA',
                    itemStyle: {
                        normal: {
                            opacity: 0.5
                        }
                    },
                    data: [40, 30, 30, 30]
                },
                {
                    type: 'bar',
                    animation: false,
                    name: 'JS',
                    itemStyle: {
                        normal: {
                            opacity: 0.5
                        }
                    },
                    data: [30, 44, 62, 92]
                },
                {
                    type: 'bar',
                    animation: false,
                    name: 'CSS3',
                    itemStyle: {
                        normal: {
                            opacity: 0.5
                        }
                    },
                    data: [20, 30, 60, 72]
                },
                {
                    type: 'bar',
                    animation: false,
                    name: 'HTML5',
                    itemStyle: {
                        normal: {
                            opacity: 0.5
                        }
                    },
                    data: [40, 60, 70, 89]
                },

                {
                    type: 'bar',
                    animation: false,
                    name: 'WEBPACK',
                    itemStyle: {
                        normal: {
                            opacity: 0.5
                        }
                    },
                    data: [0, 20, 30, 60]
                },
                {
                    type: 'bar',
                    animation: false,
                    name: 'ES6',
                    itemStyle: {
                        normal: {
                            opacity: 0.5
                        }
                    },
                    data: [0, 10, 40, 82]
                },
                {
                    type: 'bar',
                    animation: false,
                    name: 'NODE',
                    itemStyle: {
                        normal: {
                            opacity: 0.5
                        }
                    },
                    data: [0, 0, 30, 50]
                }
            ]
        }
    },
    experience: {
        type: Object,
        default: [{
            title: '2017.10-2018',
            detail: '中钰医生',
            describe: `参与架构设计
               负责重构App用户端
               和康仆端逻辑对接
               用户端支付 即时通讯 以及推送重构`

        }, {
            title: '2016.10-2017.10',
            detail: '北京中期教育科技有限公司',
            describe: `参与架构设计，
               技术选型等工作
               参与项目优化以及移动端兼容等工作″ 负责学生端整体研发″ 
               负责老师端日常教学和作业测试功能研发″ 
               负责家长端个人中心以、 请假、 作业、 二维码等功能开发″ 
               参与打包、 证书管理， APP各端上线工作`
        }, {
            title: '2015.10-2016.10',
            detail: '深圳讯方科技有限公司',
            describe: `  
    参与前端项目架构，技术选型，业务逻辑梳理，
    以前端开发规范设计
    负责药库管理，诊所管理，统计，以及权限模块开发
    负责系统后台总后台开发
    负责项目上线配置打包以及管理`
        }]
    },
    works: {
        type: Object,
        default: [{
                icon: `${HOST}/file/image?name=sinogo4Student.png`,
                name: '名校云学生端',
                adder: 'http://a.app.qq.com/o/simple.jsp?pkgname=com.sinogo.mobile.sinogostudent&fromcase=40002'
            },
            {
                icon: `${HOST}/file/image?name=sinogo4Teacher.png`,
                name: '名校云老师端',
                adder: 'http://a.app.qq.com/o/simple.jsp?pkgname=com.sinogo.mobile.teacher&fromcase=40002'
            }, {
                icon: `${HOST}/file/image?name=sinogoParent.png`,
                name: '名校云家长端',
                adder: 'http://a.app.qq.com/o/simple.jsp?pkgname=com.sinogo.mobile.student&fromcase=40002'
            }, {
                icon: `${HOST}/file/image?name=sinogoMatch.png`,
                name: '围棋赛事',
                adder: 'http://a.app.qq.com/o/simple.jsp?pkgname=com.sinogo.mobile.match&fromcase=40002'
            }
        ]
    }

}));