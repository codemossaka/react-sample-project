import {Link} from "react-router-dom";
import {FaBeer} from "react-icons/all";
import {BiAddToQueue} from "react-icons/bi";
const AsideBlock = () => {

    const menus = [
        {
            name: "Рабочий стол",
            link: "/",
            icon:  <FaBeer />
        },
        {
            name: "Свидетельства",
            link: "/testimony",
            icon:  <FaBeer />
        },
        {
            name: "Дневник",
            link: "/journal",
            icon:  <FaBeer />
        },
        {
            name: "Поклонение",
            link: "/worship",
            icon:  <FaBeer />
        },
        {
            name: "Аудио",
            link: "/audio",
            icon:  <FaBeer />
        },
        {
            name: "Видео",
            link: "/video",
            icon:  <FaBeer />
        },
        {
            name: "Трансляция",
            link: "/stream",
            icon:  <FaBeer />
        },
        {
            name: "Пользователи",
            link: "/users",
            icon:  <FaBeer />
        }];


    return (
        <div className=" w-1/4 shadow shadow-gray-500">
            <ul>
                {
                    menus.map((menu, index) =>
                        <Link to={menu.link}  key={index} >
                            <li className="p-3 border-b cursor-pointer flex items-center hover:bg-gray-200">
                                <span className="pr-2">{menu.icon}</span>
                                <span>{menu.name}</span>
                            </li>
                        </Link>
                    )
                }
            </ul>
        </div>
    )
}
export default AsideBlock;