import {Component, useState} from "react";
import 'react-quill/dist/quill.snow.css';
import ReactQuill from "react-quill";


export class EditTestimony extends Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            value: ''
        }
    }

    render() {

        return (
            <>
                <div>
                    <h3>Редактирование / добавление</h3>
                    <div>dfff</div>
                    <div className="w-2/4 space-y-8">
                        <div className="flex justify-between w-3/4">
                            <span>Дата:</span>
                            <input type="text" className="border border-black rounded"/>
                        </div>
                        <div className="flex justify-between w-3/4">
                            <span>Название:</span>
                            <input type="text" className="border border-black rounded"/>
                        </div>
                        <div className="flex justify-between w-3/4">
                            <span>Краткое описание:</span>
                            <textarea className="border border-black rounded">
                     </textarea>
                        </div>
                        <div>
                            <ReactQuill theme="snow" value={this.state.value} className="h-[200px]"
                                        onChange={() => this.setState({value: this.state.value})}/>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}