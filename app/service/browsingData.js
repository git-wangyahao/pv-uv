'use strict';

const Service = require('egg').Service;
const{ Op,QueryTypes } = require("sequelize");
const sequelize = require("sequelize");
const moment = require('moment');

function formatDate(date) {  
    var y = date.getFullYear();  
    var m = date.getMonth() + 1;  
    m = m < 10 ? '0' + m : m;  
    var d = date.getDate();  
    d = d < 10 ? ('0' + d) : d;  
    return y + '-' + m + '-' + d;  
}

class BrowsingData extends Service {
    async create(params) {
        const ctx = this.ctx;
        // 查看访客表有则不添加没有则添加
    
        const { uuid, systemId } = params
        await ctx.model.Visitor.findOrCreate({
            where: { 
                uuid,
                system_code: systemId
            },
        })
        return await ctx.model.BrowsingHistory.create(params);
    }

    // 获取系统code
    async getSystemCode() {
        const ctx = this.ctx;
        const params = {
            attributes:['data_code','identification'],
            where: {
                data_type:'system'
            }
        }
        return await ctx.model.DataDictionary.findAll(params);
    }

    
    // 删除三天前的数据
    async delete(){
        const ctx = this.ctx;
        const params = {
            where: {  
                create_time: {
                    [Op.lt]: moment().subtract(3, "days").format("YYYY-MM-DD 00:00:00"), //最大时间
                }
            }
        }
        return await ctx.model.BrowsingHistory.destroy(params);
    }
    // 统计每小时产生的数据
     async byHour(date,systemId) {
            const params = String(date)
            return await this.app.model.query(`SELECT HOUR(create_time) as hour,count(*) as Count 
            FROM browsing_history e 
            WHERE DATE_FORMAT(create_time,'%Y-%m-%d') = '${params}' AND systemId = '${systemId}'
            GROUP BY HOUR(create_time)`,{ type: QueryTypes.SELECT });
      }

    //     SELECT HOUR(create_time) as hour,count(*) as Count 
    // FROM browsing_history e 
    // WHERE DATE_FORMAT(create_time,'%Y-%m-%d') = '2021-08-02' 
    // GROUP BY HOUR(create_time)
    async get() {
        const ctx = this.ctx;
        const d =  new Date()
        const Year = d.getFullYear()
        const Month = d.getMonth()
        const date = d.getDate()
        var yeaterday = new Date(date-24*60*60*1000)
        var yeaterdayDate = formatDate(yeaterday) 
        const preDate = d.getDate() - 1 //昨天
        const nowDate = formatDate(d) 
        const dateTime = new Date( Year, Month, date , 0 , 0, 0)
        const preDateTime = new Date( Year, Month, preDate , 0 , 0, 0)
    
        // 查询今日访问次数
        const veryDayParams = {
            where: {
                create_time:{
                    [Op.lt]: new Date(), //最大时间
                    [Op.gt]: dateTime, //最小时间
                },
            }
        }
        // 昨日访问次数
        const preDayParams = {
            where: {
                create_time:{
                    [Op.lt]: dateTime, //最大时间
                    [Op.gt]: preDateTime, //最小时间
                },
            }
        }

        const systemCode =  await this.getSystemCode()
        
        for (let i = 0; i < systemCode.length; i++) {
            let VisitsTodayNumber = 0 // 今日浏览量
            let VisitsYesterdayNumber = 0 // 昨日浏览量
            let VisitorsTodayNumberTotal = 0 // 今日访客
            let VisitorsYesterdayNumberTotal = 0 // 昨日访客

            const item = systemCode[i]
            veryDayParams.where.systemId = item.data_code
            preDayParams.where.systemId = item.data_code
            // 查询今日浏览量
            VisitsTodayNumber = await ctx.model.BrowsingHistory.count(veryDayParams);
            // 查询昨日浏览量
            VisitsYesterdayNumber = await ctx.model.BrowsingHistory.count(preDayParams);
            // 查询今日访客
            const resToday  = await this.app.model.query(`
            SELECT DISTINCT uuid FROM browsing_history WHERE 
            (browsing_history.create_time < '${moment().format("YYYY-MM-DD HH:mm:ss")}' AND browsing_history.create_time > '${moment().startOf('day').format('YYYY-MM-DD HH:mm:ss')}') AND browsing_history.systemId = '${item.data_code}'`)
            VisitorsTodayNumberTotal = resToday[0].length

            // 查询昨日访客
            const resYesterda  = await this.app.model.query(`
            SELECT DISTINCT uuid FROM browsing_history WHERE 
            (browsing_history.create_time < '${moment().startOf('day').format('YYYY-MM-DD HH:mm:ss')}' AND browsing_history.create_time > '${moment().subtract(1, "days").format("YYYY-MM-DD 00:00:00")}') AND browsing_history.systemId = '${item.data_code}'`)
            VisitorsYesterdayNumberTotal = resYesterda[0].length


            // 获取今天每小时产生的数据量
            let nowByHourData =  await this.byHour(nowDate, item.data_code)
            const xAxis = []
            const series = []
            nowByHourData.forEach(res => {
              xAxis.push(res.hour + '时')
              series.push(res.Count)
            })
            nowByHourData = {}
            nowByHourData.xAxis = xAxis
            nowByHourData.series = series
            
            const yeaByHourData =  await this.byHour(yeaterdayDate)
            // yeaterdayDate
           
            // 查询当前系统用户量
           const userTotal = await ctx.model.Visitor.count(
                {
                    where:{
                        system_code: item.data_code
                    }
                }
            )

             // 查询新增用户
           const newUser = await ctx.model.Visitor.count(
                {
                    where:{
                        created_time:{
                            [Op.lt]: new Date(), //最大时间
                            [Op.gt]: dateTime, //最小时间
                        },
                        system_code: item.data_code
                    }
                }
            )
            
            systemCode[i].dataValues.VisitsTodayNumber = VisitsTodayNumber
            systemCode[i].dataValues.VisitsYesterdayNumber = VisitsYesterdayNumber
            systemCode[i].dataValues.VisitorsTodayNumberTotal = VisitorsTodayNumberTotal
            systemCode[i].dataValues.VisitorsYesterdayNumberTotal = VisitorsYesterdayNumberTotal
            systemCode[i].dataValues.nowByHourData = nowByHourData
            systemCode[i].dataValues.yeaByHourData = yeaByHourData
            systemCode[i].dataValues.userTotal = userTotal
            systemCode[i].dataValues.newUser = newUser
        }
            return systemCode
        
    }
}

module.exports = BrowsingData;