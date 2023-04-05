$(document).ready(() => {
    $("#portfolio").slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        arrows: true,
        cssEase: 'linear',
    });

    $('#count').click(() => {
        $('#popup_container').css('display', 'flex');
    });

    $('#popup_container').click((e) => {
        if (e.target.id === 'popup_container')
            $('#popup_container').hide();
    })

    $('#count1').click(() => {
        $('#popup_container1').css('display', 'flex');
    });

    $('#popup_container1').click((e) => {
        if (e.target.id === 'popup_container1')
            $('#popup_container1').hide();
    })


    $('#popup-name').keypress(  (event) => {
        let nameCheck = parseInt(event.key);
        if (!(isNaN(nameCheck))) {
            event.preventDefault();
        }
    });

    $('.sub_button > button').click((event) => {
        event.preventDefault();
    })
    $('.sub_button1 > button').click((event) => {
        event.preventDefault();
    })

    $('#popup-tel').keypress(  (event) => {
        let nameCheck = parseInt(event.key);
        if (isNaN(nameCheck)) {
            event.preventDefault();
        }
    });

    $('#burger').click(() => {
        $('#header').toggleClass('menu_open');
    });

    $('#main #header #menu .menu_item').click(() => {
        $('#header').removeClass('menu_open');
    });

    const TOKEN= "5851805627:AAEglio-OPSzEqWPFUSzrrywKnfKjNXtH9Q";
    const CHAT_ID= "-1001879357531";
    const URI_API= ` https://api.telegram.org/bot${ TOKEN }/sendMessage`;

    document.getElementById('form').addEventListener('submit', function(e) {
        e.preventDefault();

        let message = `<b>Заказ с сайта!</b>\n`
        message += `<b>Отправитель: </b> ${ this.name.value }\n`;
        message += `<b>Номер телефона: </b> ${ this.phone.value }\n`;
        message += `<b>Дата: </b> ${ this.date_time.value }`;

        axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message
        })
    })

   
  let col1 = document.getElementById('col1');
  let plus1 = document.getElementById('plus1');
  let minus1 = document.getElementById('minus1');
  
  plus1.onclick = function() {
    col1.value = parseInt(col1.value) + 1;
  }
  
  minus1.onclick = function() {
    col1.value = parseInt(col1.value) - 1;
  }

  let col2 = document.getElementById('col2');
  let plus2 = document.getElementById('plus2');
  let minus2 = document.getElementById('minus2');
  
  plus2.onclick = function() {
    col2.value = parseInt(col2.value) + 1;
  }
  
  minus2.onclick = function() {
    col2.value = parseInt(col2.value) - 1;
  }

  minus2.onclick = function() {
    col2.value = parseInt(col2.value) - 1;
  }

  let col3 = document.getElementById('col3');
  let plus3 = document.getElementById('plus3');
  let minus3 = document.getElementById('minus3');
  
  plus3.onclick = function() {
    col3.value = parseInt(col3.value) + 1;
  }
  
  minus3.onclick = function() {
    col3.value = parseInt(col3.value) - 1;
  }



let col4 = document.getElementById('col4');
let plus4 = document.getElementById('plus4');
let minus4 = document.getElementById('minus4');

plus4.onclick = function() {
  col4.value = parseInt(col4.value) + 1;
}

minus4.onclick = function() {
  col4.value = parseInt(col4.value) - 1;
}



let col5 = document.getElementById('col5');
let plus5 = document.getElementById('plus5');
let minus5 = document.getElementById('minus5');

plus5.onclick = function() {
  col5.value = parseInt(col5.value) + 1;
}

minus5.onclick = function() {
  col5.value = parseInt(col5.value) - 1;
}



let col6 = document.getElementById('col6');
let plus6 = document.getElementById('plus6');
let minus6 = document.getElementById('minus6');

plus6.onclick = function() {
  col6.value = parseInt(col6.value) + 1;
}

minus6.onclick = function() {
  col6.value = parseInt(col6.value) - 1;
}



let col7 = document.getElementById('col7');
let plus7 = document.getElementById('plus7');
let minus7 = document.getElementById('minus7');
plus7.onclick = function() {
  col7.value = parseInt(col7.value) + 1;
}

minus7.onclick = function() {
  col7.value = parseInt(col7.value) - 1;
}



let col8 = document.getElementById('col8');
let plus8 = document.getElementById('plus8');
let minus8 = document.getElementById('minus8');
plus8.onclick = function() {
  col8.value = parseInt(col8.value) + 1;
}

minus8.onclick = function() {
  col8.value = parseInt(col8.value) - 1;}

 
}) 
