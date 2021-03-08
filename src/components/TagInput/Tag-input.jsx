
import React from "react";
import Input from '@material-ui/core/Input';
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';
import './tag.css';
const TagsInput = (props) => {
    const [tags, setTags] = React.useState([]);
        const addTags = event => {
        if (event.key === "Enter" && event.target.value !== "") {
            setTags([...tags, event.target.value]);
            // ! call trigger selected Tag from parent
            props.selectedTags([...tags, event.target.value]);
            event.target.value = "";
        }
    };



    return (
        <div className="tags-input">
            {/* Render for all Tags */}
            <Row >
                {tags.map((tag, index) => (
                        <Button key={index} as="input" type="button" value={tag} className="tag text-center"/>
                ))}
            </Row >


            {/* Input Tag */}

            <Input className="searchBar"
			    type="text"
                  // ! trigger save Tag
                onKeyUp={event => addTags(event)}
                placeholder="add tags here"
			    inputProps={{ 'aria-label': 'description' }} />
        </div>
    );
};
export default TagsInput;