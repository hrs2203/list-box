import { useState } from "react";
import { downloadFile } from "./save_file";
import {
    TextElement,
    CounterElement,
    DropdownElement,
    DateElement,
    CheckElement,
    TextEditor,
    DropdownEditor,
    CheckEditor
} from "./IndividualElem.jsx";


const ElemCreator = ({ elem, del_event, edit_event }) => {
    const [sw, setSw] = useState(true);

    const split = {
        "text": <TextElement title={elem["title"]} placeholder={elem["placeholder"]} id={elem["id"]} />,
        "counter": <CounterElement title={elem["title"]} placeholder={elem["placeholder"]} id={elem["id"]} />,
        "drop": <DropdownElement id={elem["id"]} title={elem["title"]} choices={elem["options"]} />,
        "date": <DateElement title={elem["title"]} id={elem["id"]} />,
        "check": <CheckElement id={elem["id"]} title={elem["title"]} value={elem["value"]} />,
    };

    const edit_table = {
        "text": <TextEditor flip={setSw} save_action={edit_event} oldval={elem} />,
        "counter": <TextEditor flip={setSw} save_action={edit_event} oldval={elem} />,
        "drop": <DropdownEditor flip={setSw} save_action={edit_event} oldval={elem} />,
        "date": <TextEditor flip={setSw} save_action={edit_event} oldval={elem} />,
        "check": <CheckEditor flip={setSw} save_action={edit_event} oldval={elem} />,
    };

    return (
        <div className="row">
            <div className="col-8">
                {sw ? split[elem["type"]] : edit_table[elem["type"]]}
            </div>
            <div className="col-4">
                <button className="row btn btn-primary m-2"
                    onClick={() => setSw(false)} >
                    edit
                </button>
                <button className="row btn btn-danger m-2"
                    onClick={() => del_event(elem["id"])} >
                    delete
                </button>
            </div>
        </div>
    )

}




export const HomePage = () => {
    const [elem_list, setElem_list] = useState([]);
    const [count, setCount] = useState(0);

    const add_elem = (typ) => {
        setCount(count + 1);
        setElem_list([...elem_list, {
            "id": count,
            "type": typ,
            "title": "title",
            "placeholder": "placeholder",
            "options": [],
            "value": "value",
        }])
    }

    const elem_removal = (key) => {
        setElem_list(elem_list.filter(item => (item["id"] !== key)))
    }

    const elem_edit = (new_val) => {
        setElem_list(elem_list.map(item => item["id"] === new_val["id"] ? new_val : item));
    }

    const reset = () => {
        setCount(0)
        setElem_list([])
    }

    return (
        <div className="row">
            <div className="col-8 border p-3">
                {elem_list.map(item => <ElemCreator elem={item} del_event={elem_removal} edit_event={elem_edit} />)}
                <br /><br />
                {
                    elem_list.length > 0 ?
                        <div>
                            <hr />
                            <button className="btn btn-primary m-2"
                                onClick={() => downloadFile(elem_list)} >
                                Save Data
                            </button>
                            <button className="btn btn-primary m-2"
                                onClick={reset} >
                                reset
                            </button>
                        </div> : <div />
                }
            </div>
            <div className="col-4 border p-3">
                <div>

                    <div className="card m-2">
                        <TextElement id="Text_entry" title={"Text Field"} placeholder={"enter text"} />
                        <button
                            className="btn btn-success"
                            onClick={() => add_elem("text")}>
                            add
                        </button>
                    </div>
                    <div className="card m-2">
                        <CounterElement id="counter_entry" title={"Counter Field"} placeholder={"enter value"} />
                        <button
                            className="btn btn-success"
                            onClick={() => add_elem("counter")}>
                            add
                        </button>
                    </div>
                    <div className="card m-2">
                        <DropdownElement id="drop_entry" title={"Dropdown Field"} choices={[1, 2, 3]} />
                        <button
                            className="btn btn-success"
                            onClick={() => add_elem("drop")}>
                            add
                        </button>
                    </div>
                    <div className="card m-2">
                        <DateElement id="Date_entry" title={"Date Field"} />
                        <button
                            className="btn btn-success"
                            onClick={() => add_elem("date")}>
                            add
                        </button>
                    </div>
                    <div className="card m-2">
                        <CheckElement id="Text_entry" title={"check Field"} value={"123"} />
                        <button
                            className="btn btn-success"
                            onClick={() => add_elem("check")}>
                            add
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

