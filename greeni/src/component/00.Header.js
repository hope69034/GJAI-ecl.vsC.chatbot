import { Link } from 'react-router-dom'

// style
const body       = {backgroundColor : '#282c34'               }
const Greeni = {backgroundColor : 'green'  , color: 'black'}

function Header() {
    return (
        <>
        <body style={body}>
            <Link to='/' style={Greeni}> Greeni Page </Link>
        </body>

        </>
    )
}
export default Header