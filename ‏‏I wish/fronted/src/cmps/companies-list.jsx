import React from "react";
import Select from "react-select";
import { useFormik } from "formik";
import Logo from "../imgs/logo.jpeg";
import { useState } from "react";
export const CompaniesList = ({ addWishCompany, next }) => {
  // const [companies, setCompanies] = useState(undefined);
  const formik = useFormik({
    initialValues: {
      target: "",
    },
    onSubmit: (values) => {
      addWishCompany(values.target);
      next()
    },
  });

  // const sendCompanyName = (name) => {
  //   addWishCompany(name);
  // };
  // const getCompanies = async (target) => {
  //   const results = await organizationService.getOrganizationsNames(target)
  //  createCompaniesList(results)
  // };
  //   const createCompaniesList = (results) =>{
  //     console.log(results);
  // const a = setCompaniesNames(results[0].result.records)
  // const b = setCompaniesNames(results[1].result.records)
  // const c = setCompaniesNames(results[2].result.records)
  // console.log([a,b,c]);
  // setCompanies([a,b,c])
  // }
  //   const setCompaniesNames = (CompaniesList) => {
  //       CompaniesList.map((company) =>{
  //        const companyName = Object.values(company)[2];
  //         return { value: companyName, label: companyName }})
  //     };

  return (
    <div className="companies-list">
      <h2>חברה/ארגון</h2>
      <p>
        על מנת להתקדם, אנא מלא/י את שם החברה/ארגון אליהם תרצו שנעביר את (הבקשה
        (חברת חשמל, רמי לוי, עירייה וכו׳
      </p>
      {/* {!companies && ( */}
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="target">החברה/ארגון</label>
        <input
          id="target"
          name="target"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.target}
        />
        <button disabled={!formik.values.target}>הבא</button>
      </form>
      {/* )} */}
      {/* {companies && (
        <Select
          onChange={(ev) => {
            sendCompanyName(ev.value);
          }}
          options={companies}
        ></Select>
      )} */}
      <div className="strip">
        <img src={Logo} alt="" />
      </div>
    </div>
  );
};
