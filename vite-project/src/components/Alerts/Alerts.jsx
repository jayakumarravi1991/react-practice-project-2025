import "./Alerts.css";

export default function Alerts({children, alertType})
{
    const classNameLiteral = `alert ${alertType}`
    return(
        <div className={classNameLiteral} role="alert">
            {children}
        </div>
    );
}