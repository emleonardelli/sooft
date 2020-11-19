const express=require('express')
const response=require('../../../network/response')
const controller=require('./index')
const router=express.Router()

router.post('/save', saveRestorant)
router.get('/', getList)
router.get('/kindOfRestaurant/:name', search)

function saveRestorant(req, res) {
  controller.saveRestorant(req)
    .then((restorant) => {
      response.success(req, res, restorant, 201)
    })
    .catch((err) =>{
      response.error(req, res, err.message, 400)
    })
}

function getList(req, res) {
  controller.getList(req)
    .then((list) => {
      response.success(req, res, list, 200)
    })
    .catch((err) =>{
      response.error(req, res, err.message, 500)
    })
}

function search(req, res) {
  controller.search(req)
    .then((restorant) => {
      response.success(req, res, restorant, 200)
    })
    .catch((err) =>{
      response.error(req, res, err.message, 400)
    })
}

module.exports = router