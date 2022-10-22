import { CompaniesList } from '../companies-list';
export const Step1 = ({addWishCompany,increment}) => {
const next=()=>{
    increment()
}
  return(
<CompaniesList addWishCompany={addWishCompany} next={next}></CompaniesList>
    )
};