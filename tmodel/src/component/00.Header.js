import { Link } from 'react-router-dom'


// style
const body       = {backgroundColor : '#282c34'               }
const Tmodel = {backgroundColor : 'green'  , color: 'white'}
/* const Greenitest = {backgroundColor : 'blue'  , color: 'white'}
const Makecb = {backgroundColor : 'violet'  , color: 'white'} */

function Header() {
    return (
        <>
        <body style={body}>
            <Link to='/' style={Tmodel}> Tmodel </Link>
        </body>

        </>
    )
}
export default Header