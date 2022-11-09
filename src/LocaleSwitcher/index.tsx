import React from 'react';
import { DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown } from 'reactstrap';
import Id from '@makechtec/randomkey';

export const LocaleSwitcher = ({defaultLocale="EN", localeOptions=[], onChangeLocale= () => {}, ...props}: any) => 

    <div className="d-inline-block" {...props} >
        <UncontrolledDropdown 
            className="ml-2"
        >
            <DropdownToggle
                caret
                color="light"
                size="sm"
                className="language-button"
            >
                <span className="name">{defaultLocale.toUpperCase()}</span>
            </DropdownToggle>
            <DropdownMenu 
                className="mt-3" 
                end
            >
            {
                localeOptions.map( 
                    ({localeOption, index}: any) => 
                    <DropdownItem
                        onClick={ (e) => onChangeLocale(e, localeOption, index) }
                        key={Id.generate()}
                    >
                        {localeOption}
                    </DropdownItem>
                    )
            }
            </DropdownMenu>
        </UncontrolledDropdown>
    </div>