// @ts-nocheck
import React, {useEffect} from 'react';
import AboutHeaderDash from './AboutHeaderDash';
import teamJpg from './assets/img/team.jpg';
import styles from './about.module.css';
import marketresearchLogo from './assets/img/about-us/market-research.png';
import businessPlanLogo from './assets/img/about-us/business-plan.png';
import capitalismusLogo from './assets/img/about-us/capitallismus.png';
import saleMarketingLogo from './assets/img/about-us/sales-marketing.png';
import RoundedButton from '../../toolbox/buttons/RoundedButton';
import sectionImage from './assets/img/team/section.png';
import blackArrow from '../../toolbox/buttons/svg/arrow-black.svg';
import Team from './../team/Team';
import {useLocation} from 'react-router-dom';
import Footer from './../../footer/Footer';

const AboutOurTeam = () => {

    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    return (
        <div>
            <AboutHeaderDash
                isBlack={false}
                img={teamJpg}
                textStructure={'Komandanın gücü onun hər bir üzvdür. Hər bir üzvün gücü komandadır.'}
                textStructureData={
                    'The strength of the team is each individual member. The strength of each member is the team.'
                }
            />

            <Team/>

            <div
                className={`${styles.container}`}
                style={{
                    marginTop: '135px'
                }}
            >
                <section className={`${styles.topic_section} d-flex`}>
                    <div
                        className={`${styles.paragraph_section} ${styles.team_paragraph} d-flex direction-column justify-start `}
                    >
                        <span className={`${styles.sub_header}`}>LOREM IPSUM</span>
                        <span className={`${styles.topic_title}`}>TWC-yə xoş gəlmisiniz</span>
                        <p className={`${styles.team_desc}`}>
                            TWC ilk gündən etibarən fərqliliyi, dünyaya və bir-birimizə müsbət təsirin vacibiliyini
                            vurğulayan
                            dəyərlərlə fəaliyyətinə başlayıb. İşə qəbul və inkişaf strategiyamızın məqsədi bütün müvafiq
                            bilik və
                            təcrübələri olan ən yaxşı talantların cəlb olunması ve saxlanmasını təmin etməkdir ki, biz
                            hər müştəriyə
                            doğru təcrübəsi olan doğru komadanı təqdim edə bilək. Konsultantlarmızın müsbət və davamlı
                            nəticələr əldə
                            etmək imkanı üçün TWC-yə qoşulurlar.
                        </p>
                        <button className={`${styles.more_information_button}`}>
                            Ətraflı
                            <img src={blackArrow} alt=""/>
                        </button>
                    </div>
                    <div className={`${styles.image_section} `}>
                        <img className={`${styles.topic_image}`} src={sectionImage} alt=""/>
                    </div>
                </section>
            </div>

            <section className={`${styles.services_header} d-flex direction-column justify-center align-center`}>
                <span className={`${styles.service_sub_title}`}>ProfESSİONAL KOMANDAMIZLA</span>
                <span className={`${styles.service_title}`}>Konsaltinq Servislərimiz</span>
                <div className={`${styles.circle_options} d-flex justify-between`}>
                    <div className={`${styles.circle} ${styles.activ_circle}`}></div>
                    <div className={`${styles.circle} `}></div>
                    <div className={`${styles.circle} `}></div>
                </div>
                <div className={`${styles.service_logo_group} d-flex justify-between`}>
                    <div className={`${styles.service_logo_box} d-flex direction-column align-center justify-center `}>
                        <img src={marketresearchLogo} alt="" className={`${styles.service_logo}`}/>
                        <span className={`${styles.service_logo_sub_title}`}>Bazar Araşdırması</span>
                        <RoundedButton top="10px" color="#17171766"/>
                    </div>
                    <div className={`${styles.service_logo_box} d-flex direction-column align-center justify-center `}>
                        <img src={businessPlanLogo} alt="" className={`${styles.service_logo}`}/>
                        <span className={`${styles.service_logo_sub_title}`}>Biznes Plan və TİƏ </span>
                        <RoundedButton top="10px" color="#17171766"/>
                    </div>
                    <div className={`${styles.service_logo_box} d-flex direction-column align-center justify-center `}>
                        <img src={capitalismusLogo} alt="" className={`${styles.service_logo}`}/>
                        <span className={`${styles.service_logo_sub_title}`}>Kapitallaşma</span>
                        <RoundedButton top="10px" color="#17171766"/>
                    </div>
                    <div className={`${styles.service_logo_box} d-flex direction-column align-center justify-center `}>
                        <img src={saleMarketingLogo} alt="" className={`${styles.service_logo}`}/>
                        <span className={`${styles.service_logo_sub_title}`}>Satış və Marketinq</span>
                        <RoundedButton top="10px" color="#17171766"/>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default AboutOurTeam;
