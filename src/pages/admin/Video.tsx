import TableComponent from "../../components/admin/TableComponent";
import {Data} from "../../model/Data";

const Video = () => {
    const data = [new Data(1, "Dfhgf  sghshrth"," gshrrt h rtffjbvhf",true, true, 1)]

    return (
        <>
            <h4 className="text-2xl mt-4">Видео</h4>
            <button className="my-4 border p-1 shadow text-white rounded-[6px] bg-green-700">
                Добавить запись
            </button>
            <div className="w-full">
                <TableComponent data={data}/>
            </div>
        </>
    )
}



export default Video;