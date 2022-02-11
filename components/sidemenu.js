export const PiSideMenu = (props) => {
    return(
        <aside className={props?.class}>
            <nav>
                {props?.children}
            </nav>
        </aside>
    )
}