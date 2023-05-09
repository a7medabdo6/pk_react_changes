import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import "./style.css"
import { Image } from 'react-bootstrap'
import configuration from "react-global-configuration";

function NewMenu({content}) {
  return (
    <Menu isOpen={ true } width={ 150 }>
        <div className="profile-logo-sec">
                                <Image
                                    className="profile-logo-img"
                                    src={configuration.get("configData.site_logo")}
                                    width="136" height="28"
                                />
                            </div>
    {content}
  </Menu>
  )
}

export default NewMenu