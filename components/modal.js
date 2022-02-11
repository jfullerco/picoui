export const PiModal = (props) => {
    return(
        <dialog open={props?.isOpen}>
            <article>
                {props?.children}
            </article>
        </dialog>
    )
}

export const PiModalHeader = (props) => {
    return(
        <header>
            <a onClick={props?.toggle} aria-label='close' className='close'></a>
            {props?.children}
        </header>
    )
}