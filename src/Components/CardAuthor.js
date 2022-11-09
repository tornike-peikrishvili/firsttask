import authorCSS from './CardAuthor.module.css';
import AuthorImg from './images/image-avatar.png'

function CardAuthor() {
    return (
        <div className={authorCSS.container}>
            <img className={authorCSS.authorImg} src={AuthorImg}/>
            <p className={authorCSS.authorTxt}>Creation of <a>Jules Wyvern</a></p>
        </div>
    );
}

export default CardAuthor;