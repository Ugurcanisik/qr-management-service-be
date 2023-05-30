import { describe, it } from 'mocha';
import { expect } from 'chai';
import request from 'supertest';
import app from '../../app';
import { HttpStatusCode } from '@constants';

describe('Internal e2e test', () => {
    it('Api', (done) => {
        request(app)
            .get('/api/v1/internal/health-check')
            .expect(HttpStatusCode.OK)
            .end((err, res) => {
                if (err) throw err;
                done();
            });
    });
});
