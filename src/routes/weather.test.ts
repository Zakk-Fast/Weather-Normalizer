import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from '../index';

describe('GET /weather', () => {
  it('returns 400 when lat and lon are missing', async () => {
    const res = await request(app).get('/weather');
    expect(res.status).toBe(400);
    expect(res.body.error).toBeDefined();
  });

  it('returns 400 for an unknown provider', async () => {
    const res = await request(app).get('/weather?lat=30&lon=-97&provider=nonexistent');
    expect(res.status).toBe(400);
    expect(res.body.error).toMatch(/Unknown provider/);
  });

  it('returns 200 with all expected keys using mock provider', async () => {
    const res = await request(app).get('/weather?lat=30&lon=-97&provider=mock');
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({
      location: expect.any(String),
      temperature: expect.any(Number),
      windSpeed: expect.any(Number),
      condition: expect.any(String),
      isFreezing: expect.any(Boolean),
    });
  });

  it('returns only requested fields when fields param is provided', async () => {
    const res = await request(app).get('/weather?lat=30&lon=-97&provider=mock&fields=temperature,condition');
    expect(res.status).toBe(200);
    expect(Object.keys(res.body)).toEqual(['temperature', 'condition']);
  });

  it('returns 400 when fields param includes an unknown key', async () => {
    const res = await request(app).get('/weather?lat=30&lon=-97&provider=mock&fields=temperature,humidity');
    expect(res.status).toBe(400);
    expect(res.body.error).toMatch(/humidity/);
  });
});
