const NavArr = [
    'Forside',
    'Produkter',
    'Om os',
    'Ledige stillinger',
    'Kontakt os'
];

const ShowNav = () => {
    return(
        <ul>
            {NavArr.map((value, key) => {
                return(
                    <li key={key}>{value}</li>
                )
            })}
        </ul>
    )
}

export { ShowNav }