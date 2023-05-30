import { describe, it } from 'mocha';
import { expect } from 'chai';
import request from 'supertest';
import app from '../../app';
import { HttpStatusCode } from '@constants';

const jwtKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' +
    '.eyJpZCI6NSwidXNlck51bWJlciI6ImI5YjV6MXZyY3oiLCJpYXQiOjE2ODIwOTA3N' +
    'DB9.6v_UJ57g_KbRhLQciB5Cu6oO4KQpENItdPlT_CZOnqA';

const createProductReqBody = {
    name: 'deneme',
    imageUrl: 'test',
    price: 30,
    description: 'test',
    rank: 1,
    categoryNumber: '48m3x4hhrs'
};

const productNumber = 'kccye6gjk6';

const updateProductReqBody = {
    name: 'updateName',
    imageUrl: 'updateImage',
    price: 10,
    description: 'tesxxxt',
    rank: 91,
    categoryNumber: '48m3x4hhrs'
};

describe('Product e2e test', () => {
    it('Product List', (done) => {
        request(app)
            .get('/api/v1/products')
            .set('Authorization', jwtKey)
            .set('Accept', 'application/json')
            .expect(HttpStatusCode.OK)
            .end((err, res) => {
                if (err) throw err;

                expect(res.body).to.have.property('data').to.be.an('array');
                res.body.data.forEach((item: any) => {
                    expect(item).to.be.an('object');
                    expect(item).to.have.property('id').to.be.a('number');
                    expect(item).to.have.property('productNumber').to.be.a('string');
                    expect(item).to.have.property('name').to.be.a('string');
                    // expect(item).to.have.property('imageUrl').to.be.a('string').but.not.equal({ a: 1 });
                    expect(item).to.have.property('price').to.be.a('string');
                    expect(item).to.have.property('description').to.be.a('string');
                    expect(item).to.have.property('categoryNumber').to.be.a('string');
                    expect(item).to.have.property('isActive').to.be.a('boolean');
                    expect(item).to.have.property('rank').to.be.a('number');
                    expect(item).to.have.property('createdAt').to.be.a('string');
                    expect(item).to.have.property('updatedAt').to.be.a('string');
                    expect(item).to.have.property('deletedAt').to.equal(null);
                    expect(item).to.have.property('category').to.be.a('object');
                    expect(item.category).to.have.property('id').to.be.a('number');
                    expect(item.category).to.have.property('name').to.be.a('string');
                    expect(item.category).to.have.property('isActive').to.be.a('boolean');
                    expect(item.category).to.have.property('rank').to.be.a('number');
                    expect(item.category).to.have.property('createdAt').to.be.a('string');
                    expect(item.category).to.have.property('updatedAt').to.be.a('string');
                    expect(item.category).to.have.property('deletedAt').to.equal(null);
                });
                done();
            });
    });

    it('Product Create', (done) => {
        request(app)
            .post('/api/v1/products')
            .set('Authorization', jwtKey)
            .set('Accept', 'application/json')
            .send(createProductReqBody)
            .expect(HttpStatusCode.OK)
            .end((err, res) => {
                if (err) throw err;

                expect(res.body).to.have.property('data').to.be.an('object');
                expect(res.body.data).to.have.property('id').to.be.a('number');
                expect(res.body.data).to.have.property('name').to.equal(createProductReqBody.name);
                expect(res.body.data).to.have.property('rank').to.equal(createProductReqBody.rank);
                expect(res.body.data).to.have.property('createdAt').to.be.a('string');
                expect(res.body.data).to.have.property('updatedAt').to.be.a('string');
                expect(res.body.data).to.have.property('isActive').to.be.a('boolean');
                expect(res.body.data).to.have.property('categoryNumber').to.equal(createProductReqBody.categoryNumber);
                expect(res.body.data).to.have.property('productNumber').to.be.a('string');
                expect(res.body.data).to.have.property('deletedAt').to.equal(null);

                done();
            });
    });

    it('Product Update', (done) => {
        request(app)
            .patch(`/api/v1/products/${productNumber}`)
            .set('Authorization', jwtKey)
            .set('Accept', 'application/json')
            .send(updateProductReqBody)
            .expect(HttpStatusCode.OK)
            .end((err, res) => {
                if (err) throw err;
                done();
            });
    });

    it('Product Delete', (done) => {
        request(app)
            .delete(`/api/v1/products/${productNumber}`)
            .set('Authorization', jwtKey)
            .set('Accept', 'application/json')
            .expect(HttpStatusCode.OK)
            .end((err, res) => {
                if (err) throw err;
                done();
            });
    });
});
