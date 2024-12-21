import React, {useState} from 'react'
import './LanguagePopUp.css';
import closeBtn from '../../../Assets/icons/close-btn-black.png';
import protgalFlage from '../../../Assets/icons/portugal-flage.png';
import franceFlage from '../../../Assets/icons/france-flage.png';
import usaFlag from '../../../Assets/icons/usa-flage.png'
import arrowUpThin from '../../../Assets/icons/arrow-up-thin-charcol.png';

const LanguagePopUp = ({changeLanguage, setChangeLanguage, handleCLoseLanguageModal, currentSelectedCountry, setCurrentSelectedCountry, currentSelectedCountryFlag, setCurrentSelectedCountryFlag}) => {
    const [currentLenIndex, setCurrentLenIndex] = useState(0)
  const [lanDrop, setLanDrop] = useState(false);
//   const [currentSelectedCountry, setCurrentSelectedCountry] = useState('');
//   const [currentSelectedCountryFlag, setCurrentSelectedCountryFlag] = useState();
  const languagesData = [
    {lan: 'English', icon: usaFlag},
    {lan: 'French', icon: franceFlage},
    {lan: 'Portuguese', icon: protgalFlage}
  ]
//   const handleLanguageModal = () => {
//     setChangeLanguage(true)
//   }

  const handleActiveIndex = (index) => {
    setCurrentLenIndex(index)
    const selectedLanguage = languagesData[index];
    setCurrentSelectedCountry(selectedLanguage.lan);
    setCurrentSelectedCountryFlag(selectedLanguage.icon);
    setLanDrop(false);
  }

  const handleLanguageDropDown = () => {
    setLanDrop(!lanDrop);
  }

  return (
    <div 
      className={`show-language-modal ${changeLanguage ? 'increase-width-language-modal' : ''} `}
      onClick={handleCLoseLanguageModal}
    >
              <div 
                className={`language-modal-containt-div ${changeLanguage ? 'show-language-modal-inner-container' : ''}`}
                onClick={(e) => e.stopPropagation()}
              >
                <button className={`close-language-modal ${changeLanguage ? '' : 'hide-close-btn' }`} onClick={handleCLoseLanguageModal}>
                  <img src={closeBtn} alt='close btn' />
                </button>
                <div className='select-language-container'>
                  <div className='modal-headin-div'>
                    <h3>Language</h3>
                  </div>
                  <div className='select-language-dropdown'>
                    <h3>Select Language:</h3>
                    <div className={`languages-drop-down ${lanDrop ? 'open-language-dropdown' : ''}`}>
                      <div className='selected-language' onClick={handleLanguageDropDown}>
                        <span>
                          <img src={currentSelectedCountryFlag || usaFlag} alt='usa' />
                          <h3>{currentSelectedCountry || 'English'}</h3>
                        </span>
                          <img src={arrowUpThin} alt='arrow' className={lanDrop ? 'select-lan-arrow-up' : 'select-lan-arrow-down'} />
                      </div>
                      <div className='defrent-languages'>
                        {languagesData.map((item, index) => (
                            <div key={index} className={currentLenIndex === index ? 'single-selected-language' : 'single-language' } onClick={() => handleActiveIndex(index)} >
                              <img src={item.icon} alt='icon' />
                              <h3>{item.lan}</h3>
                            </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>    
                <div className='select-language-modal-detail-section'>
                    <h3>Text Sample</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                      a type specimen book.
                    </p>
                </div>
              </div>
            </div>
  )
}

export default LanguagePopUp
