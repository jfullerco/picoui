export const PiContainer = (props) => {
    return(
        <main className='container'>
            {props?.children}
        </main>
    )
}

export const PiGrid = (props) => {
    return(
        <div className='grid' id={props?.id}>
            {props?.children}
        </div>
    )
}

export const PiFigure = (props) => {
    return(
        <figure>
            {props?.children}
        </figure>
    )
}

export const PiTable = (props) => {
    return(
        <table>
            {props?.children}
        </table>
    )
}

export const PiButton = (props) => {
    return(
        <button 
            onClick={props?.click}
            role={props?.role}
            className={props?.loading === true ? 'secondary' : props?.class}
            aria-busy={props?.loading === true ? true : false}
        >
            {props?.label || props?.children}
        </button>
    )
}

export const PiCard = (props) => {
    return(
        <article className={props?.class}>
            {props?.children}
        </article>
    )
}

export const PiHeader = (props) => {
    return(
        <header className={props?.class}>
            {props?.children}
        </header>
    )
}

export const PiFooter = (props) => {
    return(
        <footer>
            {props?.children}
        </footer>
    )
}

export const PiNav = (props) => {
    return(
        <nav className={props?.class} id={props?.id} data-theme={props?.theme}>
            {props?.children}
        </nav>
    )
}

export const PiSection = (props) => {
    return(
        <section className={props?.class}>
            {props?.children}
        </section>
    )
}