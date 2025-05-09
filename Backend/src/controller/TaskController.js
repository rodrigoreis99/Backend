const express = require('express');
const TaskModel = require('../model/TaskModel');
const { startOfDay, endOfDay,startOfWeek, endOfWeek,startOfMonth,
    endOfMonth,startOfYear,endOfYear} = require('date-fns');


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

    async all(req, res){
        await TaskModel.find({macaddress: {'$in':req.params.macaddress}})
                .sort('when')
                .then(response => {
                    return res.status(200).json(response);
                })
                .catch(error =>{
                    return res.status(500).json(error);
                });
    }

    async show(req,res){
        await TaskModel.findById(req.params.id)
        .then(response => {
            if(response)
                return res.status(200).json(response);
            else
                return res.status(404).json({error: 'Tarefa não encontrada!'});
        })
        .catch(error =>{
            return res.status(500).json(error);
        })
    }

    async delete(req,res){
        await TaskModel.deleteOne({'_id': req.params.id})
                .then(response =>{
                    return res.status(200).json(response)
                })
                .catch(response =>{
                    return res.status(500).json(error);
                })
    }

    async done(req,res){
        await TaskModel.findByIdAndUpdate(
            {'_id': req.params.id},
            {'done': req.params.done},
            {new: true})
            .then(response =>{
                return res.status(200).json(response);
            })
            .catch(response =>{
                return res.status(500).json(error)
            });
    }

    async late(req,res){
        const currentDate = new Date();
        await TaskModel
        .find({
            'when': {'$lt':currentDate},
            'macaddress':{'$in': req.params.macaddress}
        })
        .sort('when')
        .then(response =>{
            return res.status(200).json(response);
        })
        .catch(error =>{
            return res.status(500).json(error);
        })

    }

    async today(req,res){
        const currentDate = new Date();
        await TaskModel
                .find({
                    'macaddress':{'$in':req.params.macaddress},
                    'when':{'$gte': startOfDay(currentDate),'$lte': endOfDay(currentDate)}
                })
                .sort('when')
                .then(response =>{
                    return res.status(200).json(response);
                })
                .catch(error =>{
                    return res.status(500).json(error);
                })
    }

    async week(req,res){
        const currentDate = new Date();
        await TaskModel
                .find({
                    'macaddress':{'$in':req.params.macaddress},
                    'when':{'$gte': startOfWeek(currentDate),'$lte': endOfWeek(currentDate)}
                })
                .sort('when')
                .then(response =>{
                    return res.status(200).json(response);
                })
                .catch(error =>{
                    return res.status(500).json(error);
                })
    }

    async month(req,res){
        const currentDate = new Date();
        await TaskModel
                .find({
                    'macaddress':{'$in':req.params.macaddress},
                    'when':{'$gte': startOfMonth(currentDate),'$lte': endOfMonth(currentDate)}
                })
                .sort('when')
                .then(response =>{
                    return res.status(200).json(response);
                })
                .catch(error =>{
                    return res.status(500).json(error);
                })
    }

    async year(req,res){
        const currentDate = new Date();
        await TaskModel
                .find({
                    'macaddress':{'$in':req.params.macaddress},
                    'when':{'$gte': startOfYear(currentDate),'$lte': endOfYear(currentDate)}
                })
                .sort('when')
                .then(response =>{
                    return res.status(200).json(response);
                })
                .catch(error =>{
                    return res.status(500).json(error);
                })
    }
}

module.exports = new TaskController();