"use client";
import React, { useEffect, useState } from "react";
import classes from "./Nav.module.css";
import { TbLogin } from "react-icons/tb";
import { BsListNested, BsSearch } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

const Nav = (props) => {
    const [isFixed, setIsFixed] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsFixed(scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const navClass = `${classes.section}  ${
        isFixed ? `${classes.onScroll}` : ""
    }`;
    return (
        <section className={navClass}>
            <div className="mainContainer">
                
                <div className={classes.logo}>
                    <img src="/image/mainLogo.png" alt="" />
                </div>
                <div className={`hidden md:block ${classes.list}`}>
                    <ul className="flex items-center gap-10 text-2xl md">
                        <li>
                            <p>الرئيسيه</p>
                        </li>
                        <li>
                            <p>من نحن</p>
                        </li>
                        <li>
                            <p>تواصل معانا</p>
                        </li>
                    </ul>
                </div>
                <div className={classes.search}>
                    <input type="text" name="" id="" />
                    <BsSearch />
                </div>
                <div>
                    <button className="md:flex hidden items-center gap-3 text-2xl">
                        <p> تسجيل الدخول</p>
                        <TbLogin className="text-3xl" />
                    </button>
                    <div className={`md:hidden`}>
                    <BsListNested
                        className="text-4xl cursor-pointer"
                        onClick={props.onShowAside}
                    />
                </div>
                </div>
            </div>
        </section>
    );
};

export default Nav;
