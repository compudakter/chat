import { CSSProperties, FC } from "react"
import { getBlockClass } from "../../utils/common"
import { Avatar } from "../ui/avatar/Avatar"
import './SideMenu.scss'
interface SideMenuProps {
    name: string
    phone: string
    block?:string
    style?:CSSProperties
}

export const SideMenu: FC<SideMenuProps> = ({ name, phone,style,block }) => {
    const blockClass = getBlockClass('side-menu',block)
    return (
        <div style={style} className={`${blockClass} side-menu`}>
            <div className="side-menu__header">
                <Avatar image="" block="side-menu" />
                <div className="side-menu__contact">
                    <div className="side-menu__contact-wrapper">
                        <div className="side-menu__name">{name}</div>
                        <div className="side-menu__phone">{phone}</div>
                    </div>
                    <div className="side-menu__drop"></div>
                </div>
            </div>
            <div className="side-menu__body">
                <SideMenuItem color="red" icon="" onClick={() => { }}>
                    Создать группу
                </SideMenuItem>
                <SideMenuItem color="red" icon="" onClick={() => { }}>
                    Создать канал
                </SideMenuItem>
                <SideMenuItem color="red" icon="" onClick={() => { }}>
                    Контакты
                </SideMenuItem>
                <SideMenuItem color="red" icon="" onClick={() => { }}>
                    Звонки
                </SideMenuItem>
                <SideMenuItem color="red" icon="" onClick={() => { }}>
                    Избранное
                </SideMenuItem>
                <SideMenuItem color="red" icon="" onClick={() => { }}>
                    Настройки
                </SideMenuItem>
                <SideMenuItem color="red" icon="" onClick={() => { }}>
                    Ночной режим
                </SideMenuItem>
            </div>
            <div className="side-menu__footer">
                <div>Messenger App</div>
                <div>Версия 1.0.0 - О программе</div>                
            </div>
        </div>
    )
}


interface SideMenuItemProps {
    icon: string
    color: string
    children: any
    onClick: (e: any) => void
}

export const SideMenuItem: FC<SideMenuItemProps> = ({ color, icon, children, onClick }) => {
    return <div className="side-menu__item">
        <div className={`side-menu__icon side-menu__icon_${color}`}>
            <img src={icon} alt="" />
        </div>
        <div className="side-menu__label">{children}</div>
    </div>
}