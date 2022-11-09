import contentCSS from './CardContent.module.css';
import logo from './images/image-equilibrium.jpg';


function CardContent() {
    return (
        <div className='contentContainer'>
            <img src={logo} className={contentCSS.img}/>
            <div className={contentCSS.imgOverlay}></div>
            <h1 className={contentCSS.cardTitle}>Equilibrium #3429</h1>
            <p className={contentCSS.cardInfo}>Our Equilibrium collection promotes balance and calm.</p>
        </div>
    );
}

export default CardContent; 