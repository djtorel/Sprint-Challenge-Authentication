const request = require('supertest');

const server = require('../api/server');
const db = require('../database/dbConfig');

describe('auth-router.js', () => {
  beforeAll(async () => {
    await db('users').truncate();
  });

  describe('POST /api/auth/register', () => {
    it("responds with 'test' user object after creating account", done => {
      request(server)
        .post('/api/auth/register')
        .send({ username: 'test', password: '1234' })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .expect(res => {
          res.body.id = 1;
          res.body.username = 'test';
        })
        .end((err, res) => (err ? done(err) : done()));
    });
    it("responds with 'foo' user object after creating account", done => {
      request(server)
        .post('/api/auth/register')
        .send({ username: 'foo', password: 'bar' })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .expect(res => {
          res.body.id = 2;
          res.body.username = 'foo';
        })
        .end((err, res) => (err ? done(err) : done()));
    });
  });

  describe('POST /api/auth/login', () => {
    it(`can log in 'test' account`, done => {
      request(server)
        .post('/api/auth/login')
        .send({ username: 'test', password: '1234' })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .expect(res => {
          expect(res.body.token).not.toBe(undefined);
        })
        .end((err, res) => (err ? done(err) : done()));
    });
    it(`gets unauthorized for incorrect password`, done => {
      request(server)
        .post('/api/auth/login')
        .send({ username: 'foo', password: '1234' })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(401)
        .expect(res => {
          expect(res.body.token).toBe(undefined);
        })
        .end((err, res) => (err ? done(err) : done()));
    });
  });
});
