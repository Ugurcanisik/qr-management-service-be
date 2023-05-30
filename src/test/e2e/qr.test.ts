import { describe, it } from 'mocha';
import { expect } from 'chai';
import request from 'supertest';
import app from '../../app';
import { HttpStatusCode } from '@constants';

describe('QR e2e test', () => {
    it('QR List', (done) => {
        request(app)
            .get('/api/v1/qr')
            .set('Accept', 'application/json')
            .expect(HttpStatusCode.OK)
            .end((err, res) => {
                if (err) throw err;

                expect(res.body).to.have.property('data').to.be.an('object');
                expect(res.body.data).to.have.property('category').to.be.an('array');
                expect(res.body.data).to.have.property('products').to.be.an('array');

                res.body.data.category.forEach((item: any) => {
                    expect(item).to.be.an('object');
                    expect(item).to.have.property('id').to.be.a('number');
                    expect(item).to.have.property('categoryNumber').to.be.a('string');
                    expect(item).to.have.property('name').to.be.a('string');
                    expect(item).to.have.property('isActive').to.be.a('boolean');
                    expect(item).to.have.property('rank').to.be.a('number');
                    expect(item).to.have.property('createdAt').to.be.a('string');
                    expect(item).to.have.property('updatedAt').to.be.a('string');
                    expect(item).to.have.property('deletedAt').to.equal(null);
                });

                res.body.data.products.forEach((item: any) => {
                    expect(item).to.be.an('object');
                    expect(item).to.have.property('categoryName').to.be.a('string');
                    expect(item).to.have.property('categorySeoUrl').to.be.a('string');
                    expect(item).to.have.property('products').to.be.an('array');

                    item.products.forEach((product: any) => {
                        expect(product).to.be.an('object');
                        expect(product).to.have.property('id').to.be.a('number');
                        expect(product).to.have.property('productNumber').to.be.a('string');
                        expect(product).to.have.property('name').to.be.a('string');
                        // expect(product).to.have.property('imageUrl').to.be.a('boolean');
                        expect(product).to.have.property('price').to.be.a('string');
                        expect(product).to.have.property('description').to.be.a('string');
                        expect(product).to.have.property('categoryNumber').to.be.a('string');
                        expect(product).to.have.property('isActive').to.be.a('boolean');
                        expect(product).to.have.property('rank').to.be.a('number');
                        expect(product).to.have.property('createdAt').to.be.a('string');
                        expect(product).to.have.property('updatedAt').to.be.a('string');
                        expect(product).to.have.property('deletedAt').to.equal(null);
                    });
                });
                done();
            });
    });
});
