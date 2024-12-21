import React, { useEffect, useState } from "react";
import './FinanceBannerSlider.css';
import { url } from "../../../utils/api";


function FinanceBanner2({heading,image,mobileImage}) {
  return (
    <div className="finance_banner_2">
        <div className="finance_banner_2_desktop">
            <img src={url+image.image_url} alt="" srcset="" />
        </div>
        <div className="finance_banner_2_mobile">
            <img src={url+mobileImage.image_url} alt="" srcset="" />
        </div>
    </div>
  );
}

export default FinanceBanner2;
