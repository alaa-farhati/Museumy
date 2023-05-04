const sql = require("mysql2")
const conn= sql.createConnection({
    "host": "localhost",
    "user": "root",
    "password": "root",
    "database": "list",
  }
)  
conn.connect((err)=>{
    if(err)console.log("ta9alwa")
    else console.log("mysql connect")
})
const getAllCustomers=(callback)=>{
const sql = "select * from Customers"
 conn.query(sql,(suc,err,f)=>{
    callback(suc,err)
 })
}
const getOnecustomer =(i,callback)=>{
    const sql = `select * from Customers where username="${i}"`
    conn.query(sql,(suc,err,f)=>{
        callback(suc,err)
     })
}
const addOnecustomer=(user,callback)=>{
    const sql = `insert into Customers set ?`
    conn.query(sql,user,(suc,err,f)=>{
        callback(suc,err)})
}
const updateOnecustomer=(updated,i,callback)=>{
    const sql= `update Customers set ? where username="${i}"`
    conn.query(sql,updated,(suc,err,f)=>{
        callback(suc,err)}) 
}
const deleteOnecustomer=(i,callback)=>{
 const sql=`delete from Customers where username="${i}"`
 conn.query(sql,(suc,err,f)=>{
    callback(suc,err)})
}
module.exports={
    getAllCustomers,
    getOnecustomer,
    addOnecustomer,
    updateOnecustomer,
    deleteOnecustomer
}