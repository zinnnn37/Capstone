import QRCodeComponent from "./QRCodeComponent";
import "./QRImg.scss";

function QRImg() {
    const url = "192.168.0.10:3000/Form";

    return (
        <div className="QR">
            <QRCodeComponent url={url} />
        </div>
    );
}

export default QRImg;
