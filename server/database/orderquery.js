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
const getAllOrders=(callback)=>{
const sql = "select * from Orders"
 conn.query(sql,(suc,err,f)=>{
    callback(suc,err)
    
 })
}
const getOneOrder =(i,callback)=>{
    const sql = `select * from Orders where painter="${i}"`
    conn.query(sql,(suc,err,f)=>{
        callback(suc,err)
        
     })
}
const getOneOrderByName =(i,callback)=>{
    const sql = `select * from Orders where imagename="${i}"`
    conn.query(sql,(suc,err,f)=>{
        callback(suc,err)
     })
}
const addOneOrder=(order,callback)=>{
    const sql = `insert into Orders set ?`
    conn.query(sql,order,(suc,err,f)=>{
        console.log(suc,err)
        callback(suc,err)})
}
const updateOneOrder=(updated,i,callback)=>{
    const sql= `update Orders set ? where painter="${i}"`
    conn.query(sql,updated,(suc,err,f)=>{
        callback(suc,err)}) 
}
const deleteOneOrder=(i,callback)=>{
 const sql=`delete from Orders where imagename="${i}"`
 conn.query(sql,(suc,err,f)=>{
    callback(suc,err)}
    )
    
}


// const deleteOneOrder = (customerId, password, callback) => {
//     const verifysql = `SELECT userpassword FROM Customers WHERE id=${customerId}`;
//     conn.query(verifysql,(succ,err)=>{
//       if (succ){
//         callback(null,err);
//         return;
//       }
//       if (succ.length === 0) {
//         callback(null, `Customer with ID ${customerId} not found`);
//         return;
//       }
//       const storedPassword = succ[0].userpassword;
//       console.log(storedPassword)
//       if (password !== storedPassword) {
//         callback(null, 'Incorrect password');
//         return;
//       }
//       const deleteOrderSql = `DELETE FROM Orders WHERE customer_id=${customerId}`;
//       conn.query(deleteOrderSql,(ress,er) => {
//         callback(ress, er);
//       });
//     });
//   };
module.exports={
    getAllOrders,
    getOneOrder,
    addOneOrder,
    updateOneOrder,
    deleteOneOrder,
    getOneOrderByName
}