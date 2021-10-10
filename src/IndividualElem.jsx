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