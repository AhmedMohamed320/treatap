import classes from "./Home.module.css";
import { MdNorthWest } from "react-icons/md";
import { BsArrowUpLeft } from "react-icons/bs";

export default function Home() {
    return (
        <section className={`mainContainer ${classes.section}`}>
            <div className={classes.part1}>
                <div className={classes.text}>
                    <div>
                        <p>رعايه صحيه</p>
                        <div className={classes.specialSpan}>
                            <span> افضل</span>

                            <span> اسرع </span>

                            <span> اضمن</span>
                        </div>
                        <p className={classes.sub}>
                            الوقاية، التشخيص، العلاج، الوقاية، الأدوية،
                            الفحوصات، التطعيمات، النظافة، الصحة، العافية،
                            الرعاية، الحفاظ، النمط الحياة الصحي، النظام الغذائي،
                            اللياقة البدنية، الاستشارة، العناية، التوعية،
                            الممارسات الصحية، الوقاية المبكرة، الحد من المخاطر،
                            الصحة العقلية، السلامة، التعليم، الدعم العاطفي.
                        </p>
                        <div className={classes.join}>
                            <div>
                                <button>انضم الينا الان</button>
                                <BsArrowUpLeft className={classes.icon} />
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
                                            src="/image/service-1.png"
                                            alt=""
                                        />
                                    </li>
                                    <li>
                                        <img
                                            src="/image/service-1.png"
                                            alt=""
                                        />
                                    </li>
                                </ul>
                                <p >
                                +٥٠٠ <span>دكتور نشط معانا</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="/image/hero.webp" alt="" />
                </div>
            </div>
            <div className={classes.part2}>
                <div className={classes.service}>
                    <div>
                        <div>
                            <img src="/image/service-1.png" alt="" />
                        </div>
                        <div>
                            <p>حجز استشاره طبيه اونلاين</p>
                            <p>
                                احجز استشارة طبية عبر الإنترنت الآن لتلبية
                                احتياجاتك الصحية.
                            </p>
                        </div>
                        <div className={classes.arrow}>
                            <MdNorthWest />
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/image/service-2.png" alt="" />
                        </div>
                        <div>
                            <p>حجز استشاره طبيه اونلاين</p>
                            <p>
                                احجز استشارة طبية عبر الإنترنت الآن لتلبية
                                احتياجاتك الصحية.
                            </p>
                        </div>
                        <div className={classes.arrow}>
                            <MdNorthWest />
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/image/service-3.png" alt="" />
                        </div>
                        <div>
                            <p>حجز استشاره طبيه اونلاين</p>
                            <p>
                                احجز استشارة طبية عبر الإنترنت الآن لتلبية
                                احتياجاتك الصحية.
                            </p>
                        </div>
                        <div className={classes.arrow}>
                            <MdNorthWest />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
