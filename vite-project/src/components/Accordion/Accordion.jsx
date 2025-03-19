import { useState } from "react";
import '../Accordion/Accordion.css';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';

export function Accordion({accordionContent, ...props})
{
    const [activeAccordion, setActiveAccordion] = useState(null);
    function accordionButtonClickHandler(accordionItemID)
    {
        setActiveAccordion((previousActiveAccordion) => previousActiveAccordion === accordionItemID ? null : accordionItemID )
    }
    return(
        <div className="accordion" {...props}>
            {accordionContent.map((item) => (
                <div className="accordion__item" key={item.id}>
                    <h2 className="accordion__header">
                        <button className={`accordion__button ${activeAccordion === item.id ? '' : 'collapsed'}`} type="button"  aria-expanded={activeAccordion === item.id ? 'true' : 'false'} onClick={() => accordionButtonClickHandler(item.id)} >{item.title}</button>                    
                    </h2>
                    {(activeAccordion === item.id) && (<div id={item.id} className={`accordion__collapse ${activeAccordion === item.id ? ' show': 'collapse'}`}>
                        <div className="accordion__body">
                            <p className="accordion__description">{parse(item.description)}</p>                    
                        </div>
                    </div>)}  
                </div>
            ))}
        </div>
    );
}

Accordion.propTypes = {
    content: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

export default Accordion;