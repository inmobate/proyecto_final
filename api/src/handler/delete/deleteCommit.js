const { Comment } = require("../../db");

const CommentDelete = async (id) => {
  try {
    const deleteComment = await Comment.destroy({
      where: {
        id: id,
      },
    });
    return "Comment deleted";
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = CommentDelete;
