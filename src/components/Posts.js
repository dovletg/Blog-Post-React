
function Posts(props) {
  return <section>
  {
    props.blogPosts.map((globe) => {
      return (<article>
          <h2>{globe.title}</h2>
          <p>{globe.body}</p>
        </article>)
    })
  }
</section>
}

export default Posts;