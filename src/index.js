import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './Redux/Store/Store';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductProvider } from './context/productsContext/productContext';
import { CartProvider } from './context/cartContext/cartContext';
import { NavigationProvider } from './context/BreadCrumbContext/NavigationContext';
import { OrderProvivder } from './context/orderContext/orderContext';
import { SingleProductProvider } from './context/singleProductContext/singleProductContext';
import { AddCartProvider } from './context/AddToCart/addToCart';
import { MyOrdersProvider } from './context/orderContext/ordersContext';
import ScrollToTop from './utils/ScrollToTop/ScrollToTop';
import { VariationProvider } from './context/BreadCrumbContext/variationsContext';
import { LPContentProvider } from './context/LPContentContext/LPContentContext';
import { WishListProvider } from './context/wishListContext/wishListContext';
import { ProductPageProvider } from './context/ProductPageContext/productPageContext';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { SEOctxProvider } from './context/SEOcontext/SEOcontext';
import { GlobalContextProvider } from './context/GlobalContext/globalContext';
import { ActiveSalePageProvider } from './context/ActiveSalePageContext/ActiveSalePageContext';
import { APILoadingStatus } from '@vis.gl/react-google-maps';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <APILoadingStatus key={`AIzaSyD8f3iK7p7riixIlOhI63h_uGGGguP4Vr0`}> */}
      <HelmetProvider>
        <SEOctxProvider>
          <CartProvider>
            <GlobalContextProvider>
              <ActiveSalePageProvider>
                <WishListProvider>
                  <LPContentProvider>
                    <OrderProvivder>
                      <NavigationProvider>
                        {/* <SingleProductProvider> */}
                        <AddCartProvider>
                          <ProductProvider>

                            <SingleProductProvider>
                              <MyOrdersProvider>
                                <ProductPageProvider>
                                  <VariationProvider>
                                    <Provider store={store}>
                                      <Router>
                                        <ScrollToTop>
                                          <App />
                                        </ScrollToTop>
                                      </Router>
                                    </Provider>
                                  </VariationProvider>
                                </ProductPageProvider>
                              </MyOrdersProvider>
                            </SingleProductProvider>

                          </ProductProvider>
                        </AddCartProvider>
                        {/* </SingleProductProvider> */}
                      </NavigationProvider>
                    </OrderProvivder>
                  </LPContentProvider>
                </WishListProvider>
              </ActiveSalePageProvider>
            </GlobalContextProvider>
          </CartProvider>
        </SEOctxProvider>
      </HelmetProvider>
    {/* </APILoadingStatus> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
