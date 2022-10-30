import {Data} from "../../model/Data";
import {Component} from "react";

type  Header = {
    data: Array<Data>
}

class TableComponent extends Component<Header, any> {

    private _name: string;

    constructor(props: Header, context: any, name: string) {
        super(props, context);
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    componentDidUpdate(prevProps: Readonly<Header>, prevState: Readonly<any>, snapshot?: any) {
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    }

    render() {
        return (
            <table className="w-full">
                <thead>
                <tr className="border bg-[#8091A9] text-white">
                    <th className="w-1/12 text-start">ID</th>
                    <th className="w-1/12 text-start">Дата</th>
                    <th className="text-start">Название</th>
                    <th className="w-1/12 text-start">Архив</th>
                    <th className="w-1/12 text-start">Активность</th>
                    <th className="w-1/12 text-start">Сортировка</th>
                    {/*<th className="w-1/12 text-start">Действия</th>*/}
                </tr>
                </thead>
                <tbody>
                {
                    this.props.data.map((ct, index) =>
                        <tr className="border h-[40px] hover:bg-blue-200" key={index}>
                            <td className="">{ct.id}</td>
                            <td className="">{ct.date}</td>
                            <td className="">{ct.name}</td>
                            <td className="">{ct.archive ? '1' : '0'}</td>
                            <td className="">{ct.active ? '1' : '0'}</td>
                            <td className=""><input type="number" className="border border-black rounded w-10"/></td>
                            {/*<td className="">{ct.action}</td>*/}
                        </tr>
                    )
                }
                </tbody>
            </table>
        )
    }
}

export default TableComponent;