import React, { useState } from "react";

const ShowRoomPage = () => {
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");

  const provinces = ["Hà Nội", "TP. Hồ Chí Minh", "Đà Nẵng", "Hải Phòng"];
  const districts = {
    "Hà Nội": ["Ba Đình", "Hoàn Kiếm", "Đống Đa"],
    "TP. Hồ Chí Minh": ["Quận 1", "Quận 3", "Quận 5"],
    "Đà Nẵng": ["Hải Châu", "Thanh Khê"],
    "Hải Phòng": ["Ngô Quyền", "Lê Chân"],
  };
  const handleSearch = () => {
    if (province && district) {
      alert(`Tìm showroom tại ${province}, ${district}`);
    } else {
      alert("Vui lòng chọn tỉnh/thành phố và quận/huyện!");
    }
  };
  return (
    <>
      {/* Banner */}
      <section className="">
        <img
          src="./img/instagram8.jpg"
          alt="Banner"
          className="w-full h-96 object-cover"
        />
      </section>
      <div className="max-w-6xl mx-auto py-8">
        {/* Search Showroom */}
        <section className="text-center mb-12">
          <h1 className="text-2xl font-bold mb-4">TÌM SHOWROOM</h1>
          <p className="text-gray-600 mb-4">
            JUNO hiện đang có mặt tại 42 showroom trên toàn quốc. Hãy chọn địa
            điểm showroom gần nhất!
          </p>
          <div className="flex justify-center space-x-4">
            <select
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              className="p-2 border rounded"
            >
              <option value="">Chọn tỉnh/thành phố</option>
              {provinces.map((prov) => (
                <option key={prov} value={prov}>
                  {prov}
                </option>
              ))}
            </select>
            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="p-2 border rounded"
              disabled={!province}
            >
              <option value="">Chọn quận/huyện</option>
              {province &&
                districts[province].map((dist) => (
                  <option key={dist} value={dist}>
                    {dist}
                  </option>
                ))}
            </select>
            <button
              onClick={handleSearch}
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Tìm kiếm
            </button>
          </div>
        </section>

        {/* Experience Section */}
        <section className="text-center mb-12">
          <h2 className="text-xl font-bold mb-4">
            TRẢI NGHIỆM MUA SẮM TẠI SHOWROOM
          </h2>
          <p className="text-gray-600 mb-4">
            Mua sắm trực tiếp tại hơn 42 showroom để nhận thêm nhiều ưu đãi và
            trải nghiệm dịch vụ tận tâm.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <img
                src="./img/instagram6.jpg"
                alt="Không gian trưng bày hiện đại"
                className="w-full h-48 object-cover rounded"
              />
              <p className="mt-2">KHÔNG GIAN TRƯNG BÀY HIỆN ĐẠI</p>
            </div>
            <div>
              <img
                src="./img/instagram5.jpg"
                alt="Mua sắm thoải mái"
                className="w-full h-48 object-cover rounded"
              />
              <p className="mt-2">MUA SẮM THỎA MÃI VÀ TIỆN LỢI</p>
            </div>
            <div>
              <img
                src="./img/instagram7.jpg"
                alt="Dịch vụ tận tâm"
                className="w-full h-48 object-cover rounded"
              />
              <p className="mt-2">DỊCH VỤ TẬN TÂM, TƯ VẤN CHU ĐÁO</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ShowRoomPage;
