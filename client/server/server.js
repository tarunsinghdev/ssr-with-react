import initialRenderRoutes from './routes/initialRenderRoutes.js';
import path from 'path';
import express from 'express';

const app = express();
app.use('^/$', initialRenderRoutes);

app.use(express.static(path.resolve(__dirname, '../build')));

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
