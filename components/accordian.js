import {forwardRef} from 'react'
export const PiAccordian = forwardRef((props, ref) => {
    return(
        <details ref={ref} open={props?.isOpen}>
            {props?.children}
        </details>
    )
})

export const PiSummary = (props) => {
    return(
        <summary onClick={props?.click}>
            {props?.children}
        </summary>
    )
}