import dotenv from 'dotenv';
import express from 'express';
import contactsRouter from './api/contacts';
import postsRouter from './api/posts';
import bodyParser from 'body-parser';
import './db';
import loadContacts from './contactsData';
import {loadPosts} from './postsData';
import {loadActs} from './activityData';
import loadUsers from './userData';
import usersRouter from './api/users';
import actsRouter from './api/activities';
import session from 'express-session';
import authenticate from './authenicate';
import passport from './auth';



dotenv.config();

const app = express();

const port = process.env.PORT;

if (process.env.seedDb) {
  loadContacts();
  loadPosts();
  loadUsers();
  loadActs();
}

app.use(passport.initialize());


//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api/contacts', contactsRouter);

app.use('/api/acts', actsRouter);

app.use('/api/posts', passport.authenticate('jwt', {
  session: false
}), postsRouter);

app.use('/api/users', usersRouter);

app.use(express.static('public'));

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});

