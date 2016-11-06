
/**
 * Created by San on 11/5/2016.
 */

var smallBusiness = 0,mediumBusiness = 0,largeBusiness = 0;
//================================================================================================================
function checkIfBusiness() {
    if(document.getElementById("business").selected){

        document.getElementById("pl1").innerHTML='';
        document.getElementById("pl2").innerHTML='';
        document.getElementById("pl3").innerHTML='';
        document.getElementById("pl4").innerHTML='';
        document.getElementById("pl5").innerHTML='';
        document.getElementById("pl6").innerHTML='';
        document.getElementById("pl7").innerHTML='';
        document.getElementById("pl8").innerHTML='';

        document.getElementById('select1').innerHTML =
            '<label>\
            <span>Number of employees in your organization:</span>\
        <select name="dropdown" >\
            <option></option>\
            <option id = "sb1">0-100</option>\
            <option id = "mb1">100-2000</option>\
            <option id = "lb1">2000+</option>\
            </select>\
            </label>';

        document.getElementById('select2').innerHTML =
            '<label>\
            <span>Expected Card Limit</span>\
        <select name="dropdown" >\
        <option></option>\
            <option id = "sb2">1000-5000</option>\
            <option id = "mb2">5000-10000</option>\
            <option id = "lb2">10000+</option>\
            </select>\
            </label>';

        document.getElementById('select3').innerHTML =
            '<label>\
            <span>Your Revenue</span>\
        <select name="dropdown" " >\
            <option></option>\
            <option id = "sb3">0-500k</option>\
            <option id = "mb3">500k-2M</option>\
            <option id = "lb3">2M+</option>\
            </select>\
            </label>';
    }
}
//====================================================================================================================
function showMyCard() {
    if(document.getElementById("business").selected){
        if(document.getElementById("sb1").selected){
            smallBusiness++;
        }
        if(document.getElementById("sb2").selected){
            smallBusiness++;
        }
        if(document.getElementById("sb3").selected){
            smallBusiness++;
        }
        if(document.getElementById("mb1").selected){
            mediumBusiness++;
        }
        if(document.getElementById("mb2").selected){
            mediumBusiness++;
        }
        if(document.getElementById("mb3").selected){
            mediumBusiness++;
        }
        if(document.getElementById("lb1").selected){
            largeBusiness++;
        }
        if(document.getElementById("lb2").selected){
            largeBusiness++;
        }
        if(document.getElementById("lb3").selected){
            largeBusiness++;
        }
        if(smallBusiness > mediumBusiness){
            if(smallBusiness>largeBusiness){
                document.getElementById("results").innerHTML='<p>The best card for you is ' +
                    '<a href = "https://www.firstbankcard.com/site/small_business/small_business.fhtml">' +
                    'First Bank Small Business Card</a>' +
                    '';
                return;
            }
        }else if(mediumBusiness > largeBusiness){
            document.getElementById("results").innerHTML='<p>The best card for you is ' +
                '<a href = "https://www.firstbankcard.com/site/midsize_business/midsize_business.fhtml">' +
                'First Bank Mid Size Business Card</a>' +
                '';
            return;
        } else {
            document.getElementById("results").innerHTML='<p>The best card for you is ' +
                '<a href = "https://www.firstbankcard.com/site/commercial/commercial.fhtml">' +
                'First Bank Commercial Business Card</a>' +
                '';
            return;
        }
    }

    if(document.getElementById("aexpress").selected){
        document.getElementById("results").innerHTML='<p>The best card for you is ' +
            '<a href = "https://www.firstnational.com/site/personal/credit-card/amex/amex-standard.fhtml">' +
            'First National Bank American Express Card</a>' +
            '';
        return;
    }

    if(document.getElementById("cs1").selected){
        document.getElementById("results").innerHTML='<p>The best card for you is ' +
            '<a href = "https://www.firstnational.com/site/personal/credit-card/visa/visa-secured.fhtml">' +
            'First National Bank Secured Visa Card</a>' +
            '';
        return;
    }
    if(document.getElementById("cs2").selected){
        document.getElementById("results").innerHTML='<p>The best card for you is ' +
            '<a href = "https://www.firstnational.com/site/personal/credit-card/visa/visa-secured.fhtml">' +
            'First National Bank Secured Visa Card</a>' +
            '';
        return;
    }

    if(document.getElementById("btyes").selected){
        document.getElementById("results").innerHTML='<p>The best card for you is ' +
            '<a href = "https://www.firstnational.com/site/personal/credit-card/visa/visa-platinum.fhtml">' +
            'First National Bank Platinum Edition Visa Card</a>' +
            '';
        return;
    }

    if(document.getElementById("cback").selected){
        document.getElementById("results").innerHTML='<p>The best card for you is ' +
            '<a href = "https://www.firstnational.com/site/personal/credit-card/visa/visa-completerewards.fhtml">' +
            'First National Bank Complete Rewards Card</a>' +
            '';
        return;
    }
    document.getElementById("results").innerHTML='<p>The best card for you is ' +
        '<a href = "https://www.firstnational.com/site/personal/credit-card/visa/visa-completerewards.fhtml">' +
        'First National Bank Complete Rewards Card</a>' +
        '';
}
