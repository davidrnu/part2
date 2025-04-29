
const Notificaation = ({message}) => {
    if (message === null) return null

    return (
        <div className="msg" >
            {message}
        </div>
    )
}


export default Notificaation