const {
    getAllCustomers,
    getOnecustomer,
    addOnecustomer,
    updateOnecustomer,
    deleteOnecustomer
}=require("./userquery")

module.exports={
    getAll:(req,res)=>{
        const cb=(err,succ)=>{
            if(err)res.status(500).send(err);
            else res.json(succ)
        }
        getAllCustomers(cb)
},
    getOne:(req,res)=>{
        const id=req.params.username
        console.log(id)
        const cb=(err,suc)=>{
            if(err)res.status(500).send(err);
            else res.json(suc)
        }
        getOnecustomer(id,cb)
    },
    addOne:(req,res)=>{
        const body= req.body
        console.log(body)
        const cb=(err,suc)=>{
            if(err)res.status(500).send(err);
            else res.json(suc)
        }
        addOnecustomer(body,cb)
    },
    updateOne:(req,res)=>{
        const body= req.body
        const id=req.params.username
        console.log(body,id)
        const cb=(err,suc)=>{
            if(err)res.status(500).send(err);
            else res.json(suc)
        }
        updateOnecustomer(body,id,cb)
    },
    deleteOne:(req,res)=>{
        const id=req.params.username
        console.log(id)
        const cb=(err,suc)=>{
            if(err)res.status(500).send(err);
            else res.json(suc)
        }
        deleteOnecustomer(id,cb)
    }
}