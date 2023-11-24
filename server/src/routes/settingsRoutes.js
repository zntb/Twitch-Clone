import express from 'express';
import ExpressValidation from 'express-joi-validation';
import Joi from 'joi';
import { verifyToken } from '../middlewares/auth.js';
import {
  getChannelSettings,
  putChannelsettings,
} from '../controllers/controllers.js';

const router = express.Router();

const validator = ExpressValidation.createValidator({});

const channelSettingsSchema = Joi.object({
  username: Joi.string().min(3).max(12).required().required(),
  description: Joi.string().min(10).max(200).required(),
  title: Joi.string().min(3).max(30).required(),
  avatarUrl: Joi.string().uri().required(),
});

router.get('/channel', verifyToken, getChannelSettings);

router.put(
  '/channel',
  verifyToken,
  validator.body(channelSettingsSchema),
  putChannelsettings
);

export default router;
