import React from "react";
import { useState } from "react";
import { WishAdd } from "../cmps/wish-add";
import Logo from "../imgs/logo.jpeg";

export const HomePage = () => {
  const [status, setStatus] = useState(false);
  const reviews = [
    {
      title: "ולריה, 32",
      txt: "״הפריע לי שלא היה בחובבית, חנות שקרובה לביתי שמוכרת אוכל לכלבים,את האוכל המועדף על ניקי הכלב שלי. כתבתי באתר ותוך  מספר  שבועות שמחתי לגלות שחובבית רכשו את הסוג״",
      img: "https://static.wixstatic.com/media/11062b_6c71d7e3fab6452b9b08652255330c63~mv2_d_3273_2976_s_4_2.jpg/v1/crop/x_83,y_0,w_2965,h_2976/fill/w_156,h_156,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_6c71d7e3fab6452b9b08652255330c63~mv2_d_3273_2976_s_4_2.jpg",
    },
    {
      title: "איתי, 26",
      txt: "״אני תמיד משתמש באפל פיי בכל חנות, לצערי בתחנות דלק אי אפשר לשלם בצורה הזאת. שלחתי וויש ואני מקווה שעוד רבים ישלחו על הנושא ותחנות הדלק יוסיפו אפל פיי  בעמדות התדלוק״",
      img: "https://static.wixstatic.com/media/6e950387eaaa402aae1e185c5c4820a8.jpg/v1/crop/x_1109,y_0,w_3413,h_3413/fill/w_156,h_156,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Smiling%20Young%20Man.jpg",
    },
    {
      title: "יסמין,25 ואימאן,67",
      txt: "״אמא הייתה נתקלת בעמוד ברחוב בדרך לעבודה שהיה מסכן אותה, נכנסתי לאתר ודיווחתי  לעירייה בחצי דקה. תוך מספר שבועות העמוד תוקן והסכנה הוסרה״",
      img: "https://static.wixstatic.com/media/11062b_a14eced3e4ef4716863bb128bd22280f~mv2.jpg/v1/crop/x_912,y_0,w_3648,h_3648/fill/w_156,h_156,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Mother%20and%20Daughter.jpg",
    },
  ];
  const openModal = () => {
    setStatus(true);
  };
  const closeModal = () => {
    setStatus(false);
  };
  return (
    <>
      {!status && (
        <div className="home">
          <div className="top">
            <div className="top-section">
              <div className="wellcome">
                <p>
                  {" "}
                  נעים מאוד, אנחנו <span>I Wish</span>
                </p>
                <p>הממשק שחוסך לך זמן ושולח את</p>
                <p> התלונות והבקשות שלך בשבילך</p>
              </div>
              <img src={Logo} alt="" />
            </div>
            <div className="button-container">
              <button onClick={openModal} className="button">
                <p>
                  מה ה <span>wish</span> שלך
                </p>
              </button>
            </div>
          </div>
          <div className="about-section">
            <div className="headline">
              <p>מי אנחנו</p>
              <span>I Wish</span>
            </div>
            <p>
              <p>
                חברתנו נוסדה בשנת 2022 במטרה לשמש צינור דו כיווני בינכם לבין
                חברות וגופים שונים, אליהם אתם מעוניינים לפנות בעניינים שחשובים
                לכם, אשר דורשים את התייחסותם. פיתחנו כלי המקל עליכם את הפנייה
                אליהם ומייעל את דרך הטיפול בפניות שלכם ע"י החברות והגופים הללו.
              </p>
              ​
              <p>
                הפיתוח נעשה לא לפני שחקרנו לעומק את הנושא והבנו שכשליש מהאנשים
                שרוצים להביע תלונה או משאלה לא פונים לחברות פרטיות, גופים
                ממשלתיים, ממשלתיות, עיריות ועוד מאחר שאין להם דרך נוחה לפנות
                לגופים אלו. כשליש מהאנשים שרוצים להביע תלונה או משאלה, עושים זאת
                בדרכים שלא מספקות אותם כדוגמת: פייסבוק, דואר אלקטרוני. והשליש
                הנותר הם אותם האנשים שימשיכו להתקשר לשירות הלקוחות.  
              </p>
              <p>
                הפתרון שפיתחנו​ נועד לתת מענה לאותם 66% מהאנשים שאינם מתקשרים
                לשירות הלקוחות, ומאידך, חסרה להם דרך נוחה ויעילה להפנות לחברות
                ולגופים הללו את תלונותיהם או משאלותיהם.
              </p>
              ​
              <p>
                בנינו ממשק ידידותי הבנוי משני שלבים בלבד. כל עליכם לעשות, הוא
                להיכנס, לרשום את ה- wish שלכם, ואנו כבר נדאג לכל השאר.
              </p>
            </p>
          </div>
          <div className="bottom-section">
            {reviews.map((review) => (
              <div className="review-card">
                <div className="txt">
                  <div className="title">{review.title}</div>
                  <p>{review.txt}</p>
                </div>
                <img src={review.img} alt="" />
              </div>
            ))}
            <div className="strip"></div>
          </div>
        </div>
      )}
      {status && <WishAdd closeModal={closeModal}></WishAdd>}
    </>
  );
};
