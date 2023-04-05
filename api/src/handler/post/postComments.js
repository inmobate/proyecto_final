const { Comment } = require("../../db");

const createReview = async (req, res) => {

  const { content, rating, idProperty , idUser  } = req.body

  try {
    if (!content && !idUser && !idProperty && !rating) throw new Error("un nuevo post debe recibir: content, id_user y id_property");

      await Comment.create(
        {
          rating:rating,
          content: content,
          property_id: idProperty,
          user_id: idUser
        });
        
    res.status(201).send("Thanks for your comment");
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = createReview;
