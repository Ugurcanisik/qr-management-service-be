const DefaultParameters = {
    data: {},
    error: {
        validations: null,
        code: null,
        httpCode: null,
        message: null
    }
};

class BaseResponse {
    data?: any;
    error?: any;

    constructor({ data = DefaultParameters.data, error = DefaultParameters.error }: any = DefaultParameters) {
        this.data = data;
        this.error = { ...error, message: error.message };
    }

    static createDefaultError() {
        return new BaseResponse({
            dialog: {
                title: 'Sunucu Hatası',
                description: 'Lütfen tekrar deneyiniz.'
            }
        });
    }
}

export default BaseResponse;
