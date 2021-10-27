import React from 'react';
import {Footer} from "grommet";
import {FooterItem} from "./FooterItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from "@fortawesome/free-brands-svg-icons";

export const PageFooter = () => {

    return (
        <Footer background="dark-1" pad="medium" justify="end">
            <FooterItem icon={<FontAwesomeIcon icon={faGithub} />} label='GitHub' link='https://github.com/smilligan93/ghost-hunters-almanac'/>
        </Footer>
    )
}