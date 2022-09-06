import { CSSProperties, FC, useState } from 'react'
import {
    ReflexContainer,
    ReflexSplitter,
    ReflexElement
} from 'react-reflex'

import 'react-reflex/styles.css'
import { BriefContact } from '../../types/contact'
import { MessageData } from '../../types/message'
import { Chat } from '../chat/Chat'
import { ContactSidebar } from '../contact/sidebar/ContactSidebar'
import { SideMenu } from '../sidemenu/SideMenu'
import './PageLayout.scss'

interface PageLayoutProps {
    name: string
    visitDate: Date
    messages: MessageData[]
    contacts: BriefContact[]
}

export const PageLayout: FC<PageLayoutProps> = ({ contacts, messages, name, visitDate }) => {
    const [showMenu, setShowMenu] = useState(false)
    const menuStyle: CSSProperties = {
        left:showMenu ?'0':'-100%'
    }
    const pageClass = showMenu ? 'page-layout_bg' : ''
    return (
        <div className={`page-layout  ${pageClass}`}>
            <PageBackground show={showMenu} hide={()=>setShowMenu(false)}/>
            <SideMenu style={menuStyle} block="page-layout" name='John' phone='+7 981 222 33 44' />
            <ReflexContainer orientation="vertical">

                <ReflexElement flex={0.5} className="left-pane">
                    <ContactSidebar contacts={contacts} openMenu={() => setShowMenu(true)} />
                </ReflexElement>

                <ReflexSplitter />

                <ReflexElement flex={0.5} className="right-pane">
                    <Chat block="page-layout" messages={messages} name={name} visitDate={visitDate} />
                </ReflexElement>

            </ReflexContainer>
        </div>

    )
}

interface PageBackgroundProps{
    show:boolean
    hide:()=>void
}

const PageBackground:FC<PageBackgroundProps> = ({show,hide}) =>{
    
    const backgroundStyle = {
        zIndex:show?101:-1,
        opacity:show?1:0
    }
    return (
        <div onClick={hide} style={backgroundStyle} className="page-layout__bg">

        </div>
    )
}