let env = process.env;
const config = {
    deviceType: 'web',
    version: env.REACT_APP_SERVICE_NODE_ENV,
    service: {
        BASE_URL: env.REACT_APP_SERVICE_BASE_URL,
    },
    server: {
        SERVER_URL: env.REACT_APP_SERVICE_SERVER_URL,
    }
};
export default config;
