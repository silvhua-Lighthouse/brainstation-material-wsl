const CardForm = () => {
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(`Title: ${event.target.parentNode.title.value}\nContent: ${event.target.parentNode.content.value}`);
    }
    return (
        <form>
            <label htmlFor="title">Title</label>
            <input name="title" id="title"/>
            <label htmlFor="content">Content</label>
            <input name="content" id="content"/>
            <button onClick={submitHandler}>Submit</button>
        </form>
    )
}

export default CardForm