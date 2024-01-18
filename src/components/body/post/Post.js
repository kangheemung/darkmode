
function Post({post,setPost,addPost}) {

    const handleSubmit =(e)=>{
        e.preventDefault();
        if (!post)return;
        addPost(post);
        setPost('');
    };

  return (
    <form onSubmit ={handleSubmit}>
      <input
        type='text'
        value={post}
        onChange={(e) => setPost(e.target.value)}
        placeholder="何か書いてください.." />
      <button type='submit'>投稿</button>
      postだよ
    </form>
  );
}

export default Post
