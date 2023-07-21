import React, { useEffect, useState } from "react";

import Helper from '../../helper/axiosHelper';
import { useSelector } from "react-redux";

const baseUrl = Helper.baseUrl();




const CheckoutForm = () => {

    let {accesCode} = useSelector(state=>state.backupReducer)
    let {encrpCode} = useSelector(state=>state.backupReducer)

    // alert(accesCode)
    // alert(encrpCode)



    const axios = require('axios');




    // Define the form data



    // Make the Axios POST request






    useEffect(() => {

        // const formData = {

        //   encRequest: '07efd72333d875d55555d7f5071fca956477953dcc95c930b2edad9456d575b61f91b9285f46b0f8503fb8c15ddb1d261a31580873ac53c1afabeb31af34fa45af103c66b4f3c6cea000643cea5a2ba03d819aaca1719879720d97ae11380b93901fba418d752836fabb872d9255d7938e306a48c45f14b60e104f58f023268516988b02efbf183b1e53f33e997e2e8524ae6cf713a3ef632c39580f9c5f51c0f206e8b775d28767c680a8c13f384f80fc4ecb463a4c6e912df7235b6ffb4a375db5185997b3a5fc07980f368600ee5deb06c19891039a41293126dd78e64b35dc2a177cfa55b2b46935c4f2576b34a3005611e6d3c104c1107467250b2c48baccd2d63d2e5081e2469ec9a971891af071d20cc2a69679e9b11048796fc53d950934d3199ce471cbd54496862bdf40871a7d261811f3c4e2f2fd23f7603e81d2f684088aba02f84ef9d190741fcfa7682215f5b7a74e735dde910ccfb9a123a781c45717e2692f20dad4ecb4208bdbff2bc75249188929b49ed3ed60724e39910994b051b867b1a0869b4d689b10e2357af58a80c945223290a66b6d25227df3a78dece809e91239a330e187bc0cccb7a52347958f60cd05a9124745ef06f7c1827ae40672ec31d13d71a1e8b7b0f97f',

        //   access_code: 'AVWV63KE82AS57VWSA',

        // };





        // axios.post('https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction', formData)

        // .then(response => {

        //   console.log(response.data);

        //   // Handle the response as needed

        // })

        // .catch(error => {

        //   console.error(error);

        //   // Handle the error

        // });

            document.redirect.submit();
     

    }, []);



    return (

        // <></>

        <form id="nonseamless" method="post" name="redirect" action="https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction">

            <input type="hidden" id="encRequest" name="encRequest" value={encrpCode}/>

            <input type="hidden" name="access_code" id="access_code" value={accesCode} />

        </form>

    );





};




export default CheckoutForm;