const {
    getAllOrders,
    getOneOrder,
    addOneOrder,
    updateOneOrder,
    deleteOneOrder,
    getOneOrderByName
}=require("./orderquery")

module.exports={
    getAll:(req,res)=>{
        const cb=(err,succ)=>{
            if(err)res.status(500).send(err);
            else res.json(succ)
        }
        getAllOrders(cb)
    },
    getOne:(req,res)=>{
        const id=req.params.painter
        console.log(id)
        const cb=(err,suc)=>{
            if(err)res.status(500).send(err);
            else res.json(suc)
        }
        getOneOrder(id,cb)
    },
    addOne:(req,res)=>{
        const body= req.body
        console.log(body)
        const cb=(err,suc)=>{
            if(err)res.status(500).send(err);
            else res.json(suc)
        }
        addOneOrder(body,cb)
    },
    updateOne:(req,res)=>{
        const body= req.body
        const id=req.params.painter
        console.log(body,id)
        const cb=(err,suc)=>{
            if(err)res.status(500).send(err);
            else res.json(suc)
        }
        updateOneOrder(body,id,cb)
    },
    deleteOne:(req,res)=>{
        const id=req.params.customer_id
        // const password = req.body.password
        const cb=(err,suc)=>{
            if(err)res.status(500).send(err);
            else res.json(suc)
        }
        deleteOneOrder(id, cb)
    },
    getOneByName:(req,res)=>{
        const name=req.params.imagename
        console.log(name)
        const cb=(err,suc)=>{
            if(err)res.status(500).send(err);
            else res.json(suc)
        }
        getOneOrderByName(name,cb)
    },
}