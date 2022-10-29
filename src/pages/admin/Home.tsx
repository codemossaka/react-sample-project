import TableComponent from "../../components/admin/TableComponent";
import {Data} from "../../model/Data";

const Home = () => {
    const data = [new Data(1, "gg erktgjkts Dfhgf", " gser hg we ffjbvhf",true, true, 1)]

    return (
        <>
            <h4 className="text-2xl mt-4">Рабочий стол
            </h4>
            <button className="my-4 border p-1 shadow text-white rounded-[6px] bg-green-700">
                Добавить запись
            </button>
            <div className="w-full">
                <TableComponent data={data}/>
            </div>
        </>
    )
}



export default Home;