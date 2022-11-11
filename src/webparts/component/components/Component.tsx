import * as React from 'react';
// import styles from './Component.module.scss';
import { IComponentProps } from './IComponentProps';
import LoginForm from './components';
// import TextEditor from './components/EditPopUp/EditpopUp';
import Popofunctionlity from './Popofunctionlity';
import  PopupGfg  from './TextEditor';


export default class Component extends React.Component<IComponentProps, {}> {
  public render(): React.ReactElement<IComponentProps> {

    return (
      <div>
        <div><h1>Component Portfolio <PopupGfg/></h1>
       
        </div>
        {/* <LoginForm/> */}
        
        <Popofunctionlity/>
      </div>
    );
  }
}
