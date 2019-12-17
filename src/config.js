module.exports = {
  PORT: process.env.PORT || 8000,
  API_TOKEN: process.env.API_TOKEN || '11fc6b8b-29b6-49d9-91ca-5cc8b3678918',
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: process.env.DATABASE_URL || 'postgresql://postgres@localhost/noteful'
};