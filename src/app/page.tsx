"use client"

import { useEffect } from "react";
import Title from "./title";
import gsap from "gsap";
import { Button } from "./button";
import EventTable from "./eventTable";
import TournamentTable from "./tournaments";

export default function Home() {

    useEffect(() => {
        gsap.from(".nat-description", {
            yPercent: 200,
            ease: "power4",
            delay: 1,
            duration: 1.5,
        })

        for (let i = 1; i < 6; i++) {
            const delay = gsap.utils.random(1, 2, 0.3);
            console.log(delay);
            gsap.from(`.desc-item:nth-child(${i})`, {
                opacity: 0,
                ease: "power2",
                delay: delay,
                duration: 0.5,
            })
        }
    })

    return (
        <div className="main">
            <Title />
            <div className="nat-description-mask">
                <div className="nat-description text">
                    <div className="nat-images">
                        <img className="pic" src="/pic3.jpg" />
                        <img className="pic" src="/pic4.jpg" />
                        <img className="pic" src="/pic2.jpg" />
                    </div>
                </div>
            </div>
            <p className="description-text text">
                With 10 championships, Parliamentary Debate at Berkeley is perennially a top contender at the <em>NPDA</em> and <em>NPTE</em> national tournaments.
                In the NPDA debate format, you have just 25 minutes to prepare arguments, with round topics changing every round. No two rounds will ever feel the same.
                Learn and apply skills in:
            </p>
            <ul className="description-list text">
                <li className="desc-item">Politics</li>
                <li className="desc-item">Public Speaking</li>
                <li className="desc-item">Philosophy</li>
                <li className="desc-item">International Relations</li>
                <li className="desc-item">Science</li>
            </ul>
            <p className="description-text text">
                Fly across the United States to compete at tournaments of the highest level. You&apos;ll meet the warm, friendly, and inclusive college debate community,
                learn from the best debate coaches in the nation, and join a team of cracked forensics junkies.
            </p>

            <div className="nat-description-mask">
                <div className="nat-description text">
                    <div className="nat-images" id="im2">
                        <img className="pic" src="/pic1.jpg" width="30%" />
                        <img className="pic" src="/pic5.jpg" width="30%" />
                        <img className="pic vertical" src="/pic6.jpg" />
                    </div>
                </div>
            </div>

            <div>
                <EventTable />
            </div>

            <div>
                <TournamentTable />
            </div>

            <div>
                <h1 className="info-sesh-title">Contact</h1>
                <div className="contact-info">
                    <p className="text contact-text">Phone: +1 (510) 560-6614</p>
                    <p className="text contact-text">Instagram: <a href="https://www.instagram.com/calparli/" target="_blank">@calparli</a></p>
                </div>
            </div>

            <div className="cta-mask"><Button className="cta-button" contents="APPLY NOW." href="https://forms.gle/idjWJgZ36Q6m44Tu6" /></div>

            <div className="block"></div>
        </div>
    );
}
