import React from 'react'
import ContactForm from '../components/ContactForm'
import MenuDesc from '../components/MenuDesc'
import SidebarMenu from '../components/SidebarMenu'

function ContactScreen() {
    return (
        <div className="contact__screen">
             <SidebarMenu/>
             <MenuDesc />

            <ContactForm/>
                 
            

          
        </div>
    )
}

export default ContactScreen
