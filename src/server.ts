import 'dotenv/config';
import express, { Express, Router } from 'express';
import { AddressInfo } from 'net';
import AppRoutes from './routes';
import cors from 'cors';
import PSQL_INSTANCE from './database/postgre';
import { baseConfig } from './base-config';
import http from 'http';

class Server {
    private readonly _app: Express;
    private readonly _router: Router;
    private readonly _domain: string;
    private readonly _version: string;
    private readonly _server: http.Server;
    constructor() {
        this._app = express();
        this._server = http.createServer(this._app);
        this._domain = 'api';
        this._version = 'v1';
        this._router = express.Router();
    }

    applyMiddleware() {
        this._app.use(express.json());
        return this;
    }

    applyRoutes() {
        this._router.use(`/${this._domain}/${this._version}`, AppRoutes);
        this._app.use(this._router);
        return this;
    }

    listen() {
        const server = this._server.listen(baseConfig.SERVER_PORT, () => {
            const { address, port } = server.address() as AddressInfo;
            try {
                console.log(`Node version: ${process.version}`);
            } catch (ignored) {
                console.log(`Node version error: ${ignored}`);
            }
            console.log(`Courier app listening at http://${address}:${port}`);
            console.log(`API URL: http://${address}:${port}/${this._domain}/${this._version}`);
        });
        return server;
    }

    enableCORS(port: number = 8000) {
        const corsWhiteList = [`http://localhost:${port}`];
        if (baseConfig.NODE_ENV !== 'production') {
            this._app.use(cors({ origin: '*' }));
        } else {
            this._app.use(
                cors({
                    origin: function (origin: any, callback: (arg0: Error | null, arg1: boolean) => any) {
                        // allow requests with no origin
                        if (!origin) return callback(null, true);
                        if (corsWhiteList.indexOf(origin) === -1) {
                            const msg =
                                'The CORS policy for this site does not ' + 'allow access from the specified Origin.';
                            return callback(new Error(msg), false);
                        }
                        return callback(null, true);
                    },
                    exposedHeaders: [
                        'Origin',
                        'X-Requested-With',
                        'Content-Type',
                        'Accept',
                        'authorization',
                        'Authorization'
                    ]
                })
            );
        }
        return this;
    }

    enablePg() {
        PSQL_INSTANCE.authenticate()
            .then(async () => {
                console.log('DB is authenticated!');
            })
            .catch((err: string) => {
                console.log('DB is cannot authenticated!', err);
            });
        return this;
    }
}

export default Server;
