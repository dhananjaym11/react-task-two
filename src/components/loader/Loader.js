import './Loader.css';

export default function Loader(props) {
    return (
        <div className="spinner" style={{display: props.show ? 'block': 'none'}}>
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
        </div>
    );
}