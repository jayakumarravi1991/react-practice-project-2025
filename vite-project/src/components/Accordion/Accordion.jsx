import { accordionContent } from "../../data.jsx";
import '../Accordion/Accordion.css';
export default function Accordion({...props})
{
    function accordionButtonClickHandler(accordionID, event)
    {
        const accordionBox = document.getElementById(accordionID);
        console.log(event);
        accordionBox.classList.toggle('show');
        event.target.classList.toggle('collapsed');
        
    }
    return(
        <div className="accordion" {...props}>
            {accordionContent.map((item, index) => (
                <div className="accordion__item">
                    <h2 className="accordion__header">
                        <button className="accordion__button collapsed" type="button" onClick={(event) => accordionButtonClickHandler(`accordion${index}`, event)} >{item.title}</button>                    
                    </h2>
                    <div id={`accordion${index}`} className="accordion__collapse collapse">
                        <div className="accordion__body">
                            <p className="accordion__description">{item.description}</p>                    
                        </div>
                    </div>                
                </div>
            ))}
        </div>
    );
}