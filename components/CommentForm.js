export default function CommentForm({ onSubmitComment }) {
  return (
    <form onSubmit={onSubmitComment}>
      <h2>Add new comments</h2>
      <label htmlFor="commentInput">
        Add a new comment
        <input type="text" id="commentInput" name="commentInput" />
      </label>
      <button type="submit">Add comment</button>
    </form>
  );
}
