function Message() {
    const name = "Andrew";
    if (name) return <h1>Hello {name}!</h1>;
    else return <h1>Hellow World!</h1>;
}

export default Message;
