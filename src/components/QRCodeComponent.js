import QRCode from "qrcode.react";
import { useState, useEffect } from "react";

function QRCodeComponent({ url }) {
    const [qrCodeUrl, setQRCodeUrl] = useState("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            setQRCodeUrl(url + "?" + Date.now());
        }, 15000);

        return () => {
            clearInterval(intervalId);
        };
    }, [url]);

    return <QRCode value={qrCodeUrl} />;
}

export default QRCodeComponent;
