import { useState } from "react";


export const TextElement = ({ title, placeholder, id }) => {
    return (
        <div className="card m-2">
            <div className="card-body">
                <div class="form-group">
                    <label for={id || "def" || "def"}>{title || "sample Title"}</label>
                    <input type="text" class="form-control" id={id || "def"} placeholder={placeholder || "Enter Text"} />
                </div>
            </div>
        </div>
    )
}

export const CounterElement = ({ title, placeholder, id }) => {
    return (
        <div className="card m-2">
            <div className="card-body">
                <div class="form-group">
                    <label for={id || "def"}>{title || "sample text"}</label>
                    <input type="number" class="form-control" id={id} placeholder={placeholder || 0} />
                </div>
            </div>
        </div>
    )
}

export const DropdownElement = ({ id, title, choices }) => {
    return (
        <div className="card m-2">
            <div className="card-body">
                <div class="form-group">
                    <label for={id || "def"}>{title || "sample text"}</label>
                    <select class="form-control" id={id}>
                        {choices && choices.map(item => <option value={item} >{item}</option>)}
                    </select>
                </div>
            </div>
        </div>
    )
}

export const DateElement = ({ id, title }) => {
    return (
        <div className="card m-2">
            <div className="card-body">
                <div class="form-group">
                    <label for={id || "def"}>{title || "sample text"}</label>
                    <input type="date" class="form-control" id={id} />
                </div>
            </div>
        </div>
    )
}

export const CheckElement = ({ id, title, value }) => {
    return (
        <div className="card m-2">
            <div className="card-body">
                <div class="form-group">
                    <input class="form-check-input" type="checkbox" value={value || "value"} id={id || "def"} />
                    <label class="form-check-label" for={id || "def"}>{title || "sample text"}</label>
                </div>
            </div>
        </div>
    )
}

export const TextEditor = ({ save_action, flip, oldval }) => {

    const [formval, setformval] = useState("default")

    const clickfxn = () => {
        oldval["title"] = formval
        save_action(oldval);
        flip(true)
    }

    return (
        <div className="card m-2">
            <div className="card-body">
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Title</label>
                    <div class="col-sm-8">
                        <input
                            onChange={(ev) => setformval(ev.target.value)}
                            type="text"
                            class="form-control"
                            id="inputtext"
                            placeholder="new title" />
                    </div>
                    <button onClick={clickfxn} className="btn btn-success">Save</button>
                </div>
            </div>
        </div>
    )
}

export const CheckEditor = ({ save_action, flip, oldval }) => {

    const [formval, setformval] = useState(oldval["title"])
    const [checkval, setcheckval] = useState(oldval["value"])

    const clickfxn = () => {
        oldval["title"] = formval;
        oldval["value"] = checkval;
        save_action(oldval);
        flip(true)
    }

    return (
        <div className="card m-2">
            <div className="card-body">
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Title</label>
                    <div class="col-sm-8">
                        <input
                            onChange={(ev) => setformval(ev.target.value)}
                            type="text"
                            class="form-control"
                            id="inputtext"
                            placeholder="new title" />
                    </div>

                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Title</label>
                    <div class="col-sm-8">
                        <input
                            onChange={(ev) => setcheckval(ev.target.value)}
                            type="text"
                            class="form-control"
                            id="inputtext"
                            placeholder="new title" />
                    </div>
                </div>
                <div class="form-group row">
                    <button onClick={clickfxn} className="btn btn-success ml-5">Save</button>
                </div>
            </div>
        </div>
    )
}

export const DropdownEditor = ({ save_action, flip, oldval }) => {

    const [formval, setformval] = useState(oldval["title"])
    const [options, setoptions] = useState(oldval["options"])

    const clickfxn = () => {
        oldval["title"] = formval;
        oldval["options"] = options;
        console.log(options);
        save_action(oldval);
        flip(true);
    }

    return (
        <div className="card m-2">
            <div className="card-body">
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-8">
                        <input
                            onChange={(ev) => setformval(ev.target.value)}
                            type="text"
                            class="form-control"
                            id="inputtext"
                            placeholder="new title" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-8">
                        <input
                            onChange={(ev) => setoptions(ev.target.value.split(","))}
                            type="text"
                            class="form-control"
                            id="inputtext"
                            placeholder="enter option seprated by ',' eg : option1, option2, option3" />
                    </div>
                </div>
                <div class="form-group row">
                    <button onClick={clickfxn} className="btn btn-success ml-5">Save</button>
                </div>
            </div>
        </div>
    )
}