import "./QR.scss";
import QRImg from "../components/QRImg";

const QR = () => {
    return (
        <div className="QR__Box">
            <div className="QR__Code">
                <QRImg></QRImg>
            </div>
        </div>
    );
};

export default QR;
