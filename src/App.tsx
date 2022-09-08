import { useState } from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';

import './App.css'

export function App() {
  const [text, setText] = useState('http://linkedin.com/in/diegogmferreira');
  const [qrCodeLink, setQrCodeLink] = useState('');

  function handleGenerateQRCode(url_link: string) {
    QRCodeLink.toDataURL(url_link, {
      width: 600,
      margin: 4
    }, (err, url) => {
      setQrCodeLink(url);
    });
  }

  function handleCreateQRCode(text: string) {
    setText(text);
    handleGenerateQRCode(text);
  }

  return (
    <main className='container'>
      <div className='qr-container'>
        <QRCode
          value={text}
          // size={284}
        />
      </div>

      <input
        type="text"
        placeholder='Digite seu link...'
        value={text}
        onChange={(e) => handleCreateQRCode(e.target.value)}
      />

      <a className="btn-download" href={qrCodeLink} download="qrcode.png">Baixar QR Code</a>
    </main>
  )
}

