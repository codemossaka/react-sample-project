import {Component} from "react";
import {Outlet} from "react-router-dom";

import TableComponent from "../components/admin/TableComponent";
import AsideBlock from "../components/admin/AsideBlock";


export default class AdminLayout extends Component<any, any> {

    render() {
        return (
            <div className="h-screen w-full flex-col">
                <div className="border-b  bg-[#3E4B5C] h-[50px] justify-between items-center flex px-8 text-white">
                    <div className="">
                        WOrdOfGod
                    </div>
                    <div>
                        Администратор
                    </div>
                </div>
                <div className="flex " style={{height: 'calc(100% - 50px)'}}>
                    <AsideBlock/>
                    <div className="w-full px-4">
                        <Outlet/>
                    </div>
                </div>
            </div>
        );
    }
}