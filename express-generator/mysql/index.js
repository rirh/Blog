/**
 * 
 * 
 * 
 * node连接mysql 做这一篇教程就够了
 * 
 * 
 * */
var mysql = require('mysql');
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'ctleryes',
    port: '3306',
    database: 'node_mysql'
});
connection.connect();
const title = 'this title';
const author = 'charles';
const date = {
    time: new Date(),
    fmt: 'yyyy-MM-dd hh:mm:ss',
    formatTime: () => {
      const dateFormat = (fmt, date) => {
            var o = {
                "M+": date.getMonth() + 1, //月份   
                "d+": date.getDate(), //日   
                "h+": date.getHours(), //小时   
                "m+": date.getMinutes(), //分   
                "s+": date.getSeconds(), //秒   
                "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
                "S": date.getMilliseconds() //毫秒   
            };
            if (/(y+)/.test(fmt))
                fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt))
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        }
        return dateFormat(date.fmt, date.time)
    }
};



const sql_create_database = "CREATE DATABASE node_con_mysql"
const sql_drop_database = "DROP DATABASE node_con_mysql"
const sql_create_table = `CREATE TABLE _table( 
                          _id INT NOT NULL AUTO_INCREMENT, 
                          _title VARCHAR(100) NOT NULL, 
                          _author VARCHAR(40) NOT NULL, 
                          _date DATE, 
                          PRIMARY KEY(_id)) ENGINE = InnoDB DEFAULT CHARSET = utf8;
                          `
const sql_drop_table = "DROP TABLE _table";
/***
 *  insert
 * 
 * 语法： insert[into] < 表名 > [列名] values < 列值 >
 * 
 * 例： insert into Strdents(姓名, 性别, 出生日期) values('王伟华', '男', '1983/6/15')
 */

const sql_insert_table = `INSERT INTO _table
                          (_title,_author, _date) 
                          VALUES 
                          ('${title}', '${author}', '${date.formatTime()}')`

 /***
 *   delect
 * 
 * 语法： delete from < 表名 > [where < 删除条件 > ]
 * 
 * 例： delete from a where name = '王伟华'（删除表a中列值为王伟华的行）
 * 注意： 删除整行不是删除单个字段， 所以在delete后面不能出现字段名
 * 
 * 
 * 
 * 
 * 2. 使用truncate table 删除整个表的数据语法：
 * 
 *  truncate table < 表名 > 
 *  例： truncate table addressList注意：
 * 
 *  删除表的所有行， 但表的结构、 列、 约束、 索引等不会被删除； 不能用于有外建约束引用的表
 **/

const sql_delect_table = `DELETE FROM _table WHERE _id=1 `;
/**
 * update
 * 
 * 语法： update < 表名 > set < 列名 = 更新值 > [where < 更新条件 > ]
 * 
 * 例： update addressList set 年龄 = 18 where 姓名 = '王伟华
 */
const sql_update_table = `UPDATE  _table SET _title='修改的名字'  WHERE _id=2  `;
/**
 * 
 * 1. 普通查询语法： 
 * select < 列名 > from < 表名 > [where < 查询条件表达试 > ][order by < 排序的列名 > [asc或desc]1).
 * 查询所有数据行和列例：
 *  select * from a 
 * 说明： 查询a表中所有行和
 * 2).查询部分行列--条件查询例：
 *  select i, j, k from a where f = 5
 * 说明： 查询表a中f = 5 的所有行， 并显示i, j, k３列
 * 3).在查询中使用ＡＳ更改列名例： 
 * select name as 姓名 from a where gender = '男'
 * 说明： 查询a表中性别为男的所有行， 显示name列， 并将name列改名为（ 姓名） 显示
 * 4).查询空行
 * 例： select name from a where email is null
 * 说明： 查询表a中email为空的所有行， 并显示name列； SQL语句中用is null或者is not null 来判断是否为空行5).在查询中使用常量
 * 例： select name '北京'as 地址 from a
 * 说明： 查询表a， 显示name列， 并添加地址列， 其列值都为 '北京'
 * 6).查询返回限制行数(关键字： top)
 * 例１： select top 6 name from a
 * 说明： 查询表a， 显示列name的前６行， top为关键字（ oracle 中没有top关键字用rownum替代）
 * select * from a where rownum < 6
 * 7).查询排序（ 关键字： order by, asc, desc）
 * 例： select name from a where grade >= 60 order by desc
 * 说明： 查询表中成绩大于等于60的所有行， 并按降序显示name列； 默认为ＡＳＣ升序
 * ２.模糊查询
 * 1).使用like进行模糊查询
 * 注意： like运算副只用语字符串，
 * 例： select * from a where name like '赵%'
 * 说明： 查询显示表a中， name字段第一个字为赵的记录
 * 2).使用between在某个范围内进行查询
 * 例： select * from a where age between 18 and 20\
 * 说明： 查询显示表a中年龄在18到20之间的记录
 * 3).使用in在列举值内进行查询(in后是多个的数据)
 * 例： select name from a where address in ('北京', '上海', '唐山')
 * 说明： 查询表a中address值为北京或者上海或者唐山的记录， 显示name字段
 *  ３.分组查询
 * 1).使用group by进行分组查询
 * 例： select studentID as 学员编号, AVG(score) as 平均成绩(注释: 这里的score是列名)from score(注释: 这里的score是表名)group by studentID
 * 2).使用having子句进行分组筛选
 * 例： select studentID as 学员编号, AVG from score group by studentID having count(score) > 1
 * 说明： 接上面例子， 显示分组后count(score) > 1 的行， 由于where只能在没有分组时使用， 分组后只能使用having来限制条件，
 * ４.多表联接查询
 * 1).内联接
 * ① 在where子句中指定联接条件
 * 例： select a.name, b.mark from a, b where a.name = b.name
 * 
 */
const sql_query_table = `SELECT _id, _title, _author, _date FROM _table `;




connection.query(sql_insert_table, (err, result) => {
    if (err) {
        console.log('[SELECT ERROR] - ', err.message);
        return;
    }

    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');
})

 module.exports = connection;