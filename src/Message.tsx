
function Message() {
    const name = "Elliot"
    if (name)
        return <div>Hello {name}</div>;
    return <div>Hey, stranger</div>;
}

export default Message;