import { Link } from 'react-router-dom'


// style
const body       = {backgroundColor : '#282c34'               }
const Greeni = {backgroundColor : 'green'  , color: 'white'}
const Greenitest = {backgroundColor : 'blue'  , color: 'white'}
const Makecb = {backgroundColor : 'violet'  , color: 'white'}

function Header() {
    return (
        <>
        <body style={body}>
            <Link to='/' style={Greeni}> Greeni Page </Link>
            <Link to='/test' style={Greenitest}> Greenitest Page </Link>
            {/* <Link to='/Makecb' style={Makecb}> Makecb Page </Link> */}
        </body>

        </>
    )
}
export default Header