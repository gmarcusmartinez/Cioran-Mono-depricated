import request from 'supertest';
import { app } from '../../app';

it('fails when an email that does not exist is supplied', async () => {
  return request(app)
    .post('/api/auth/signin')
    .send({
      name: 'Test User',
      email: 'test@test.com',
      password: 'password',
    })
    .expect(400);
});
it('fails when an incorrect password is supplied', async () => {
  await request(app)
    .post('/api/auth/signup')
    .send({
      name: 'Test User',
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);

  await request(app)
    .post('/api/auth/signin')
    .send({
      name: 'Test User',
      email: 'test@test.com',
      password: 'incorrectpassword',
    })
    .expect(400);
});
it('responds with a cookie when given valid credentials', async () => {
  await request(app)
    .post('/api/auth/signup')
    .send({
      name: 'Test User',
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);

  const response = await request(app)
    .post('/api/auth/signin')
    .send({
      name: 'Test User',
      email: 'test@test.com',
      password: 'password',
    })
    .expect(200);
  expect(response.get('Set-Cookie')).toBeDefined();
});
