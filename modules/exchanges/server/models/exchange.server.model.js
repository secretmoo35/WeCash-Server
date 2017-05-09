'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Exchange Schema
 */
var ExchangeSchema = new Schema({
  currency_from: {
    type: String
  },
  currency_to: {
    type: String,
  },
  amount_from: {
    type: Number,
  },
  amount_to: {
    type: Number,
  },
  rate: {
    type: Number,
  },
  schedule: {
    type: Date,
  },
  created: {
    type: Date,
    default: Date.now
  },
  location: {
    name: {
      type: String,
    },
    address: {
      type: String,
    },
    lat: {
      type: String,
    },
    lng: {
      type: String,
    },
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Exchange', ExchangeSchema);
