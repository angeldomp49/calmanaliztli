
[development](/documentation/development.md)

## Links ### 

## Usage ## 

    <SimpleLink
        to={"/products"}
        iconClass={"fa fa-search"}
        isOpenNewTab > // to open in a new tab.
        see all products</SimpleLink> 

It contains three attributes:

to: the target link address.
iconClass: the i class.
isOpenNewTab: it's a boolean to open in a new tab.

This component use React Router Dom NavLink internally, the it must be used inside it.

