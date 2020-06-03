import React from "react";
import QRCodeReact from "qrcode.react";

const QRCode: React.FC = () => (
    <QRCodeReact 
        value={window.location.href} 
        size={300}
    />
)

export default QRCode;
