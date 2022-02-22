const { Router } = require("express");
const router = new Router();
const Space = require("../models/").space;
const Story = require("../models/").story;
const User = require("../models/").user;
const authMiddleware = require("../auth/middleware");

//Get all spaces
//http -v GET :4000/stories

router.get("/", async (req, res, next) => {
  try {
    const getAllStory = await Story.findAll();
    res
      .status(200)
      .send({ message: "This is all the storys", getAllStory: getAllStory });
  } catch (e) {
    console.log(e);
  }
  next();
});

// As a logged in user I want to be able to view my space and delete my own stories
//Delete your story
//http -v DELETE :4000/stories/1

router.delete("/:id", async (req, res, next) => {
  try {
    const params = req.params;
    const id = parseInt(req.params.id);
    console.log("the id that i want to delete", id);

    const findStory = await Story.findByPk(id);
    if (!findStory) {
      res.status(404).send("the story was not founded");
    } else {
      const deleteStory = await findStory.destroy();
      res.status(200).send({
        message: `The story with the id ${id} was destroyed`,
        deleteStory: deleteStory,
      });
    }
  } catch (e) {
    console.log(e);
  }
  next();
});

// create a new story:
//http -v POST :4000/stories/4 name=JohannTeste content=NiceNewContent imageUrl=GoodPicture

router.post("/:spaceId", authMiddleware, async (req, res, next) => {
  try {
    // HERE WE GET OUT THE ID OF THE USER THAT MADE THE TOKEN
    const logged_in_user = req.user.id;

    console.log("THIS IS THE LOGGED_IN_USER", logged_in_user);
    const user = await User.findByPk(logged_in_user);

    if (!user) {
      res.status(404).send("The user was not found");
    } else {
      res.status(200).send({ message: "authorized", user: user });
      const { name, content, imageUrl } = req.body;
      const params = req.params;
      const spaceId = parseInt(req.params.spaceId);
      console.log("my id", spaceId);
      if (!name) {
        res.status(404).send("Need to provided a name");
      }
      if (!content) {
        res.status(404).send("Need to provided a content");
      }
      if (!imageUrl) {
        res.status(404).send("Need to provided a imageUrl");
      }
      const checkSpaceId = await Story.findByPk(spaceId);
      if (!checkSpaceId) {
        res.status(404).send("This space id do not belong a valid story");
      }
      const createNewStory = await Story.create({
        name,
        content,
        imageUrl,
        spaceId,
      });

      if (!createNewStory) {
        res.status(404).send("Something get wrong");
      } else {
        res.status(200).send({
          message: `The new story with the name ${name}, content ${content} and imageUrl ${imageUrl} was create`,
          createNewStory: createNewStory,
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
  next();
});

module.exports = router;
