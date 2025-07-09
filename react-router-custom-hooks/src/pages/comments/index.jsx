import UseFetch from "../../hooks/use-fetch";
import "./styles.css";

const Comment = () => {
  const resultFromUseFetch = UseFetch("https://dummyjson.com/comments");
  const { data, loading, error } = resultFromUseFetch;

  if (loading) {
    return (
      <div className="loading-container">
        <h2>Loading comments...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error: {error}</h2>
      </div>
    );
  }

  return (
    <div className="comments-container">
      <h1 className="comments-title">Community Comments</h1>
      {data?.comments?.length > 0 ? (
        <div className="comments-grid">
          {data.comments.map((comment) => (
            <div key={comment.id} className="comment-card">
              <div className="comment-header">
                <div className="user-avatar">
                  <span className="avatar-text">
                    {comment.user?.username?.charAt(0).toUpperCase() || "U"}
                  </span>
                </div>
                <div className="user-info">
                  <h3 className="username">
                    {comment.user?.username || "Anonymous"}
                  </h3>
                  <span className="post-title">
                    {comment.postId
                      ? `Post #${comment.postId}`
                      : "General Comment"}
                  </span>
                </div>
              </div>
              <div className="comment-content">
                <p className="comment-body">{comment.body}</p>
              </div>
              <div className="comment-footer">
                <div className="comment-meta">
                  <span className="comment-id">#{comment.id}</span>
                  <span className="comment-reactions">
                    👍 {comment.reactions || 0}
                  </span>
                </div>
                <div className="comment-tags">
                  <span className="comment-tag">Comment</span>
                  {comment.user?.id && (
                    <span className="user-tag">User #{comment.user.id}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-comments">
          <h2>No comments found</h2>
        </div>
      )}
    </div>
  );
};

export default Comment;
