const clientMessage = document.querySelector('.chat-widget');
const messages = document.querySelector( '.chat-widget__messages' );
const input = document.querySelector('.chat-widget__input');

const answersArray = ['Салют!',
  'Ожидайте', 
  'Переформулируйте ваш вопрос',
  'А вы видели госдолг США?!',
  'Перевожу запрос на специалиста',
  'Ожидание ответа сервера',
  'Подождите, сотрудник, проверяющий вашу переписку, обедает',
  'Сейчас все специалисты заняты. Но мы сохранили ваш вопрос',
  'Товара нет в наличии', 
  'Если вы хотите поговорить с человеком, нажмите "Escape"', 
  'Вам перезвонят',
  'Сожалеем, но в вашей стране сервис не поддерживается',
];

clientMessage.onclick = () => clientMessage.classList.add('chat-widget_active');  

numGenerator = (num) => (num < 10) ? '0' + num : num;

function answerVariator(arr, index) {
  let conversationDate = new Date();
  messages.innerHTML += `
    <div class="message">
      <div class="message__time">
        ${numGenerator(conversationDate.getHours())}:${numGenerator(conversationDate.getMinutes())}
      </div>
      <div class="message__text">
        ${arr[index]}
      </div>
    </div>
  `;
}

function answerRandomazer() {
  let newMessage = messages.lastElementChild;
  let index = Math.floor(Math.random() * 10);
  let conversationDate = new Date();

  if (newMessage.classList.contains('message_client')) {
    (conversationDate.getHours() > 18 || conversationDate.getHours() < 9) ? answerVariator(answersArray, 10) : answerVariator(answersArray, index);           
  }

}

input.addEventListener('keypress', function(event) {

  if (event.key === 'Enter' && input.value) {
    let conversationDate = new Date();
    
    messages.innerHTML += `
      <div class="message message_client">
        <div class="message__time">
          ${numGenerator(conversationDate.getHours())}:${numGenerator(conversationDate.getMinutes())}
        </div>
        <div class="message__text">
          ${input.value}
        </div>
      </div>
    `;

    input.value = null;

    setTimeout(answerRandomazer, 320);
  }

});

/*const redBoxWidget = document.querySelector('.chat-widget');
const messages = document.querySelector( '.chat-widget__messages' );
const inputField = document.querySelector('.chat-widget__input');

const boxOfAnswers = ['Добрый день!',
                      'Уточните, пожалуйста, Ваш вопрос', 
                      'Перевожу на специалиста...',
                      'Попробуйте сократить Ваш вопрос',
                      'Звучит несколько сложно',
                      'Доброе утро',
                      'Проверяю...',
                      'Сейчас все специалисты заняты. Но мы сохранили ваш вопрос',
                      'К сожалению, этого товара у нас нет в наличии', 
                      'Для продолжения нажмите Alt+F4', 
                      'В данный момент все специалисты куда-то ушли, но завтра утром мы Вам обязательно поможем.'
                    ];

redBoxWidget.onclick = () => redBoxWidget.classList.add('chat-widget_active');                    
addZero = (digit) => (digit < 10) ? '0' + digit : digit;

function answerSelector(arr,idx) {
    let timeStamp = new Date();
    messages.innerHTML += `
        <div class="message">
            <div class="message__time">
                ${addZero(timeStamp.getHours())}:${addZero(timeStamp.getMinutes())}
            </div>
            <div class="message__text">
                ${arr[idx]}
            </div>
        </div>
    `;
}
function autoAnswer() {
    let newMessage = messages.lastElementChild;
    let idx = Math.floor(Math.random() * 10);
    let timeStamp = new Date();
    if (newMessage.classList.contains('message_client')) {
        (timeStamp.getHours() > 18 || timeStamp.getHours() < 9) ? answerSelector(boxOfAnswers, 10) : answerSelector(boxOfAnswers, idx);           
    }
}

inputField.addEventListener('keypress', function(event){
    if (event.key === 'Enter' && inputField.value) {
        let timeStamp = new Date();
        messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">
                    ${addZero(timeStamp.getHours())}:${addZero(timeStamp.getMinutes())}
                </div>
                <div class="message__text">
                    ${inputField.value}
                </div>
            </div>
        `;
        inputField.value = null; 
        setTimeout(autoAnswer, 500);
    }
});*/