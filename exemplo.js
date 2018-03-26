import { Redux } from 'https://cdnjs.cloudflare.com/ajax/libs/redux/3.7.2/redux.js';
//CONTADOR


//reducers
function contador(state = 0, action) {

	switch(action.type) {
  	case 'INCREMENTO':
    	return state + 1;
    case 'DECREMENTO':
    	return state - 1;
    case 'ZERAR_CONTADOR':
    	return 0;
    default:
    	return state;
  }
}

//criar store
let store = Redux.createStore(contador);

//recuperar estado
document.write(store.getState() + '<br />');

//
store.dispatch({ type: 'INCREMENTO'});
store.dispatch({ type: 'INCREMENTO'});
store.dispatch({ type: 'INCREMENTO'});
store.dispatch({ type: 'INCREMENTO'});

document.write(store.getState() + '<br />');

store.dispatch({ type: 'DECREMENTO'});

document.write(store.getState() + '<br />');

store.dispatch({ type: 'ZERAR_CONTADOR'});
document.write(store.getState() + '<br />');


