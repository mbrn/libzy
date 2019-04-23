import React from 'react';

export const ConfigContext = React.createContext({});

export const withConfig = (Wrapped) => (props) => (
  <ConfigContext.Consumer>
    {config => <Wrapped config={config} {...props}/>}
  </ConfigContext.Consumer>  
)