const express = require('express');
const TaskModel = require('../model/TaskModel');

class TaskController{
    async create(req, res){
        const task = new TaskModel(req.body);
        await task
                .save() // salva o que foi recebido no banco de dados
                .then(response => {
                    return res.status(200).json(response);
                }) //se tudo der certo
                .catch(error =>{
                    return  res.status(500).json(error);
                }) // se tudo der errado
    }

    async update(req, res){
      await TaskModel.findByIdAndUpdate({'_id': req.params.id}, req.body, {new: true})
      .then(response => {
        return res.status(200).json(response);
      })
      .catch(error => {
        return res.status(500).json(error);
      })
    }
}

module.exports = new TaskController();