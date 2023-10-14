import React from "react";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { IoChevronForwardOutline } from "react-icons/io5";
const Filters = () => {
  return (
    <div className="Filters min-w-[300px] max-w-[350px] px-[5%] font-Roboto">
      <div className="filter-heading flex justify-between items-center py-10 font-medium text-xl">
        <span>Filters</span>
        <span className="filter-icon">
          <HiAdjustmentsHorizontal />
        </span>
      </div>
      <div className="filter-options ">
        <div className="option flex justify-between">
          <span>Tops</span>
          <span className="option-icon ">
            <IoChevronForwardOutline />
          </span>
        </div>
        <div className="option flex justify-between">
          <span>Printed T-Shirts</span>
          <span className="option-icon">
            <IoChevronForwardOutline />
          </span>
        </div>
        <div className="option flex justify-between">
          <span>Plain T-Shirts</span>
          <span className="option-icon">
            <IoChevronForwardOutline />
          </span>
        </div>
        <div className="option flex justify-between">
          <span>Kurti</span>
          <span className="option-icon">
            <IoChevronForwardOutline />
          </span>
        </div>
        <div className="option flex justify-between">
          <span>Boxers</span>
          <span className="option-icon">
            <IoChevronForwardOutline />
          </span>
        </div>
        <div className="option flex justify-between">
          <span>Full Sleeve T-Shirts</span>
          <span className="option-icon">
            <IoChevronForwardOutline />
          </span>
        </div>
        <div className="option flex justify-between">
          <span>Joggers</span>
          <span className="option-icon">
            <IoChevronForwardOutline />
          </span>
        </div>
        <div className="option flex justify-between">
          <span>Pyjamas</span>
          <span className="option-icon">
            <IoChevronForwardOutline />
          </span>
        </div>
        <div className="option flex justify-between">
          <span>Jeans</span>
          <span className="option-icon">
            <IoChevronForwardOutline />
          </span>
        </div>
      </div>
      <div className="filter-price flex flex-col">
        <div className="filter-price-heading flex justify-between py-6 font-medium text-xl">
          <span className="h-fit">Price</span>
          <span className="price-icon h-fit">
            <IoChevronForwardOutline />
          </span>
        </div>
        <span className="price-input flex flex-wrap gap-2">
          <form action="">
            <input
              type="number"
              name="min-price"
              id="min-price"
              placeholder="min-price"
            />
            <input
              type="number"
              name="max-price"
              id="max-price"
              placeholder="max-price"
            />
          </form>
        </span>
      </div>
      <div className="filter-colors flex flex-col ">
        <div className="filter-color-heading flex justify-between py-6 font-medium text-xl">
          <span className="h-fit">Colors</span>
          <span className="colors-icon h-fit">
            <IoChevronForwardOutline />
          </span>
        </div>
        <div className="color-input flex flex-wrap gap-2 py-4 ">
          <div className="color w-12 h-12 bg-red-400 rounded-2xl"></div>
          <div className="color w-12 h-12 bg-red-400 rounded-2xl"></div>
          <div className="color w-12 h-12 bg-red-400 rounded-2xl"></div>
          <div className="color w-12 h-12 bg-red-400 rounded-2xl"></div>
          <div className="color w-12 h-12 bg-red-400 rounded-2xl"></div>
          <div className="color w-12 h-12 bg-red-400 rounded-2xl"></div>
          <div className="color w-12 h-12 bg-red-400 rounded-2xl"></div>
          <div className="color w-12 h-12 bg-red-400 rounded-2xl"></div>
          <div className="color w-12 h-12 bg-red-400 rounded-2xl"></div>
          <div className="color w-12 h-12 bg-red-400 rounded-2xl"></div>
          <div className="color w-12 h-12 bg-red-400 rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
