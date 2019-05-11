import dotenv from 'dotenv';
import express from 'express';
import contactsRouter from './api/contacts';
import postsRouter from './api/posts';
import bodyParser from 'body-parser';
import './db';
import loadContacts from './contactsData';
import {loadPosts} from './postsData';


dotenv.config();

const app = express();

const port = process.env.PORT;

//configure body-parser

if (process.env.seedDb) {
  loadContacts();
  loadPosts();
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api/contacts', contactsRouter);
app.use('/api/posts', postsRouter);
app.use(express.static('public'));

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
