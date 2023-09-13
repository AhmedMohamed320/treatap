import React from "react";
import classes from "./Nav.module.css";
const Nav = () => {
    return (
        <section
            className={`flex items-center justify-between mainContainer ${classes.section}`}
        >
            <div className="flex items-center justify-between gap-6">
                <div className={classes.logo}>
                    <img src="/image/test-logo.png" alt="" />
                </div>
                <div>
                    <ul className="flex items-center gap-4">
                        <li>
                            <p>الصفحه الرئيسيه</p>
                        </li>
                        <span></span>
                        <li>
                            <p>خدماتنا</p>
                        </li>
                        <span></span><li>
                            <p>تواصل معانا</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex items-center justify-between gap-2">
                <div className=" justify-self-end">
                    <button>تسجيل الخروج</button>
                </div>
                <div className=" justify-self-end">
                    <button>تسجيل الخروج</button>
                </div>
            </div>
        </section>
    );
};

export default Nav;
