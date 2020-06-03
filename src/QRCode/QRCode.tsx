import React from "react";
import QRCodeReact from "qrcode.react";

const QRCode: React.FC = () => {
    console.log(process.env.URL)
    return (
        <QRCodeReact 
            value={`${process.env.URL}`} 
            size={300}
        />
    )
}

export default QRCode;
