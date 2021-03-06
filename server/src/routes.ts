import express, { request, response } from 'express';
import { celebrate, Joi } from 'celebrate';

import multer from 'multer';
import multerConfig from './config/multer';

import PointsController from './controllers/PointsControllers'
import ItemsController from './controllers/ItemsControllers'

// index, show, create, update, delete

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index)
routes.get('/points', pointsController.index) //index lista varios
routes.get('/points/:id', pointsController.show) //show lista um unico

routes.post(
    '/points', 
    upload.single('image'),
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            location: Joi.string().required(),
            whatsapp: Joi.number().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            items: Joi.string().required(),
        })
    }, {
        abortEarly: false
    }),
    pointsController.create
);

export default routes;