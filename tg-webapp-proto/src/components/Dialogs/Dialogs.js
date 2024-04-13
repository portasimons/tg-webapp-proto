import s from './Dialogs.module.css'
import { NavLink } from "react-router-dom"


function DialogItem(props) {
    let path = "/dialogs/" + props.id

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

function Message(props) {
    return <div className={s.message}>{props.message}</div>
}

function Dialogs(props) {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Antokha" id="1"/>
                <DialogItem name="Valera" id="2"/>
                <DialogItem name="Vladik" id="3"/>
                <DialogItem name="Sereja" id="4"/>
            </div>
            <div className={s.messages}>
                <Message message="Hello there"/>
                <Message message="Ayoooo"/>
                <Message message="That's cool"/>
            </div>
        </div>
    )
}

export default Dialogs
