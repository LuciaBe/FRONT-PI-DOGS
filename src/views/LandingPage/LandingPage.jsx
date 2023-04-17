import style from './LandingPage.module.css';
import {Link} from 'react-router-dom';


const Landing = () => {

    const dog1 = 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80'
    const dog2 ='https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80'
    const dog3 ='https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=394&q=80'
    const dog4 = 'https://images.unsplash.com/photo-1629740067905-bd3f515aa739?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80'
    const dog5 = 'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'
    const dog6 ='https://images.pexels.com/photos/4588435/pexels-photo-4588435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    return(
        <div>
           
            <div>
             <h1 className={style.tittle}> DOG BREEDS </h1>
            </div>
            <Link  to='/home'>
            <div className={style.imageContainer}>
                <img src={dog1}></img>       
                <img src={dog5}></img>
                <img src={dog3}></img>
                <img src={dog4}></img>          
                <img src={dog6}></img>       
                <img src={dog5}></img>      

            </div>
            </Link>
           
       
        </div>
        
    )
}

export default Landing;