import {Link} from "react-router-dom";

const AsideBlock = () => {

    const menus = [
        {
            name: "Рабочий стол",
            link: "/"
        },
        {
            name: "Свидетельства",
            link: "/testimony"
        },
        {
            name: "Дневник",
            link: "/journal"
        },
        {
            name: "Поклонение",
            link: "/worship"
        },
        {
            name: "Аудио",
            link: "/audio"
        },
        {
            name: "Видео",
            link: "/video"
        },
        {
            name: "Трансляция",
            link: "/stream"
        },
        {
            name: "Пользователи",
            link: "/users"
        }];


    return (
        <div className=" w-1/4 shadow shadow-gray-500">
            <ul>
                {
                    menus.map((menu, index) =>
                        <Link to={menu.link}  key={index} >
                            <li className="p-3 border-b cursor-pointer">{menu.name}</li>
                        </Link>
                    )
                }
            </ul>
        </div>
    )
}
export default AsideBlock;