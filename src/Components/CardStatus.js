import statusCSS from './CardStatus.module.css';
import ethLogo from './images/icon-ethereum.svg';
import timeLogo from './images/icon-clock.svg';

function CardStatus() {
    return (
        <div className={statusCSS.container}>
            <div className={statusCSS.price}>
                <img className={statusCSS.eth} src={ethLogo}/>
                <p className={statusCSS.priceTxt}>0.041 ETH</p>
            </div>
            <div className={statusCSS.remTime}>
                <img className={statusCSS.time} src={timeLogo}/>
                <p className={statusCSS.timeTxt}>3 days left</p>
            </div>
        </div>
    );
}

export default CardStatus;