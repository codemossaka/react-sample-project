import TableComponent from "../../components/admin/TableComponent";
import {Data} from "../../model/Data";

const Audio = () => {

    const data = [new Data(1, "ff j gsrgaejrg", "gfe g sgh hsrtherhg", false, true, 1)];

    return (
        <>
            fbnlgaerklugluerag
            <h4 className="text-2xl mt-4">Аудио</h4>
            <button className="my-4 border p-1 shadow text-white rounded-[6px] bg-green-700">
                Добавить запись
            </button>
            <div className="w-full">
                <TableComponent data={data}/>
            </div>
            fgiufgduhigoirenliugreiulgreiub
        </>
    )
}


export default Audio;