import './Button.css';

function Button ({ href, variant = 'solid', children}){
    return (
        <a href={href}
            className={`btn btn-${variant}`}
            onTouchStart={() => {}}
            >
            {children}
            </a>
    );
}
 export default Button;