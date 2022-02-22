const { Router } = require("express");
const router = new Router();
const authMiddleware = require("../auth/middleware");
const Space = require("../models/").space;
const Story = require("../models/").story;
const User = require("../models/").user;

//Get all spaces
//http -v GET :4000/spaces

router.get("/", async (req, res, next) => {
  try {
    const getAllSpaces = await Space.findAll();

    res.status(200).send({
      message: "This is all the Spaces",
      getAllSpaces: getAllSpaces,
    });
  } catch (e) {
    console.log(e);
  }
  next(e);
});

//Get space by id including stories
//http -v GET :4000/spaces/1

router.get("/:id", async (req, res, next) => {
  try {
    const params = req.params;
    const id = parseInt(req.params.id);
    console.log("my id", id);
    const getSpaceByIdStoriesInclude = await Space.findByPk(id, {
      include: { model: Story },
    });
    if (!getSpaceByIdStoriesInclude) {
      res.status(404).send(`The id provided ${id}, was not founded`);
    } else {
      res.status(200).send({
        message: `This is the space correspondent a id ${id}, stories include`,
        getSpaceByIdStoriesInclude: getSpaceByIdStoriesInclude,
      });
    }
  } catch (e) {
    console.log(e);
  }
  next();
});

//update the space
//http PUT :4000/spaces/3 title=GeTheBest

router.put("/:spaceId", authMiddleware, async (req, res, next) => {
  try {
    // HERE WE GET OUT THE ID OF THE USER THAT MADE THE TOKEN
    const logged_in_user = req.user.id;

    console.log("THIS IS THE LOGGED_IN_USER", logged_in_user);
    const user = await User.findByPk(logged_in_user);

    if (!user) {
      res.status(404).send("The user was not found");
    } else {
      res.status(200).send({ message: "authorized", user: user });

      const params = req.params;
      const spaceId = parseInt(req.params.spaceId);
      console.log("This is my spaceId", spaceId);
      const { title, description, backgroundColor, color } = req.body;
      console.log("spaces.js: req.body:", req.body);

      const checkSpaceThatWillBeUpdate = await Space.findByPk(spaceId);
      if (!checkSpaceThatWillBeUpdate) {
        res.status(404).send("this spaceId was not found!");
      }
      const updateTheSpace = await checkSpaceThatWillBeUpdate.update({
        title,
        description,
        backgroundColor,
        color,
      });
      if (!updateTheSpace) {
        res.status(404).send("Something get wrong");
      } else {
        res.status(200).send({
          message: `The SPACE of the user ${spaceId} with the title ${title},
          description ${description}, backgroundColor ${backgroundColor},
          and color ${color}  was UPDATE`,
          updateTheSpace: updateTheSpace,
        });
      }
    }
  } catch (e) {
    next();
  }
});

module.exports = router;
