const {describe, expect, test} = require('@jest/globals');
const request = require('supertest')
const app = require('../app')

describe('Passport-Local Registration', () => {
  test('should register a new local user', async() => {
    const response = await request(app)
      .post('/auth/signup')
      .send({name: 'testuser',email:'testuser@gmail.com',password:'test123'})
    expect(response.statusCode).toBe(201)
    expect(response.text).toBe('Please check your email for verification.')
  });
  test('should state that a user exists already', async() => {
    const response = await request(app)
      .post('/auth/signup')
      .send({name: 'testuser',email:'testuser@gmail.com',password:'test123'})
    expect(response.statusCode).toBe(409)
    expect(response.text).toBe('User already exists')
  });
});