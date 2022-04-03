import React from "react";

function Navbar() {
  return (
    <nav className="flex flex-row h-24 fixed bottom-0 w-full bg-white border-solid border-t-2 border-gray-300 box-content">
      <div className="flex flex-auto justify-center mt-6">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.3727 5.82033L17.3727 5.82035L17.3782 5.81642C18.9142 4.72786 21.0858 4.72786 22.6218 5.81642L22.6218 5.81644L22.6273 5.82033L33.281 13.2627C34.3836 14.0339 35 15.2098 35 16.4454V31.0148C35 33.1362 33.1052 35 30.6541 35H9.34588C6.89475 35 5 33.1362 5 31.0148V16.4454C5 15.2098 5.61637 14.0339 6.71901 13.2627L17.3727 5.82033Z"
            stroke="#D5D5DC"
            stroke-width="2"
          />
        </svg>
      </div>
      <div className="flex flex-auto justify-center mt-6">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.60654 16.0673L8.60654 16.0673L8.60675 16.0633C8.95919 9.21981 14.9391 4.25216 21.6505 5.15659C26.9049 5.86467 31.1272 10.432 31.3931 15.7786C31.4498 16.9832 31.4492 18.1573 31.4486 19.3582C31.4482 20.1168 31.4478 20.8862 31.4618 21.6808L31.4619 21.6888L31.4622 21.6968C31.4784 22.1893 31.6041 22.7175 31.8173 23.1668C32.3076 24.2208 32.8105 25.269 33.3102 26.3106C33.5245 26.7571 33.7382 27.2025 33.95 27.6465V27.6467V27.649V27.6513V27.6536V27.6559V27.6582V27.6605V27.6628V27.6651V27.6674V27.6697V27.6719V27.6742V27.6765V27.6788V27.6811V27.6834V27.6857V27.688V27.6903V27.6926V27.6949V27.6972V27.6995V27.7018V27.7041V27.7064V27.7087V27.711V27.7133V27.7156V27.7179V27.7202V27.7225V27.7248V27.7271V27.7294V27.7317V27.734V27.7363V27.7386V27.7409V27.7432V27.7455V27.7478V27.7501V27.7524V27.7547V27.757V27.7593V27.7616V27.7639V27.7662V27.7685V27.7708V27.7731V27.7754V27.7777V27.78V27.7823V27.7846V27.7869V27.7892V27.7915V27.7938V27.7961V27.7984V27.8007V27.8031V27.8054V27.8077V27.81V27.8123V27.8146V27.8169V27.8192V27.8215V27.8238V27.8261V27.8284V27.8307V27.833V27.8353V27.8376V27.8399V27.8422V27.8445V27.8468V27.8491V27.8514V27.8537V27.856V27.8583V27.8607V27.863V27.8653V27.8676V27.8699V27.8722V27.8745V27.8768V27.8791V27.8814V27.8837V27.886V27.8883V27.8906V27.8929V27.8952V27.8975V27.8998V27.9022V27.9045V27.9068V27.9091V27.9114V27.9137V27.916V27.9183V27.9206V27.9229V27.9252V27.9275V27.9298V27.9321V27.9344V27.9367V27.9391V27.9414V27.9437V27.946V27.9483V27.9506V27.9529V27.9552V27.9575V27.9598V27.9621V27.9644V27.9667V27.969V27.9713V27.9737V27.976V27.9783V27.9806V27.9829V27.9852V27.9875V27.9898V27.9921V27.9944V27.9967V27.999V28.0013V28.0036V28.0059V28.0083V28.0106V28.0129V28.0152V28.0175V28.0198V28.0221V28.0244V28.0267V28.029V28.0313V28.0336V28.0359V28.0382V28.0406V28.0429V28.0452V28.0475V28.0498V28.0521V28.0544V28.0567V28.059V28.0613V28.0636V28.0659V28.0682V28.0705V28.0728V28.0751V28.0775V28.0798V28.0821V28.0844V28.0867V28.089V28.0913V28.0936V28.0959V28.0982V28.1005V28.1028V28.1051V28.1074V28.1097V28.112V28.1143V28.1167V28.119V28.1213V28.1236V28.1259V28.1282V28.1305V28.1328V28.1351V28.1374V28.1397V28.142V28.1443V28.1466V28.1489V28.1512V28.1535V28.1558V28.1581V28.1604V28.1628V28.1651V28.1674V28.1697V28.172V28.1743V28.1766V28.1789V28.1812V28.1835V28.1858V28.1881V28.1904V28.1927V28.195V28.1973V28.1996V28.2019V28.2042V28.2065V28.2088V28.2111V28.2134V28.2157V28.218V28.2203V28.2226V28.2249V28.2272V28.2295V28.2318V28.2341V28.2364V28.2387V28.241V28.2433V28.2456V28.2479V28.2502V28.2525V28.2548V28.2571V28.2594V28.2617V28.264V28.2663V28.2686V28.2709V28.2732V28.2755V28.2778V28.2801V28.2824V28.2847V28.287V28.2893V28.2916V28.2939V28.2962V28.2985V28.3008V28.3031V28.3054V28.3077V28.31V28.3123V28.3146V28.3169V28.3192V28.3215V28.3238V28.3261V28.3284V28.3307V28.333V28.3353V28.3376V28.3399V28.3422V28.3445V28.3468V28.349V28.3513V28.3536V28.3559V28.3575C33.9204 28.4202 33.8807 28.5045 33.8432 28.5955L33.838 28.6081L33.8331 28.6209C33.5232 29.432 32.8931 29.8731 32.093 29.8731L32.0915 29.8731C24.0344 29.8848 15.9773 29.8848 7.90851 29.8731H7.90698C7.11604 29.8731 6.47585 29.4296 6.1669 28.6209L6.16201 28.6081L6.15679 28.5955C6.12574 28.5202 6.08633 28.4325 6.05 28.3535V28.3513V28.349V28.3468V28.3445V28.3422V28.3399V28.3376V28.3353V28.333V28.3307V28.3284V28.3261V28.3238V28.3215V28.3192V28.3169V28.3146V28.3123V28.31V28.3077V28.3054V28.3031V28.3008V28.2985V28.2962V28.2939V28.2916V28.2893V28.287V28.2847V28.2824V28.2801V28.2778V28.2755V28.2732V28.2709V28.2686V28.2663V28.264V28.2617V28.2594V28.2571V28.2548V28.2525V28.2502V28.2479V28.2456V28.2433V28.241V28.2387V28.2364V28.2341V28.2318V28.2295V28.2272V28.2249V28.2226V28.2203V28.218V28.2157V28.2134V28.2111V28.2088V28.2065V28.2042V28.2019V28.1996V28.1973V28.195V28.1927V28.1904V28.1881V28.1858V28.1835V28.1812V28.1789V28.1766V28.1743V28.172V28.1697V28.1674V28.1651V28.1628V28.1604V28.1581V28.1558V28.1535V28.1512V28.1489V28.1466V28.1443V28.142V28.1397V28.1374V28.1351V28.1328V28.1305V28.1282V28.1259V28.1236V28.1213V28.119V28.1167V28.1143V28.112V28.1097V28.1074V28.1051V28.1028V28.1005V28.0982V28.0959V28.0936V28.0913V28.089V28.0867V28.0844V28.0821V28.0798V28.0775V28.0751V28.0728V28.0705V28.0682V28.0659V28.0636V28.0613V28.059V28.0567V28.0544V28.0521V28.0498V28.0475V28.0452V28.0429V28.0406V28.0382V28.0359V28.0336V28.0313V28.029V28.0267V28.0244V28.0221V28.0198V28.0175V28.0152V28.0129V28.0106V28.0083V28.0059V28.0036V28.0013V27.999V27.9967V27.9944V27.9921V27.9898V27.9875V27.9852V27.9829V27.9806V27.9783V27.976V27.9737V27.9713V27.969V27.9667V27.9644V27.9621V27.9598V27.9575V27.9552V27.9529V27.9506V27.9483V27.946V27.9437V27.9414V27.9391V27.9367V27.9344V27.9321V27.9298V27.9275V27.9252V27.9229V27.9206V27.9183V27.916V27.9137V27.9114V27.9091V27.9068V27.9045V27.9022V27.8998V27.8975V27.8952V27.8929V27.8906V27.8883V27.886V27.8837V27.8814V27.8791V27.8768V27.8745V27.8722V27.8699V27.8676V27.8653V27.863V27.8607V27.8583V27.856V27.8537V27.8514V27.8491V27.8468V27.8445V27.8422V27.8399V27.8376V27.8353V27.833V27.8307V27.8284V27.8261V27.8238V27.8215V27.8192V27.8169V27.8146V27.8123V27.81V27.8077V27.8054V27.8031V27.8007V27.7984V27.7961V27.7938V27.7915V27.7892V27.7869V27.7846V27.7823V27.78V27.7777V27.7754V27.7731V27.7708V27.7685V27.7662V27.7639V27.7616V27.7593V27.757V27.7547V27.7524V27.7501V27.7478V27.7455V27.7432V27.7409V27.7386V27.7363V27.734V27.7317V27.7294V27.7271V27.7248V27.7225V27.7202V27.7179V27.7156V27.7133V27.711V27.7087V27.7064V27.7041V27.7018V27.6995V27.6972V27.6949V27.6926V27.6903V27.688V27.6857V27.6834V27.6811V27.6788V27.6765V27.6742V27.6719V27.6697V27.6674V27.6651V27.6628V27.6605V27.6582V27.6559V27.6536V27.6513V27.649V27.6482C6.20464 27.3264 6.36006 27.0038 6.51586 26.6804C7.08447 25.5002 7.6582 24.3094 8.21783 23.1076C8.41655 22.6876 8.5366 22.1994 8.53835 21.7199C8.55215 20.9604 8.55024 20.2307 8.54836 19.5143C8.54531 18.3534 8.54236 17.2277 8.60654 16.0673Z"
            stroke="#D5D5DC"
            stroke-width="2.1"
          />
          <path
            d="M23.497 33.6906H23.4984C23.3005 34.0659 23.0032 34.4333 22.6125 34.7618C21.8591 35.3951 20.8636 35.7881 19.8877 35.7746C18.9992 35.7612 18.0465 35.3513 17.3132 34.7036C16.9497 34.3825 16.6744 34.035 16.4887 33.6906H16.4963H16.5152H16.5342H16.5531H16.5721H16.591H16.6099H16.6289H16.6478H16.6668H16.6857H16.7046H16.7236H16.7425H16.7614H16.7804H16.7993H16.8183H16.8372H16.8561H16.8751H16.894H16.913H16.9319H16.9508H16.9698H16.9887H17.0077H17.0266H17.0455H17.0645H17.0834H17.1023H17.1213H17.1402H17.1592H17.1781H17.197H17.216H17.2349H17.2538H17.2728H17.2917H17.3107H17.3296H17.3485H17.3675H17.3864H17.4053H17.4243H17.4432H17.4622H17.4811H17.5H17.519H17.5379H17.5568H17.5758H17.5947H17.6136H17.6326H17.6515H17.6705H17.6894H17.7083H17.7273H17.7462H17.7651H17.7841H17.803H17.8219H17.8409H17.8598H17.8787H17.8977H17.9166H17.9356H17.9545H17.9734H17.9924H18.0113H18.0302H18.0492H18.0681H18.087H18.106H18.1249H18.1438H18.1628H18.1817H18.2006H18.2196H18.2385H18.2574H18.2764H18.2953H18.3142H18.3332H18.3521H18.371H18.39H18.4089H18.4846H18.6361H18.7876H18.939H19.0147H19.0336H19.0526H19.0904H19.2419H19.3933H19.5447H19.6961H19.8475H19.9989H20.0746H20.1125H20.1314H20.1503H20.3017H20.4531H20.6044H20.7558H20.8314H20.8503H20.8693H20.9071H21.0584H21.2097H21.3611H21.4367H21.4745H21.4934H21.5123H21.6636H21.6825H21.7015H21.7204H21.7393H21.7582H21.7771H21.796H21.8149H21.8338H21.8527H21.8716H21.8905H21.9095H21.9284H21.9473H21.9662H21.9851H22.004H22.0229H22.0418H22.0607H22.0796H22.0985H22.1174H22.1363H22.1552H22.1741H22.193H22.2119H22.2309H22.2498H22.2687H22.2876H22.3065H22.3254H22.3443H22.3632H22.3821H22.401H22.4199H22.4388H22.4577H22.4766H22.4955H22.5144H22.5333H22.5522H22.5711H22.59H22.6089H22.6278H22.6467H22.6656H22.6845H22.7034H22.7223H22.7412H22.7601H22.779H22.7979H22.8168H22.8357H22.8546H22.8735H22.8924H22.9113H22.9302H22.9491H22.968H22.9869H23.0058H23.0247H23.0436H23.0625H23.0813H23.1002H23.1191H23.138H23.1569H23.1758H23.1947H23.2136H23.2325H23.2514H23.2703H23.2892H23.3081H23.327H23.3459H23.3647H23.3836H23.4025H23.4214H23.4403H23.4592H23.4781H23.497Z"
            stroke="#D5D5DC"
            stroke-width="2.1"
          />
        </svg>
      </div>
      <div className="flex flex-auto justify-center mt-6">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="1" y="7" width="38" height="25" rx="6" stroke="#D5D5DC" stroke-width="2" />
          <line y1="17" x2="40" y2="17" stroke="#D5D5DC" stroke-width="2" />
        </svg>
      </div>
      <div className="flex flex-auto justify-center mt-6">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.1948 33.0713L28.1953 33.0711C29.411 32.3707 30.3498 31.5736 30.9881 30.6315C31.6179 29.702 31.9894 28.5817 32 27.1666C31.9983 25.6555 30.8722 24.1325 28.9944 24.1809C26.8821 24.2441 24.7591 24.2298 22.6577 24.2157C21.7659 24.2097 20.878 24.2037 19.9965 24.2037C17.9092 24.2186 15.8079 24.2136 13.7088 24.2086C12.6623 24.2062 11.6163 24.2037 10.573 24.2037C9.27399 24.2227 8.22941 25.159 8.06823 26.4023L8.06819 26.4026C7.88529 27.8093 8.05584 29.0904 8.74787 30.2378C9.63474 31.6989 10.9724 32.7077 12.586 33.4846L28.1948 33.0713ZM28.1948 33.0713C25.678 34.5232 22.8565 35.0208 19.8644 34.9992L28.1948 33.0713ZM19.8642 34.9992C17.2898 34.9775 14.8402 34.5678 12.5862 33.4847L19.8642 34.9992Z"
            stroke="#D5D5DC"
            stroke-width="2"
          />
          <path
            d="M19.975 5.00009C23.8742 4.98042 27.0641 8.10858 27.1051 11.9406C27.1234 15.7683 23.9323 18.9804 20.0103 19.0001C16.0919 19.0198 12.8817 15.83 12.8802 12.0027C12.9014 8.17032 16.0724 5.01978 19.975 5.00009Z"
            stroke="#D5D5DC"
            stroke-width="2"
          />
        </svg>
      </div>
    </nav>
  );
}

export default Navbar;
