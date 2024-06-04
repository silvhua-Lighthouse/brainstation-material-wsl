const CardForm = (props) => {
    
    const submitHandler = (event) => {
        event.preventDefault();
        const newTitle = event.target.title.value;
        const newContent = event.target.content.value;
        props.addCardHandler(newContent, newTitle);
        console.log(`Title: ${newTitle}\nContent: ${newContent}`);
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