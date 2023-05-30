import { describe, it } from 'mocha';
import { expect } from 'chai';
import request from 'supertest';
import app from '../../app';
import { HttpStatusCode } from '@constants';

const jwtKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' +
    '.eyJpZCI6NSwidXNlck51bWJlciI6ImI5YjV6MXZyY3oiLCJpYXQiOjE2ODIwOTA3N' +
    'DB9.6v_UJ57g_KbRhLQciB5Cu6oO4KQpENItdPlT_CZOnqA';

const createCategoryReqBody = { name: 'deneme', rank: 0 };

const categoryNumber = 'achd29kvmv';
const updateCategoryReqBody = { name: 'updateCategory', rank: 10 };

describe('Category e2e test', () => {
    it('Category List', (done) => {
        request(app)
            .get('/api/v1/category')
            .set('Authorization', jwtKey)
            .set('Accept', 'application/json')
            .expect(HttpStatusCode.OK)
            .end((err, res) => {
                if (err) throw err;

                expect(res.body).to.have.property('data').to.be.an('array');
                res.body.data.forEach((item: any) => {
                    expect(item).to.be.an('object');
                    expect(item).to.have.property('id').to.be.a('number');
                    expect(item).to.have.property('name').to.be.a('string');
                });
                done();
            });
    });

    it('Category Create', (done) => {
        request(app)
            .post('/api/v1/category')
            .set('Authorization', jwtKey)
            .set('Accept', 'application/json')
            .send(createCategoryReqBody)
            .expect(HttpStatusCode.OK)
            .end((err, res) => {
                if (err) throw err;

                expect(res.body.data).to.have.property('rank').to.equal(createCategoryReqBody.rank);
                expect(res.body.data).to.have.property('name').to.equal(createCategoryReqBody.name);
                expect(res.body).to.have.property('data').to.be.an('object');
                expect(res.body.data).to.have.property('id').to.be.a('number');
                expect(res.body.data).to.have.property('createdAt').to.be.a('string');
                expect(res.body.data).to.have.property('updatedAt').to.be.a('string');
                expect(res.body.data).to.have.property('isActive').to.be.a('boolean');
                expect(res.body.data).to.have.property('categoryNumber').to.be.a('string');
                expect(res.body.data).to.have.property('deletedAt').to.equal(null);

                done();
            });
    });

    it('Category Update', (done) => {
        request(app)
            .patch(`/api/v1/category/${categoryNumber}`)
            .set('Authorization', jwtKey)
            .set('Accept', 'application/json')
            .send(updateCategoryReqBody)
            .expect(HttpStatusCode.OK)
            .end((err, res) => {
                if (err) throw err;
                done();
            });
    });

    it('Category Delete', (done) => {
        request(app)
            .delete(`/api/v1/category/${categoryNumber}`)
            .set('Authorization', jwtKey)
            .set('Accept', 'application/json')
            .expect(HttpStatusCode.OK)
            .end((err, res) => {
                if (err) throw err;
                done();
            });
    });
});
