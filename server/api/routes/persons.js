import express from 'express';
import { personModel } from '../../models/index.js'

const route = express.Router();

export default ( app ) => {
  app.use('/persons', route)

  route.get('/', personModel.getPersons)
  route.get('/:id', personModel.getPersonById)
  route.post('', personModel.createPerson)
  route.put('/:id', personModel.updatePerson)
  route.delete('/:id', personModel.deletePerson)
}