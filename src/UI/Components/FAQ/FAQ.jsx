import React, { useState, useRef, useEffect } from 'react'
import './FAQ.css'
import AddBtn from '../../../Assets/icons/add-icon.png';
import { IoCheckmark } from "react-icons/io5";

const FAQ = () => {

    const [isQuestionClicked, setIsQuestionClicked] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null)
    const answerRef = useRef([]);
    useEffect(() => {
        answerRef.current.forEach(ref => {
            if (ref) ref.style.height = '0px';
        });
        
        if(activeIndex !== null){
            answerRef.current[activeIndex].style.height = answerRef.current[activeIndex].scrollHeight + 'px';
        }
    }, [activeIndex])

    const Qna = [
        {question: 'Why should i buy a living room sets?', icon: AddBtn, answereOne: 
            `Well, let's face it. Coordinating living room furniture – including fabrics, pillows, colors, 
            and sizes – can be exhausting! A living room set is an effective and convenient way to complete 
            your living space, while eliminating the stress of matching sofas, chairs and ottomans. Don’t 
            lose sleep over whether that loveseat you have your eye on is an ideal fit with your existing 
            furniture. Buy a sofa set instead!`, answereTwo: 
            `If you need more than one piece of furniture, a complete living room set is typically more affordable 
            than buying individual pieces, too! You can save time and money, and gain peace of mind as you make the 
            living room of your dreams a reality. What could be better than that!?`
        },
        {question: 'Why should i buy a living room sets?', icon: AddBtn, answereOne: 
            `Well, let's face it. Coordinating living room furniture – including fabrics, pillows, colors, 
            and sizes – can be exhausting! A living room set is an effective and convenient way to complete 
            your living space, while eliminating the stress of matching sofas, chairs and ottomans. Don’t 
            lose sleep over whether that loveseat you have your eye on is an ideal fit with your existing 
            furniture. Buy a sofa set instead!`, answereTwo: 
            `If you need more than one piece of furniture, a complete living room set is typically more affordable 
            than buying individual pieces, too! You can save time and money, and gain peace of mind as you make the 
            living room of your dreams a reality. What could be better than that!?`
        },
        {question: 'Why should i buy a living room sets?', icon: AddBtn, answereOne: 
            `Well, let's face it. Coordinating living room furniture – including fabrics, pillows, colors, 
            and sizes – can be exhausting! A living room set is an effective and convenient way to complete 
            your living space, while eliminating the stress of matching sofas, chairs and ottomans. Don’t 
            lose sleep over whether that loveseat you have your eye on is an ideal fit with your existing 
            furniture. Buy a sofa set instead!`, answereTwo: 
            `If you need more than one piece of furniture, a complete living room set is typically more affordable 
            than buying individual pieces, too! You can save time and money, and gain peace of mind as you make the 
            living room of your dreams a reality. What could be better than that!?`
        },
        {question: 'Why should i buy a living room sets?', icon: AddBtn, answereOne: 
            `Well, let's face it. Coordinating living room furniture – including fabrics, pillows, colors, 
            and sizes – can be exhausting! A living room set is an effective and convenient way to complete 
            your living space, while eliminating the stress of matching sofas, chairs and ottomans. Don’t 
            lose sleep over whether that loveseat you have your eye on is an ideal fit with your existing 
            furniture. Buy a sofa set instead!`, answereTwo: 
            `If you need more than one piece of furniture, a complete living room set is typically more affordable 
            than buying individual pieces, too! You can save time and money, and gain peace of mind as you make the 
            living room of your dreams a reality. What could be better than that!?`
        }

    ]

    const handleToggle = (index) => {
        if(activeIndex === index){
            setActiveIndex(null)
        }else{
            setActiveIndex(index)
        }
    }

  return (
    <>
        <div className='flexable-payment-option'>
            <h3>Need A Flexable Payment Option?</h3>
            <div className='flexable-payment-features'>
                <span>
                <i><IoCheckmark size={20} /> </i>
                    <p> Pre-qualify without affecting your credit</p>
                </span>
                <span>
                <i><IoCheckmark size={20} /> </i>
                    <p> No credit needed option</p>
                </span>
            </div>
            <div className='flexable-payment-features'>
                <span>
                <i><IoCheckmark size={20} /> </i>
                    <p> No money down plans available</p>
                </span>
                <span>
                    <i><IoCheckmark size={20} /> </i>
                    <p> Monthly payments, pay as you go!</p>
                </span>
            </div>
            <button>Learn more</button>
        </div>
        <div className='f-a-q-main-container'>
            <div className='faq-details'>
                <p>Stress-free furnishing with living room furniture sets</p>
                <p>
                    Unlock your living room’s full potential with a complete living room furniture set.
                    Sofas and loveseats, ottomans and accent chairs, plus more.All perfectly paired to 
                    create your coziest living space or party place!
                </p>
            </div>
            <div className='questions-answeres'>
                <p className='faq-heading'>Living Room Set FAQs</p>
                {Qna.map((item, index) => {
                    return <div key={index} className='question-toggler'>
                        <div className='question-section' onClick={() => handleToggle(index)}>
                            <p>{item.question}</p>
                            <img src={item.icon} alt='add btn' className={`${activeIndex === index ? 'rotate' : ''}`} />
                        </div>
                        <div className={`answere-section ${activeIndex === index ? 'show-answere' : ''}`}
                        ref={el =>  answerRef.current[index] = el} 
                        style={{ height: activeIndex === index ? `${answerRef.current.scrollHeight}px` : '0px' }}
                        >
                            <p>{item.answereOne}</p>
                            {/* <p>{item.answereTwo}</p> */}
                        </div>
                    </div>
                    })}
            </div>
        </div>
    </>
  )
}

export default FAQ
