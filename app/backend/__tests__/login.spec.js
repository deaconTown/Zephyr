const {describe, expect, test} = require('@jest/globals');
const request = require('supertest')
const app = require('../app')

describe('Passport-Local Login', () => {

  test('should login valid user', async() => {
    await request(app)
    .post('/auth/signup')
    .send({name: 'newuser',email:'newuser@email.com',password:'test123'})

    const response = await request(app)
      .post('/auth/login')
      .send({email:'newuser@email.com',password:'test123'})
    
    expect(response.statusCode).toBe(302)
  });

  test('should not login user invalid with incorrect email', async() => {
    const response = await request(app)
      .post('/auth/login')
      .send({email:'newr@email.com',password:'test123'})
    
    expect(response.statusCode).toBe(401)
    expect(response.text).toBe('Unauthorized')
  });

  test('should not login user invalid with incorrect password', async() => {
    const response = await request(app)
      .post('/auth/login')
      .send({email:'newuser@email.com',password:'test12'})
    
    expect(response.statusCode).toBe(401)
    expect(response.text).toBe('Unauthorized')
  });

});