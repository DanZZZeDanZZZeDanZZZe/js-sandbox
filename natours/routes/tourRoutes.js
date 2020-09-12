const express = require('express')
const { router } = require('../app')
const tourController = require('./../controllers/tourController')
const tourRouter = express.Router()

const { 
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
  checkID
} = tourController

tourRouter.param('id', checkID)

tourRouter
  .route('/')
  .get(getAllTours)
  .post(createTour)

tourRouter
  .route('/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour)

module.exports = tourRouter