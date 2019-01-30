import React from 'react';
import { askForPermissioToReceiveNotifications } from '../../push-notification';

const HelloWorld = () => (
  <div>
    <button onClick={askForPermissioToReceiveNotifications} >
      Click Here
   	</button>
   	<p>Hello World</p>
  </div>
);

export default HelloWorld;
