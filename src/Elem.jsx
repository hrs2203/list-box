import { React } from "react";
import { useState } from "react";
import { downloadFile } from "./save_file";

const ElemCreator = ({ id, text, del_event }) => {
    return (
        <div>
            <div>{text} {id}</div>
            <button onClick={() => del_event(id)}>Delete Me</button>
            <br /><br />
        </div>
    )
}


export const Elem = () => {
    const [elem_list, setElem_list] = useState([]);
    const [count, setCount] = useState(0);

    const add_elem = (val) => {
        setCount(count + 1);
        setElem_list([...elem_list, { "id": count, "v": val }])
    }

    const elem_removal = (key) => {
        setElem_list(elem_list.filter(item => (item["id"] !== key)))
    }

    return (
        <div className="row pt-3">
            <div className="col">
                {elem_list.map(item => <ElemCreator del_event={elem_removal} id={item["id"]} text={item["v"]} />)}
                <br /><br />
                {elem_list.length > 0 ?
                    <button onClick={() => downloadFile(elem_list)} >Save Data</button> : <div />}
            </div>
            <div className="col">
                <div>
                    <button onClick={() => add_elem("text")}>text</button><br /><br />
                    <button onClick={() => add_elem("option")}>option</button><br /><br />
                    <button onClick={() => add_elem("button")}>button</button><br /><br />
                    <button onClick={() => add_elem("tag")}>tag</button><br /><br />
                    <button onClick={() => add_elem("dropdown")}>dropdown</button><br /><br />
                </div>
            </div>
        </div>
    )
}

