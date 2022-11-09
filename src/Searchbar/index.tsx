import React, { useState } from 'react';
import { Input } from 'reactstrap';
import {Id} from '@makechtec/randomkey';

export const Searchbar = ({ onChange = () => {}, onSubmit = () => {}, iconClass="simple-icon-magnifier", ...props }: any) => {

    const [text, setText] = useState("");

    const handleKeyPress = (e: any) => {

        if(e.key !== 'Enter') {
            return;
        }

        onSubmit(e, text);
    };

    const handleChange = (e: any) => {
        setText(text);
        onChange(e, text);
    };

    return(
        <div className="search">
            <Input
                name="searchbar"
                id={"searchbar_" + Id.generate()}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                value={text}
                {...props} />
            <span
                className="search-icon"
                onClick={onSubmit}
            >
                <i className={iconClass} />
            </span>
        </div>
    );
};

// const search = () => {
//     history.push(`${searchPath}?key=${searchKeyword}`);
//     setSearchKeyword('');
//   };