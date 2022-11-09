import React, { useState, useRef, useEffect } from 'react';

export const FullScreenButton = () => {

    const [isFullScreen, setIsFullScreen] = useState(false);
    const icon = useRef(document.createElement("div"));

    const toggleFullScreen = e => {
        setIsFullScreen(!isFullScreen);
    };

    useEffect( () => {
        icon.current.className = isFullScreen ? "simple-icon-size-actual d-block" : "simple-icon-size-fullscreen d-block";
    });

    return(
        <button
            className="header-icon btn btn-empty d-none d-sm-inline-block"
            type="button"
            id="fullScreenButton"
            onClick={toggleFullScreen}
        >
            <i ref={icon} />
        </button>
    );

};

// const toggleFullScreen = () => {
// 	const isFS = isInFullScreenFn();

// 	const docElm = document.documentElement;
// 	if (!isFS) {
// 		if (docElm.requestFullscreen) {
// 			docElm.requestFullscreen();
// 		} else if (docElm.mozRequestFullScreen) {
// 			docElm.mozRequestFullScreen();
// 		} else if (docElm.webkitRequestFullScreen) {
// 			docElm.webkitRequestFullScreen();
// 		} else if (docElm.msRequestFullscreen) {
// 			docElm.msRequestFullscreen();
// 		}
// 	} else if (document.exitFullscreen) {
// 		document.exitFullscreen();
// 	} else if (document.webkitExitFullscreen) {
// 		document.webkitExitFullscreen();
// 	} else if (document.mozCancelFullScreen) {
// 		document.mozCancelFullScreen();
// 	} else if (document.msExitFullscreen) {
// 		document.msExitFullscreen();
// 	}
// 	setIsInFullScreen(!isFS);
// };

// const isInFullScreenFn = () => 
// 		(document.fullscreenElement && document.fullscreenElement !== null) ||
// 		(document.webkitFullscreenElement &&
// 			document.webkitFullscreenElement !== null) ||
// 		(document.mozFullScreenElement &&
// 			document.mozFullScreenElement !== null) ||
// 		(document.msFullscreenElement && document.msFullscreenElement !== null)
