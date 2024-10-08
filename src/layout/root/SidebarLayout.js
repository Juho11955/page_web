"use client"; // this is a client component

import "@/assets/css/layout.css"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// icons
import { BiSolidHome } from "react-icons/bi";
import { MdMedicalInformation, MdViewDay } from "react-icons/md";

import { useStore } from "@/hooks/useStore";
import { observer } from "mobx-react";

function SidebarLayout() {

    // router
    const router = useRouter();

    // store
    const {
        LayoutStore: { modeStyle, setModeStyle, mode_side, mode_border, mode_font, mode_logo},
    } = useStore();

    // get list data
    const [mainList, setMainList] = useState([{id: 1, name: "라이브러리", src: "/image/logo_white.png", check: "salmon"}, {id: 2, name: "개발언어", src: "/image/logo_white.png", check: ""}, {id: 3, name: "라이브러리", src: "/image/logo_white.png", check: ""}, {id: 3, name: "third", src: "/image/logo_white.png", check: ""}]);

    useEffect(() => {
        console.log(`${mainList}`)
    }, [mainList])

    return (
        <>
            <div className="sidebar" style={{backgroundColor: `${mode_side}`, borderRight: `${mode_border}`, color: `${mode_font}`}}>
                <div className="upper">
                    <img id="logo" alt="64" src={`/image/${mode_logo}.png`} onClick={() => router.push('/')} />
                </div>
                <div className="wrapper_list">
                    <br/>
                    <div className="default_list">
                        <ul>
                            <li>
                                <BiSolidHome />&nbsp;&nbsp;
                                <spen style={{fontSize: "large"}}>Home</spen>
                            </li>
                            <li>
                                <MdMedicalInformation />&nbsp;&nbsp;
                                <spen style={{fontSize: "large"}}>About</spen>
                            </li>
                            <li>
                                <MdViewDay />&nbsp;&nbsp;
                                <spen style={{fontSize: "large"}}>Recent</spen>
                            </li>                        
                        </ul>
                    </div>
                    <br/>
                    <div className="list">
                        <div style={{marginBottom: "13px"}}>
                            <span>Category</span>
                        </div>
                        <ul>
                            {mainList?.map((el, i) => 
                                <div className="listDown" style={{backgroundColor: `${el.check}`, borderRadius: "5px"}}>
                                    <li key={el.id}>
                                        <img style={{width: "14px", borderRadius: "70%", overflow: "hidden"}} src={el.src}/>
                                        &nbsp;&nbsp;
                                        <span onClick={() => router.push('/contents/1')}>{el.name}</span>
                                    </li>
                                </div>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default observer(SidebarLayout);