"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { SplitText } from "gsap/all"
import { Button } from "./button"

export default function Title() {

    useEffect(() => {
        let titleSplit = SplitText.create(".title:nth-child(1)", {
            type: "words",
            wordsClass: "title-words"
        })

        gsap.from(titleSplit.words, {
            duration: 1.5,
            yPercent: -100,
            ease: "power4",
            stagger: 0.1,
            delay: 0.5,
        })

        titleSplit = SplitText.create(".title:nth-child(2)", {
            type: "words",
            wordsClass: "title-words"
        })

        gsap.from(titleSplit.words, {
            duration: 1.5,
            yPercent: -100,
            ease: "power3",
            stagger: 0.1,
            delay: 0.5,
        })

        titleSplit = SplitText.create(".title:nth-child(3)", {
            type: "words",
            wordsClass: "title-words"
        })

        gsap.from(titleSplit.words, {
            duration: 1.5,
            yPercent: -100,
            ease: "power2",
            stagger: 0.1,
            delay: 0.5,
        })


        const initialDescriptionSplit = SplitText.create(".initial-description", {
            type: "words, lines",
        })

        gsap.from(initialDescriptionSplit.lines, {
            duration: 1.5,
            yPercent: 100,
            ease: "power4",
            stagger: 0.1,
            delay: 2.2,
        })

        const buttonSplit = SplitText.create(".cta-button", {
            type: "words, lines",
        })

        gsap.from(buttonSplit.lines, {
            duration: 1.5,
            yPercent: 100,
            ease: "power4",
            stagger: 0.1,
            delay: 2.3,
        })

        const mm = gsap.matchMedia();

        mm.add(
            "(max-width: 767px)", () => {
                gsap.to(".stand", {
                    duration: 1,
                    height: "40vh",
                    ease: "power4",
                    delay: 2.0,
                })
            }
        )

        mm.add(
            "(min-width: 767px)", () => {
                gsap.to(".stand", {
                    duration: 1,
                    height: "40vh",
                    ease: "power4",
                    delay: 2.0,
                })
            }
        )

    })



    return (
        <div className="title-section">
            <div className="title-mask">
                <h1 className="text title">cal parli</h1>
                <h1 className="text title">cal parli</h1>
                <h1 className="text title">cal parli</h1>
            </div>
            <img className="stand" src="/stand.svg" />

            <i className="title-mask"><p className="text initial-description">the winningest debate team at UC Berkeley</p></i>

            <div className="cta-mask"><Button className="cta-button" contents="APPLY NOW." href="https://forms.gle/idjWJgZ36Q6m44Tu6" /></div>
        </div>
    );
}
