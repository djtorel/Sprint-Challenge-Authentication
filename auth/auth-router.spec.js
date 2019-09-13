const request = require('supertest');

const server = require('./auth-router');

describe('auth-router.js', () => {
  describe('POST /register', () => {
    it('should return 200 ok', async () => {
      const res = await request(server).get('/');
      expect(res.status).toBe(200);
    });

    it('should return a json object', async () => {
      const res = await request(server).get('/');
      expect(res.type).toBe('application/json');
    });
  });
});
