const { Comment, User, Publication } = require("../../db");

const newPostComment = async (content, id_user, id_publication) => {
  try {
    if (!content || !id_user || !id_publication) throw new Error("un nuevo post debe recibir: content, id_user y id_publication")

    const comment = await Comment.create(
      {
        content,
        publicId: id_publication,
        autor_comiId: id_user
      });

      const findPublication = await Publication.findOne({where: {id: id_publication}});
      
      const findUser = await User.findOne({where: {id: id_user}});

      findUser.addComment(comment);
      findPublication.addComment(comment);

    return "Thanks for your comment";
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = newPostComment;
