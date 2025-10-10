import { useReducer, useCallback } from 'react';

const initialState = {
  name: '',
  email: '',
  message: '',
  status: 'idle' // idle | sending | success | error
};

function reducer(state, action) {
  switch (action.type) {
    case 'FIELD':
      return { ...state, [action.field]: action.value };
    case 'SENDING':
      return { ...state, status: 'sending' };
    case 'SUCCESS':
      return { ...initialState, status: 'success' };
    case 'ERROR':
      return { ...state, status: 'error' };
    default:
      return state;
  }
}

export default function useContactForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setField = useCallback((field, value) => {
    dispatch({ type: 'FIELD', field, value });
  }, []);

  const submit = useCallback(async () => {
    dispatch({ type: 'SENDING' });
    // simulate network delay - replace with real API (Formspree, Netlify functions, etc.)
    try {
      await new Promise(r => setTimeout(r, 800));
      dispatch({ type: 'SUCCESS' });
    } catch (err) {
      dispatch({ type: 'ERROR' });
    }
  }, []);

  return { state, setField, submit };
}