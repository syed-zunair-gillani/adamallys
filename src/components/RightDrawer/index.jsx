
import { useEffect, useState } from 'react';
import Image from 'next/image';
import qs from "qs";
import { Axios } from '@/config/Axios';
import { useRouter } from 'next/navigation';

const RightDrawer = ({ categories, specificCategorries, setProducts }) => {
  const [generalCheckedValues, setGeneralCheckedValues] = useState([]);
  const [specificCheckedValues, setSpecificCheckedValues] = useState([]);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [isGeneralCategories, setIsGeneralCategories] = useState(true);
  const router = useRouter()

  const toggleDrawer = () => setIsDrawerVisible(!isDrawerVisible);

  const handleCheckboxChange = async (e) => {
    const value = e.target.value;
    if (isGeneralCategories) {
      setGeneralCheckedValues((prev) => {
        const updatedGValues = e.target.checked
          ? [...prev, value]
          : prev.filter((item) => item !== value);
        return updatedGValues;
      });
    } else {
      setSpecificCheckedValues((prev) => {
        const updatedSValues = e.target.checked
          ? [...prev, value]
          : prev.filter((item) => item !== value);
          return updatedSValues;
      });
    }
  };


  // useEffect(()=>{
  //     (async()=>{
  //       const params = qs.stringify({
  //         populate: ['Image', 'categories', 'specific_category'],
  //         filters: {
  //           specific_category: {
  //             Slug: {
  //               $in: specificCheckedValues,
  //             },
  //           },
  //           categories: {
  //             Slug: {
  //               $in: generalCheckedValues
  //             },
  //           },
  //         },
  //       });
    
  //       const response = await Axios.get(`/products?${params}`);
  //       setProducts(response?.data);
  //     })()
  // },[generalCheckedValues, specificCheckedValues])


  const handleSelectAllChange = (e) => {
    const checked = e.target.checked;
    setSelectAllChecked(checked);

    const selectedOptions = checked ? options.map((option) => option.Slug) : [];
    if (isGeneralCategories) {
      setGeneralCheckedValues(selectedOptions);
    } else {
      setSpecificCheckedValues(selectedOptions);
    }
  };

  const handleSwitchCategory = () => {
    setGeneralCheckedValues([]);
    setSpecificCheckedValues([]);
    setSelectAllChecked(false);
    setIsGeneralCategories((prev) => !prev);
  };

  const handleSearch = async () => {
    const params = qs.stringify({
      populate: ['Image', 'categories', 'specific_category'],
      filters: {
        specific_category: {
          Slug: {
            $in: specificCheckedValues,
          },
        },
        categories: {
          Slug: {
            $in: generalCheckedValues
          },
        },
      },
      pagination: {
        page: 1,    
        pageSize: 5
      }
    });

    const response = await Axios.get(`/products?${params}`);
    setProducts(response?.data);
  }

  const options = isGeneralCategories ? categories : specificCategorries;

  return (
    <div className='relative'>
      <button
        onClick={toggleDrawer}
        className="flex items-center justify-center gap-[12px] w-[115px] h-[55px] px-4 py-2 bg-[text-theme-main] text-white bg-theme-main"
      >
        <p>Filter</p>
        <Image
          width={24}
          height={24}
          alt='search-icon'
          src='/svg/page_info.svg'
          className=''
        />
      </button>

      {isDrawerVisible && (
        <div className="absolute right-0 w-[390px] bg-[#EBEDFF] shadow-lg py-[30px] z-[9999]">
          <div className="flex gap-[30px] justify-between items-center pb-[30px] px-[30px]">
            <p className="flex-1 text-[30px] leading-[30px] font-bold text-theme-main font_calibri">Filter</p>
            <button className='text-lg leading-[18px] text-theme-main font_calibri'>Clear</button>
            <button
              onClick={toggleDrawer}
              className="text-theme-main text-lg hover:text-gray-700"
            >
              &times;
            </button>
          </div>

          <div className="w-full h-[2px] bg-white" />
          <p className="p-[30px] flex-1 text-[30px] leading-[30px] font-bold text-theme-main font_calibri">
            {isGeneralCategories ? 'General' : 'Specific'} Category
          </p>
          <div className="space-y-[12px] px-[30px]">
            {isGeneralCategories && (
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="selectAll"
                  checked={selectAllChecked}
                  onChange={handleSelectAllChange}
                  className="hidden peer"
                />
                <label
                  htmlFor="selectAll"
                  className="w-[18px] h-[18px] border-2 border-theme-main rounded-sm flex items-center justify-center cursor-pointer"
                >
                  {selectAllChecked && (
                    <span className={`bg-theme-main w-3 h-3 text-lg opacity-1`}></span>
                  )}
                </label>
                <label className='ml-2 text-lg leading-[18px] text-theme-main font_calibri cursor-pointer' htmlFor="selectAll">
                  All
                </label>
              </div>
            )}
            {options?.map((option) => (
              <div key={option?.Slug} className="flex items-center">
                <input
                  id={option?.Slug}
                  type="checkbox"
                  value={option?.Slug}
                  checked={isGeneralCategories ? generalCheckedValues.includes(option?.Slug) : specificCheckedValues.includes(option?.Slug)}
                  onChange={handleCheckboxChange}
                  className="hidden peer"
                />
                <label
                  htmlFor={option?.Slug}
                  className="w-[18px] h-[18px] border-2 border-theme-main rounded-sm flex items-center justify-center cursor-pointer"
                >
                  {(isGeneralCategories ? generalCheckedValues : specificCheckedValues).includes(option?.Slug) && (
                    <span className={`bg-theme-main w-3 h-3 text-lg opacity-1`}></span>
                  )}
                </label>
                <label htmlFor={option?.Slug} className='ml-2 text-lg leading-[18px] text-theme-main font_calibri cursor-pointer'>
                  {option?.Name}
                </label>
              </div>
            ))}
          </div>

          <div className="px-[30px] flex flex-col gap-[8px] mt-[30px]">
            <button
              onClick={handleSearch}
              className="flex items-center justify-center gap-[12px] w-full h-[55px] px-4 py-2 bg-[text-theme-main] text-white bg-theme-main"
            >
              {isGeneralCategories ? "Search General Category" : "Search"}
            </button>
            <button
              onClick={handleSwitchCategory}
              className={`flex items-center ${isGeneralCategories ? 'justify-between' : 'justify-center'} gap-[12px] w-full h-[55px] px-[30px] py-[20px] border border-theme-main text-theme-main`}
            >
              {isGeneralCategories ? (
                <>
                  Show Specific Category
                  <Image
                    width={24}
                    height={24}
                    alt='search-icon'
                    src='/svg/arrow_circle_right.svg'
                    className=''
                  />
                </>
              ) : (
                <>
                  <Image
                    width={24}
                    height={24}
                    alt='search-icon'
                    src='/svg/arrow_circle_left.svg'
                    className=''
                  />
                  General Category
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightDrawer;
