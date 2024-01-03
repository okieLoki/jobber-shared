import winston, { Logger } from "winston";
import {
    ElasticsearchTransport,
    ElasticsearchTransformer,
    LogData,
    TransformedData
} from "winston-elasticsearch";


const esTransformer = (logData: LogData): TransformedData => {
    return ElasticsearchTransformer(logData)
}

const winstonLogger = (esNode: string, name: string, level: string): Logger => {
    const options = {
        console: {
            level,
            handleExceptions: true,
            json: false,
            colorize: true,
        },

        elasticsearch: {
            level,
            transformer: esTransformer,
            clientOpts: {
                node: esNode,
                log: level,
                maxRetries: 3,
                requestTimeout: 10000,
                sniffOnStart: false,
            }
        }
    }

    const logger: Logger = winston.createLogger({
        exitOnError: false,
        defaultMeta: { service: name },
        transports: [
            new winston.transports.Console(options.console),
            new ElasticsearchTransport(options.elasticsearch),
        ],
    })

    return logger
}

export {
    winstonLogger,
}
