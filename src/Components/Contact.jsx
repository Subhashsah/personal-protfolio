import React, { useRef, useEffect } from 'react';
import useContactForm from '../hooks/useContactForm';

export default function Contact() {
  const nameRef = useRef(null);
  const { state, setField, submit } = useContactForm();

  // focus name input when component mounts
  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  return (
    <section id="contact" className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <div className="bg-card p-6 rounded-xl">
        <label className="block mb-2 text-sm">Name</label>
        <input ref={nameRef} value={state.name} onChange={e => setField('name', e.target.value)} className="w-full p-2 border rounded mb-3" />

        <label className="block mb-2 text-sm">Email</label>
        <input value={state.email} onChange={e => setField('email', e.target.value)} className="w-full p-2 border rounded mb-3" />

        <label className="block mb-2 text-sm">Message</label>
        <textarea value={state.message} onChange={e => setField('message', e.target.value)} className="w-full p-2 border rounded mb-3" rows={6} />

        <div className="flex items-center gap-4">
          <button onClick={submit} className="px-4 py-2 rounded bg-accent text-text border" disabled={state.status === 'sending'}>{state.status === 'sending' ? 'Sending...' : 'Send Message'}</button>
          {state.status === 'success' && <span className="text-sm text-green-400">Sent — I will respond shortly.</span>}
          {state.status === 'error' && <span className="text-sm text-red-400">Failed to send. Try again later.</span>}
        </div>
      </div>
    </section>
  );
}