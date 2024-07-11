/* eslint-disable react/prop-types */
import { RiDraggable } from "react-icons/ri";

const Item = (props) => {
    return (
        <div className="item">
            <div className="drag">
                <RiDraggable className="drag-icon" />
                <span>{props.index}.</span>
            </div>
        </div>
    )
}


export default Item;