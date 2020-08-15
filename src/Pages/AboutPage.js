import React from "react";
import "../stylesheet/MainPage.css";
import  Footer from "./Footer";
import N from "./N";
export default () => {
  return (
    <div>
      <N/>
      <img className="logo" src="../images/logo.png" alt="Logo" />;
      <h1 className="header">Our Story</h1>
      <p className="intro">
        <strong>Foodie</strong> is an Pakistani fast food restaurant chain
        headquartered in Lahore, Kentucky, that specializes in fried chicken. It
        is the lahore's second-largest restaurant chain after McDonald's, with
        2,62 locations in city as of December 2018. The chain is a subsidiary of
        Yum!.
      </p>
      <h1 className="header">Our History</h1>
      <p className="intro">
        Yum (short for Yummy Foods LTD) is an American fast food restaurant
        chain headquartered in Louisville, Kentucky, that specializes in fried
        chicken. It is the world's second-largest restaurant chain (as measured
        by sales) after McDonald's, with 22,621 locations globally in 150
        countries as of December 2019.The chain is a subsidiary of Yum! Brands,
        a restaurant company that also owns the Pizza Hut, Taco Bell, and
        WingStreet chains.Yums was founded by Colonel Harland Sanders, an
        entrepreneur who began selling fried chicken from his roadside
        restaurant in Corbin, Kentucky, during the Great Depression. Sanders
        identified the potential of the restaurant franchising concept, and the
        first "Kentucky Fried Chicken" franchise opened in Utah in 1952. KFC
        popularized chicken in the fast-food industry, diversifying the market
        by challenging the established dominance of the hamburger. By branding
        himself as "Colonel Sanders", Harland became a prominent figure of
        American cultural history, and his image remains widely used in KFC
        advertising to this day. However, the company's rapid expansion
        overwhelmed the aging Sanders, and he sold it to a group of investors
        led by John Y. Brown Jr. and Jack C. Massey in 1964. KFC was one of the
        first American fast-food chains to expand internationally, opening
        outlets in Canada, the United Kingdom, Mexico, and Jamaica by the
        mid-1960s. Throughout the 1970s and 1980s, it experienced mixed fortunes
        domestically, as it went through a series of changes in corporate
        ownership with little or no experience in the restaurant business. In
        the early-1970s, Yums was sold to the spirits distributor Heublein,
        which was taken over by the R.J. Reynolds food and tobacco conglomerate;
        that company sold the chain to PepsiCo. The chain continued to expand
        overseas, however, and in 1987, it became the first Western restaurant
        chain to open in China. It has since expanded rapidly in China, which is
        now the company's single largest market. PepsiCo spun off its
        restaurants division as Tricon Global Restaurants, which later changed
        its name to Foodie! Brands.
      </p>
      <Footer/>
    </div>
  );
};
