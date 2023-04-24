import "./buttonfield.css"
import Actionbutton from "./ActionButton"

const Buttonfield = ({addButtonTitle, changeButtonTitle, clearButtonTitle}) => {
    return(
        <div className="Buttonfield">
            <Actionbutton actionButtonTitle={addButtonTitle}/>
            <Actionbutton actionButtonTitle={changeButtonTitle}/>
            <Actionbutton actionButtonTitle={clearButtonTitle}/>
        </div>
        
    )
}

export default Buttonfield;