import { describe, it } from 'mocha';
import { expect } from 'chai';
import request from 'supertest';
import app from '../../app';
import { HttpStatusCode } from '@constants';

const loginReqBody = { userName: 'test', password: '123' };

const failLoginReqBody = { userName: 'xxxxx', password: '1xxx23' };

describe('Auth e2e test', () => {
    it('Login Fail', (done) => {
        request(app)
            .post('/api/v1/authentication/login')
            .set('Accept', 'application/json')
            .send(failLoginReqBody)
            .expect(HttpStatusCode.NOT_FOUND)
            .end((err, res) => {
                if (err) throw err;

                done();
            });
    });

    it('Login Success', (done) => {
        request(app)
            .post('/api/v1/authentication/login')
            .set('Accept', 'application/json')
            .send(loginReqBody)
            .expect(HttpStatusCode.OK)
            .end((err, res) => {
                if (err) throw err;

                expect(res.body).to.have.property('data').to.be.an('object');
                expect(res.body.data).to.have.property('id').to.be.an('number');
                expect(res.body.data).to.have.property('userNumber').to.be.a('string');
                expect(res.body.data).to.have.property('fullName').to.be.a('string');
                expect(res.body.data).to.have.property('token').to.be.a('string');
                done();
            });
    });
});
