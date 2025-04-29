
const Notification = ({message, type}) => {
    if (message === null) return null

    return (
        <div className={type === "ok" ? "msg" : "error"} >
            {message}
        </div>
    )
}


export default Notification