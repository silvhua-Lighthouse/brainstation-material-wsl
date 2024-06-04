const CardForm = () => {
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(`Title: ${event.target.title.value}\nContent: ${event.target.content.value}`);
    }
    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="title">Title</label>
            <input name="title" id="title"/>
            <label htmlFor="content">Content</label>
            <input name="content" id="content"/>
            <button>Submit</button>
        </form>
    )
}

export default CardForm