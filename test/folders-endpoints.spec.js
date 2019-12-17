require('dotenv').config();
const { expect } = require('chai');
const knex = require('knex');
const app = require('../src/app');
const { makeFolders, makeNotes } = require('.fixtures');

describe('Notes Endpoints', function () {
  let db;

  before('make knex instance', () => {

    db = knex({
      client: 'pg',
      connection: process.env.DATABASE_URL
    })
    app.set('db', db)
  })

  after('disconnect from db', () => db.destroy());

  before('clean the table', () => db.raw('TRUNCATE noteful_notes, noteful_folders RESTART IDENTITY CASCADE'));




}) //this is the end!