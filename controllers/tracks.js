const {tracksModel}= require("../models")
//nada

const getItems=async(req,res)=> {
    //obtener lista de base de datos
  const data= await tracksModel.find({})
    res.send({data})
};
const getItem=(req,res)=> {
///optener detalle
};
const createItem=(req,res)=> {
//insertar registro
};
const updateItem=()=> {
//ctualizar un regegisto
};
const deleteItem=(req,res)=> {
//eliminar registro
};
module.exports={getItems,getItem, createItem, updateItem,deleteItem};