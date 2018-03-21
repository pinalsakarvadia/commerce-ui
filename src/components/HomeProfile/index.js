import React from 'react';

import s from './style';

const HomeProfile = (props) =>
	<s.homeProfile>
		<s.profileImg>	
			<img src="/utils/male.png" alt="Pinal Sakarvadia" title="Pinal Sakarvadia" />
		</s.profileImg>
		<s.profileName>Pinal Sakarvadia</s.profileName>
		<s.profileInfo>Joining Date : 2018-01-01</s.profileInfo>
		<s.profileInfo>Gender : Male</s.profileInfo>
	</s.homeProfile>;

export default HomeProfile;