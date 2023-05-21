import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "./List.scss";

const List = () => {
    return (
        <div>
            <Swiper
                className="List"
                loop={true}
                slidesPerView={3}
                direction="vertical"
                spaceBetween={30}
                effect="fade"
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
            >
                <SwiperSlide>
                    <img className="GoodsImg" alt="img1" src="img/img1.jpg" />
                    <div className="Goods">
                        <span className="GoodsName">
                            아이폰 비비 Y2K 투명하드 케이스
                        </span>
                        <span className="GoodsPrice">28,900</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="GoodsImg" alt="img2" src="img/img2.jpg" />
                    <div className="Goods">
                        <span className="GoodsName">
                            아이폰 비비 하이틴 투명하드 케이스
                        </span>
                        <span className="GoodsPrice">28,900</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="GoodsImg" alt="img3" src="img/img3.jpg" />
                    <div className="Goods">
                        <span className="GoodsName">
                            아이폰 비비 모토스피드 24 실루엣 투명하드 케이스
                        </span>
                        <span className="GoodsPrice">28,900</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="GoodsImg" alt="img4" src="img/img4.jpg" />
                    <div className="Goods">
                        <span className="GoodsName">
                            아이폰 비비 모토스피드 24 투명하드 케이스
                        </span>
                        <span className="GoodsPrice">28,900</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="GoodsImg" alt="img5" src="img/img5.jpg" />
                    <div className="Goods">
                        <span className="GoodsName">
                            아이폰 비비 애니멀팜 투명하드 케이스
                        </span>
                        <span className="GoodsPrice">28,900</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="GoodsImg" alt="img6" src="img/img6.jpg" />
                    <div className="Goods">
                        <span className="GoodsName">
                            아이폰 비비 애니멀팜 트랙리스트 투명하드 케이스
                        </span>
                        <span className="GoodsPrice">28,900</span>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default List;
