import React, { useState } from 'react';
import {default as RCSwitch} from 'rc-switch';
import 'rc-switch/assets/index.css';
import { Tooltip } from 'reactstrap';
import {Id} from '@makechtec/randomkey';

export const Switch = ({ defaultChecked=false, tooltipTitle="", onChange= () => {} }: any) => {

	const switchId = "switch" + Id.generate();
	const [switchChecked, setSwitchChecked] = useState(defaultChecked);
	const [tooltipOpen, setTooltipOpen] = useState(false);

	const changeMode = (e) => {
		setSwitchChecked(!switchChecked);
		onChange(e, switchChecked);
	};

	return (
		<div className="d-none d-md-inline-block align-middle mr-3">
			<RCSwitch
				id={switchId}
				className="custom-switch custom-switch-primary custom-switch-small"
				checked={switchChecked}
				onChange={changeMode}
			/>
			<Tooltip
				placement="left"
				isOpen={tooltipOpen}
				target={switchId}
				toggle={() => setTooltipOpen(!tooltipOpen)}
			>
				{tooltipTitle}
			</Tooltip>
		</div>
	);
};
