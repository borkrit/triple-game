import s from './Container.module.css';

const  Container = ({children, className}) => {
    return (
        <div className={s.root+' '+className}>
            {children}
        </div>
    )
}

export default Container;
