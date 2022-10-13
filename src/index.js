import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import swaggerUi from 'swagger-ui-express';

import allRoutes from './v1/routes';
import apiDocumentation from '../swagger.json';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/v1', allRoutes);
app.use(`/api/v1/documentation`, swaggerUi.serve, swaggerUi.setup(apiDocumentation));
app.get('**', (req, res) => res.status(200).json({ status: 200, data: 'Welcome To Heritage Apps' }));

dotenv.config();
const port = process.env.PORT;
app.listen(port, () => { console.log('Server Started on', port); });

export default app;
