import { useState } from 'react';
import Image from 'next/image';

const generalCategories = ['Vegetables', 'Fruits', 'Fish', 'Bread / Cake / Pastry', 'Eggs / Milk / Yogurt / Ice Cream', 'Butter, Cheese', 'Oil and Fat', 'Beans and Peas, Dry', 'Fruits and Nuts, Dry', 'Jam and Marmalade', 'Juice', 'Syrup', 'Coffee / Cocoa / Tea', 'Pasta and Noodle', 'Cereals', 'Grains / Cake Mix', 'Salt and Sugar', 'Food Color / Essence / Pudding / Gelatin', 'Biscuit / Cracker Snack / Wafer', 'Sauce and Gravy / Sauce Mix', 'Dressing and Vinegar', 'Seasoning and Flavor / Bouillon', 'Spices and Herbs', 'Soup Powder', 'Soy Bean Products & Oriental Specialty', 'Meat', 'Meat Products', 'Ready Made Products', 'Alcohol', 'Soft Drinks', 'Cigarettes & Tobaccoes', 'Japanese Cigarettes & Tobaccoes'];

const specificCategories = ['Fresh vegetables', 'Dry Vegetables', 'Frozen Vegetables', 'Fresh Fruits', 'Frozen Fruits']

const RightDrawer = () => {
  const [checkedValues, setCheckedValues] = useState([]);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [isGeneralCategories, setIsGeneralCategories] = useState(true);

  const toggleDrawer = () => setIsDrawerVisible(!isDrawerVisible);

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setCheckedValues((prev) =>
      e.target.checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleSelectAllChange = (e) => {
    const checked = e.target.checked;
    setSelectAllChecked(checked);
    setCheckedValues(checked ? options : []);
  };

  const handleSwitchCategory = () => {
    setCheckedValues([]);
    setSelectAllChecked(false);
    setIsGeneralCategories(prev => !prev)
  };

  const options = isGeneralCategories ? generalCategories : specificCategories

  return (
    <div className='relative'>
      <button
        onClick={toggleDrawer}
        className="flex items-center justify-center gap-[12px] w-[115px] h-[55px] right-0 px-4 py-2 bg-[text-theme-main] text-white bg-theme-main">
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
        <div className="fixed inset-0 flex justify-end" style={{ zIndex: 9999 }}>
          <div className="bg-[#EBEDFF] w-[390px] h-full shadow-lg py-[30px] z-[999]">
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

            <div className='w-full h-[2px] bg-white' />
            <div style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 120px)' }}>

              <p className="p-[30px] flex-1 text-[30px] leading-[30px] font-bold text-theme-main font_calibri">{isGeneralCategories ? 'General' : 'Specific'} Category</p>
              <div className="space-y-[12px] px-[30px]">
                {
                  isGeneralCategories &&
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="selectAll"
                      checked={selectAllChecked}
                      onChange={handleSelectAllChange}
                      className="hidden peer"
                    />
                    <label
                      htmlFor={'selectAll'}
                      className="w-[18px] h-[18px] border-2 border-theme-main rounded-sm flex items-center justify-center cursor-pointer"
                    >
                      {
                        selectAllChecked &&
                        <span className={`bg-theme-main w-3 h-3 text-lg opacity-1`}></span>
                      }
                    </label>
                    <label className='ml-2 text-lg leading-[18px] text-theme-main font_calibri cursor-pointer' htmlFor="selectAll">
                      All
                    </label>
                  </div>
                }
                {options?.map((option) => (
                  <div key={option} className="flex items-center">
                    <input
                      id={option}
                      type="checkbox"
                      value={option}
                      checked={checkedValues.includes(option)}
                      onChange={handleCheckboxChange}
                      className="hidden peer"
                    />
                    <label
                      htmlFor={option}
                      className="w-[18px] h-[18px] border-2 border-theme-main rounded-sm flex items-center justify-center cursor-pointer"
                    >
                      {
                        checkedValues.includes(option) &&
                        <span className={`bg-theme-main w-3 h-3 text-lg opacity-1`}></span>
                      }
                    </label>

                    <label htmlFor={option} className='ml-2 text-lg leading-[18px] text-theme-main font_calibri cursor-pointer'>{option}
                    </label>
                  </div>
                ))}
              </div>

              <div className="px-[30px] flex flex-col gap-[8px] mt-[30px]">
                <button
                  onClick={toggleDrawer}
                  className="flex items-center justify-center gap-[12px] w-full h-[55px] right-0 px-4 py-2 bg-[text-theme-main] text-white bg-theme-main">
                  {isGeneralCategories ? "Search General Category" : "Search"}
                </button>
                <button
                  onClick={handleSwitchCategory}
                  className={`flex items-center ${isGeneralCategories ? 'justify-between' : 'justify-center'}  gap-[12px] w-full h-[55px] right-0 px-[30px] py-[20px] border border-theme-main text-theme-main`}>
                  {
                    isGeneralCategories ? <>
                      Show Specific Category
                      <Image
                        width={24}
                        height={24}
                        alt='search-icon'
                        src='/svg/arrow_circle_right.svg'
                        className=''
                      />
                    </> :
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
                  }
                </button>
              </div>
            </div>
          </div>
          <div
            className="fixed inset-0 bg-gray-800 bg-opacity-50"
            style={{ zIndex: 2 }}
            onClick={toggleDrawer}
          ></div>
        </div>
      )}
    </div>
  );
};

export default RightDrawer;
