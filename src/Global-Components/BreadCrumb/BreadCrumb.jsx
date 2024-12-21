import React from 'react';
import './BreadCrumb.css';
import { useLocation, Link } from 'react-router-dom';
import { useNavigation } from '../../context/BreadCrumbContext/NavigationContext';
import { FaHouseChimney } from 'react-icons/fa6';
import rightArrow from "../../Assets/right-arrow.png";

const Breadcrumb = ({ category, sku, categorySlug }) => {
    const location = useLocation();
    const { navigationHistory } = useNavigation();
    const pathnames = location.pathname.split('/').filter(x => x);

    // Combine navigation history and current pathnames
    const fullPathNames = [...navigationHistory, ...pathnames];

    if (fullPathNames.length === 0) {
        return null; // Don't show anything if on the home page
    }

    return (
        <nav>
            <ol className="bread-crumb-list">
                {/* Home Link */}
                <li style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Link to="/">
                        <FaHouseChimney style={{ height: "20px", width: "20px" }} />
                    </Link>
                </li>

                {/* Dynamic Breadcrumb Links */}
                {fullPathNames.map((pathname, index) => {
                    // Determine if the current route is the product page
                    const isProductPage = location.pathname.includes('/single-product') && index === fullPathNames.length - 1;
               

                    // Determine if the current route is the category
                    const isCategory = pathname === 'single-product' && category;

                    const name = isProductPage && sku
                        ? sku // Use SKU if on product page
                        : isCategory
                            ? category // Replace "single-product" with category
                            : pathname.charAt(0).toUpperCase() + pathname.slice(1).replace(/-/g, ' '); // Default name
                            const routeTo = isProductPage && categorySlug && index === fullPathNames.length - 1
                            ? `/single-product/${sku}`  // Ensure that SKU does not redirect to the category page
                            : isCategory
                            ? `/${categorySlug}` // Go to categorySlug for category links
                            : `/${fullPathNames.slice(0, index + 1).join('/')}`; // Default behavior
                        
    
                    return (
                        <li className="bread_links" style={{ display: "flex", alignItems: "center", justifyContent: "center" }} key={routeTo}>
                            <span><img src={rightArrow} style={{ height: "12px", width: "12px" }} alt="arrow" /></span>
                            <Link className={index === fullPathNames.length - 1 ? "bread_links_sub active":"bread_links_sub"} style={{ marginLeft: "5px", fontSize: "16px", marginBottom: "1px" }} to={routeTo}>
                                {name}
                            </Link>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
