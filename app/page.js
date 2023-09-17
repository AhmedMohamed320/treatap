import classes from "./Home.module.css";
import { MdNorthWest } from "react-icons/md";
import { BsArrowUpLeft } from "react-icons/bs";
import { Fragment } from "react";

export default function Home() {
    return (
        <Fragment>
            <div className={classes.up}>
                <div className={classes.circle1}></div>
                <div className={classes.circle2}></div>
                <section className={`mainContainer ${classes.section}`}>
                    <div className={classes.part1}>
                        <div className={classes.text}>
                            <div>
                                <div className={classes.image3d}>
                                    <img src="/image/hero-1.png" alt="" />
                                </div>
                                <div className={classes.image3d_2}>
                                    <img src="/image/hero-2.png" alt="" />
                                </div>
                                <p>رعايه صحيه</p>
                                <div className={classes.specialSpan}>
                                    <span> افضل</span>

                                    <span> اسرع </span>

                                    <span> اضمن</span>
                                </div>
                                <p className={classes.sub}>
                                    الوقاية، التشخيص، العلاج، الوقاية، الأدوية،
                                    الفحوصات، التطعيمات، النظافة، الصحة،
                                    العافية، الرعاية، الحفاظ، النمط الحياة
                                    الصحي، النظام الغذائي، اللياقة البدنية،
                                    الاستشارة، العناية، التوعية، الممارسات
                                    الصحية، الوقاية المبكرة، الحد من المخاطر،
                                    الصحة العقلية، السلامة، التعليم، الدعم
                                    العاطفي.
                                </p>
                                <div className={classes.join}>
                                    <div>
                                        <button>انضم الينا الان</button>
                                        <BsArrowUpLeft
                                            className={classes.icon}
                                        />
                                    </div>
                                    <div className="flex items-center gap-12">
                                        <ul className="flex">
                                            <li>
                                                <img
                                                    src="/image/service-1.png"
                                                    alt=""
                                                />
                                            </li>
                                            <li>
                                                <img
                                                    src="/image/service-2.png"
                                                    alt=""
                                                />
                                            </li>
                                            <li>
                                                <img
                                                    src="/image/service-3.png"
                                                    alt=""
                                                />
                                            </li>
                                        </ul>
                                        <p>
                                            +٥٠٠ <span>مستخدم نشط معانا</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.part2}>
                        <p>جمعنا ليك كل الي محتاجه هنا</p>
                        <div className={classes.service}>
                            <div>
                                <div className={classes.img}>
                                    <img src="/image/service-1.png" alt="" />
                                </div>
                                <div>
                                    <p>حجز استشاره طبيه اونلاين</p>
                                    <p>
                                        احجز استشارة طبية عبر الإنترنت الآن
                                        لتلبية احتياجاتك الصحية.
                                    </p>
                                </div>
                                <div className={classes.arrow}>
                                    <MdNorthWest />
                                </div>
                            </div>
                            <div>
                                <div className={classes.img}>
                                    <img src="/image/service-3.png" alt="" />
                                </div>
                                <div>
                                    <p>سوقنا</p>
                                    <p>اطلب جميع احتياجاتك الطبيه الان</p>
                                </div>
                                <div className={classes.arrow}>
                                    <MdNorthWest />
                                </div>
                            </div>
                            <div>
                                <div className={classes.img}>
                                    <img src="/image/service-1.png" alt="" />
                                </div>
                                <div>
                                    <p>سوقنا</p>
                                    <p>اطلب جميع احتياجاتك الطبيه الان</p>
                                </div>
                                <div className={classes.arrow}>
                                    <MdNorthWest />
                                </div>
                            </div>
                            <div>
                                <div className={classes.img}>
                                    <img src="/image/service-1.png" alt="" />
                                </div>
                                <div>
                                    <p>سوقنا</p>
                                    <p>اطلب جميع احتياجاتك الطبيه الان</p>
                                </div>
                                <div className={classes.arrow}>
                                    <MdNorthWest />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Fragment>
    );
}
