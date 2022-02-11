export const PiTable = (props) => {
    return(
        <table>{props?.children}</table>
    )
}

export const PiTableHeader = (props) => {
    return(
        <thead>{props?.children}</thead>
    )
}

export const PiTableBody = (props) => {
    return(
        <tbody>{props?.children}</tbody>
    )
}

export const PiTableFooter = (props) => {
    return(
        <tfoot>{props?.children}</tfoot>
    )
}

export const PiTableRow = (props) => {
    return(
        <tr>{props?.children}</tr>
    )
}

export const PiTableHead = (props) => {
    return(
        <th scope={props?.scope}>{props?.children}</th>
    )
}

export const PiTableData = (props) => {
    return(
        <td>{props?.children}</td>
    )
}