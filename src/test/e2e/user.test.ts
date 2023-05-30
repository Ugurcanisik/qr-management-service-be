import { describe, it } from 'mocha';
import { expect } from 'chai';
import request from 'supertest';
import app from '../../app';
import { HttpStatusCode } from '@constants';

const jwtKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' +
    '.eyJpZCI6NSwidXNlck51bWJlciI6ImI5YjV6MXZyY3oiLCJpYXQiOjE2ODIwOTA3N' +
    'DB9.6v_UJ57g_KbRhLQciB5Cu6oO4KQpENItdPlT_CZOnqA';

const createUserReqBody = {
    firstName: `testUserFirstName`,
    lastName: 'testUserLastName',
    userName: 'testUserName' + Math.random(),
    password: 'testPW'
};

const userNumber = '1kk303rrlh';
const updateUserReqBody = {
    firstName: 'updateUserFirstName',
    lastName: 'updateUserLastName',
    userName: 'updateUserName',
    password: 'updatePW'
};

describe('User e2e test', () => {
    it('User List', (done) => {
        request(app)
            .get('/api/v1/users')
            .set('Authorization', jwtKey)
            .set('Accept', 'application/json')
            .expect(HttpStatusCode.OK)
            .end((err, res) => {
                if (err) throw err;

                expect(res.body).to.have.property('data').to.be.an('array');
                res.body.data.forEach((item: any) => {
                    expect(item).to.be.an('object');
                    expect(item).to.have.property('id').to.be.a('number');
                    expect(item).to.have.property('userNumber').to.be.a('string');
                    expect(item).to.have.property('firstName').to.be.a('string');
                    expect(item).to.have.property('lastName').to.be.a('string');
                    expect(item).to.have.property('userName').to.be.a('string');
                    expect(item).to.have.property('password').to.be.a('string');
                    expect(item).to.have.property('token').to.be.a('string');
                    expect(item).to.have.property('isActive').to.be.a('boolean');
                    expect(item).to.have.property('createdAt').to.be.a('string');
                    expect(item).to.have.property('updatedAt').to.be.a('string');
                    expect(item).to.have.property('deletedAt').to.equal(null);
                });
                done();
            });
    });

    it('User Create', (done) => {
        request(app)
            .post('/api/v1/users')
            .set('Authorization', jwtKey)
            .set('Accept', 'application/json')
            .send(createUserReqBody)
            .expect(HttpStatusCode.OK)
            .end((err, res) => {
                if (err) throw err;

                expect(res.body).to.have.property('data').to.be.an('object');
                expect(res.body.data).to.have.property('id').to.be.a('number');
                expect(res.body.data).to.have.property('firstName').to.equal(createUserReqBody.firstName);
                expect(res.body.data).to.have.property('lastName').to.equal(createUserReqBody.lastName);
                expect(res.body.data).to.have.property('userName').to.equal(createUserReqBody.userName);
                expect(res.body.data).to.have.property('password').to.be.a('string');
                expect(res.body.data).to.have.property('token').to.be.a('string');
                expect(res.body.data).to.have.property('createdAt').to.be.a('string');
                expect(res.body.data).to.have.property('updatedAt').to.be.a('string');
                expect(res.body.data).to.have.property('deletedAt').to.equal(null);

                done();
            });
    });

    it('User Update', (done) => {
        request(app)
            .patch(`/api/v1/users/${userNumber}`)
            .set('Authorization', jwtKey)
            .set('Accept', 'application/json')
            .send(updateUserReqBody)
            .expect(HttpStatusCode.OK)
            .end((err, res) => {
                if (err) throw err;
                done();
            });
    });

    it('User Delete', (done) => {
        request(app)
            .delete(`/api/v1/users/${userNumber}`)
            .set('Authorization', jwtKey)
            .set('Accept', 'application/json')
            .expect(HttpStatusCode.OK)
            .end((err, res) => {
                if (err) throw err;
                done();
            });
    });
});
