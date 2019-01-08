import React, {Component} from 'react';
import './App.css';
import MyEditor from './MyEditor'
import {convertToRaw} from "draft-js";

class App extends Component {

    saveState = () => {
        console.log("save state was called")
        // localStorage.setItem('mydata', JSON.stringify(convertToRaw(editorState.getCurrentContent())));
    };

    render() {
        const texts = [
            "1. Virtual Machine Concepts\n",
            "There are currently a number of viewpoints suggesting what a virtual machine is, how it ought to be constructed, and what hardware and operating system implications result [1, 6, 7, 9, 12].",
            "This papar examines computer architectures of third-generation-like machines and demonstrates a simple condition which may be tested to determine whether an architecture can support a virtual machine. \n",
            "This condition may also be employed in machine design. \n",
            "In the following, we specify intuitively what is meant by the above, then develop a more exact model of third-generation-like machines, and finally state and prove a sufficient condition for such a system to be virtualizable. \n"
        ];

        return (
            texts.map((t, index) => {
                return <div key={index} className="Container">
                    <div>{index + 1}</div>
                    <MyEditor className="MyEditor" text={t} lang_type="en" editable={false}/>
                    <MyEditor className="MyEditor" text={t} lang_type="jp" editable={true} onSave={this.saveState}/>
                </div>
            })

        );
    }
}

export default App;
