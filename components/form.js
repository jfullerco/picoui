export const PiInput = (props) => {
    return(
        <label htmlFor={props?.name}>
            {props?.label}
            <input 
                type={props?.type}
                className={props?.class}
                id={props?.name}
                name={props?.name}
                placeholder={props?.placeholder}
                onChange={props?.change}
                onBlur={props?.blur}
                required={props?.required}
                disabled={props?.disabled}
            />
        </label>
    )
}

export const PiSelect = (props) => {

    const checkIfSelected = (opt) => {
        return props?.value === opt ? true : false
    }

    return(
        <label htmlFor={props?.name}>
            {props?.label}
            <select
                name={props?.name}
                id={props?.name}
                onChange={props?.change}
                defaultValue={props?.value}
            >
                {props?.options ? props?.options?.map(opt =>
                    <option 
                        value={opt?.id} 
                        key={opt?.id}
                    >
                        {opt.Name}
                    </option>
                ) :
                props?.children}
            </select>
        </label>
    )
}
