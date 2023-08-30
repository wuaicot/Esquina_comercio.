import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import lisandroPerfil from '../../images/lisandroPerfil.jpg';
import lucasPerfil from '../../images/lucasPerfil.jpg';
import francoPerfil from '../../images/francoPerfil.jpg';
import diegoPerfil from '../../images/diegoPerfil.jpg';
import cesarPerfil from '../../images/cesarPerfil.jpg';
import davidPerfil from '../../images/davidPerfil.jpg';
//import johanPerfil from '../../images/johanPerfil.jpg';
import naycolPerfil from '../../images/naycolPerfil.jpg';


//"https://www.unjobnet.org/assets/images/users/blank-profile.png"
const About = () => {
    return (
        <div style={{ paddingBottom: '20px', display: 'flex', flexWrap : 'wrap', justifyContent: 'center'}}>
            <p style={{ display: 'flex', justifyContent: 'space-around', fontSize: '40px' }}>Members</p>
            <div style={ {display:'flex', flexDirection:'row', marginBlock:'5em',marginInline:'6em' }}>
                
                
               
                
                <Card style={{ width: '20rem',marginInlineEnd :'2em' }}>
                    <Card.Img variant="top" src={naycolPerfil} />
                    <Card.Body>
                        <Card.Title><h2 style={{ minHeight: '80px' }}>Naycol Rodolfo Linares Villasmil</h2></Card.Title>
                        <Card.Text>
                            <p style={{ fontSize: '26px' }}>Contactos: </p>
                            <a href='mailto:wuaicot8@gmail.com'><img src='https://cdn.icon-icons.com/icons2/652/PNG/512/gmail_icon-icons.com_59877.png' width={'50px'}></img></a>
                            <a href='https://github.com/wuaicot/'><img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' width={'50px'}></img></a>
                            <a href='https://www.linkedin.com/in/wuaicot'><img src='https://cdn-icons-png.flaticon.com/512/1384/1384014.png' width={'50px'}></img></a>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

        </div>
    )
}

export default About