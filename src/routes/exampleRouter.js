import express from 'express';

const exampleRouter = express.Router();

exampleRouter.get('/example', (req, res) => {
    res.json({
        title: 'Example API Response',
        body: 'This is an example response from the API.'
    });
});

export {
    exampleRouter
};
