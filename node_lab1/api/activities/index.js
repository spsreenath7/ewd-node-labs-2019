import express from 'express';
import Activity from './actsModel';
import asyncHandler from 'express-async-handler';

const router = express.Router();// eslint-disable-line

router.get('/', asyncHandler(async (req, res) => {
  const acts = await Activity.find();
  return res.send(acts);
}));

// Add a post
router.post('/:userid', asyncHandler(async (req, res) => {
  const newAct = req.body;
  console.log("----------------------------------------------");
  console.log("----------------------------------------------");
  console.log("userId === "+req.params.userid);
  console.log("----------------------------------------------");
  console.log("----------------------------------------------");
  newAct.user = req.params.userid || 'anonymous';
  if (newAct) {
        const activity = await Activity.create(newAct);
        return res.status(201).send({activity});
    } else {
       return handleError(res, err);
    }
}));

// upvote a post
// router.post('/:id/upvotes', asyncHandler(async (req, res) => {
//   const id = req.params.id;
//   const post = await Post.findById(id);
//   post.upvotes++;
//   await post.save();
//   return res.status(201).send({post});
// }));

// get post
router.get('/:id', asyncHandler(async (req, res) => {
    const id = req.params.id;
    const activity = await Activity.findById(id);
    return res.send({activity});
}));



/**
 * Handle general errors.
 * @param {object} res The response object
 * @param {object} err The error object.
 * @return {object} The response object
 */
function handleError(res, err) {
  return res.status(500).send(err);
};

export default router;