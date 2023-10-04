import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import axios from "axios";
import styles from "./RegisterHost1.module.scss";
import SelectComponent from "../../../components/select/Select";
import IcThumbsUp from "../../../components/icons/home-icons/IcThumbsUp";
import IcLightBulb from "../../../components/icons/home-icons/IcLightBulb";
import { apiGetDistricts, apiGetProvinces } from "../../../../api/apiAddress";

const RegisterHost1Container = () => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState({});
  const [communes, setCommunes] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');

  // Fetch data function
  // const fetchData = async (url, setter) => {
  //   try {
  //     const response = await fetch(url);
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const result = await response.json();
  //     // console.log(result)
  //     setter(result);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   // Fetch data for provinces
  //   fetchData("https://provinces.open-api.vn/api/", setProvinces);

  // }, []);

  // useEffect(() => {
  //   // Fetch data for districts when province changes
  //   if (selectedProvince) {
  //     fetchData (`https://provinces.open-api.vn/api/p/${selectedProvince}?depth=2`,setDistricts)
      
      
  //   }
  // }, [selectedProvince]);

  // useEffect(() => {
  //   // Fetch data for communes when district changes
  //   if (selectedDistrict) {
  //     fetchData(`https://provinces.open-api.vn/api/d/${selectedDistrict}/c/`, setCommunes);
  //   }
  // }, [selectedDistrict]);

  useEffect(()=>{
    const fetchProvince =async()=>{
      const response =await apiGetProvinces()
      if (response.status ===200){
        setProvinces(response?.data.results)
      }

    }
    fetchProvince()
  },[])

  useEffect(()=>{
    setSelectedDistrict(null)
    const fetchDistrict =async()=>{
      const response =await apiGetDistricts(selectedProvince)
      if (response.status ===200){
        setDistricts(response?.data.results)
        
      }
    }


    provinces && fetchDistrict()
    // !selectedProvince && setDistricts([])
  },[selectedProvince])

  const handleProvinceChange = (event) => {

   
    setSelectedProvince(event.target.value);
    setSelectedDistrict("");
    console.log(selectedProvince)

  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };

  const cityOptions = [
    { value: "", text: "--Chọn thành phố--", disabled: true },
    { value: "43", text: "TP Đà Nẵng" },
    { value: "92", text: "Quảng Nam" },
    { value: "75", text: "Thừa Thiên Huế" },
  ];

  const districtOptions = [
    { value: "", text: "--Chọn huyện--", disabled: true },
    { value: "1", text: "Quận Hải Châu" },
    { value: "2", text: "Quận Thanh Khê" },
    { value: "3", text: "Quận Liên Chiểu" },
  ];

  const subDistrictOptions = [
    { value: "", text: "--Chọn phường/xã--", disabled: true },
    { value: "1", text: "Phường Hòa Minh" },
    { value: "2", text: "Phường Hòa Khánh Bắc" },
    { value: "3", text: "Phường Hòa Khách Nam" },
  ];
  const [selected, setSelected] = useState("");

  // const handleChange = (event) => {
  //   console.log(
  //     "",
  //     event.target.selectedOptions[0].label,
  //     "Mã: ",
  //     event.target.value
  //   );
  //   setSelected(event.target.value);
  // };
  return (
    <div className={`${styles["register-1"]}`}>
      <div className={`${styles["content"]}`}>
        <div className="title">
          <h2 className="text-3xl">
            Đăng chỗ nghỉ của Quý vị trên InnSight và bắt đầu đón tiếp khách
            thật nhanh chóng!
          </h2>
          <p className="text-xl py-4">
            Chỗ nghỉ Quý vị muốn đăng ký nằm ở đâu?
          </p>
        </div>
        <div className="flex justify-between">
          <div className={`flex-1 px-5 shadow-md ${styles["form"]}`}>
            <div className={`$styles['info-address']`}>
              <h3 className="py-3 text-lg ">Địa chỉ cụ thể</h3>
              <div className="flex justify-between">
                <div className={` flex flex-col   $styles['info-box']`}>
                  <h3 className="py-2 ">Tỉnh/TP</h3>
                  <SelectComponent 
                    type='province' 
                    value={selectedProvince}
                    setValue={setSelectedProvince}
                    options={provinces}
                  />
                  
                  {/* <SelectComponent options={cityOptions}/> */}
                  {/* {<Select styles={{}} options={cityOptions} />} */}
                </div>

                <div className={` flex flex-col   $styles['info-box']`}>
                  <h3 className="py-2">Quận/Huyện</h3>
                  
                  <SelectComponent 
                    type='district' 
                    value={selectedDistrict}
                    setValue={setSelectedDistrict}
                    options={districts}
                  />
                 
                 
                </div>
              </div>

              <div className={` flex flex-col   $styles['info-box']`}>
                <h3 className="py-2 ">Phường/Xã</h3>
                {/* {selectedDistrict && (
                  <SelectComponent
                    label="Xã/Phường"
                    options={communes.map((commune) => ({
                      value: commune.code,
                      text: commune.name,
                    }))}
                  />
                )} */}
                {/* {<SelectComponent options={subDistrictOptions}/>} */}
                {/* {<Select styles={{}} options={cityOptions} />} */}
              </div>

              <div className={` flex flex-col   $styles['info-box']`}>
                <h3 className="py-3 ">Số nhà/Đường</h3>
                <input
                  type="text"
                  placeholder="Nhập số nhà, đường"
                  className="px-3 py-2 border-2"
                ></input>
              </div>
            </div>
          </div>
          <div className={`flex-1 flex justify-between ml-3 ${styles["hint"]}`}>
            <div className={`mx-4 p-5 flex-1 ${styles["hint-box"]}`}>
              <div className="flex h-16 align-top ">
                <IcThumbsUp />
                <h3 className="font-bold pl-2">
                  Thông tin gì cần được bao gồm trong địa chỉ của tôi?
                </h3>
              </div>
              <ul className="py-2 px-4">
                <li>
                  Vui lòng nhập tên đường và số nhà chung nơi tất cả các căn chỗ
                  nghỉ tọa lạc
                </li>
                <li>Số tầng ở địa chỉ dòng 2 (nếu có)</li>
                <li>
                  Số căn hộ hoặc tầng riêng lẻ có thể được cung cấp sau cho
                  khách
                </li>
                <li>Cung cấp mã bưu điện</li>
                <li>Hãy viết tên đường chính xác</li>
                <li>
                  Dùng địa chỉ thực sự của chỗ nghỉ, không dùng địa chỉ văn
                  phòng hay nhà của Quý vị
                </li>
              </ul>
            </div>

            <div className={`mx-4 p-5 flex-1 ${styles["hint-box"]}`}>
              <div className="flex h-16 align-top">
                <IcLightBulb />
                <h3 className="font-bold pl-2">
                  Tại sao tôi cần thêm địa chỉ của mình?
                </h3>
              </div>
              <ul className="py-2 px-4">
                <li>
                  Khi khách đặt chỗ nghỉ của Quý vị, đây là địa chỉ sẽ được chia
                  sẻ với họ. Điều quan trọng là địa chỉ này phải chính xác để
                  khách có thể dễ dàng tìm thấy chỗ nghỉ của Quý vị.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterHost1Container;
